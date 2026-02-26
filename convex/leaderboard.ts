import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const getTopScores = query({
  args: {
    tileset: v.optional(v.string()),
    limit: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const limit = args.limit ?? 10;

    if (args.tileset) {
      const scores = await ctx.db
        .query("leaderboard")
        .withIndex("by_tileset", (q) => q.eq("tileset", args.tileset!))
        .order("desc")
        .take(100);

      // Sort by longestCombo descending, then by completedAt ascending (earlier = better)
      scores.sort((a, b) => {
        if (b.longestCombo !== a.longestCombo) {
          return b.longestCombo - a.longestCombo;
        }
        return a.completedAt - b.completedAt;
      });

      return scores.slice(0, limit);
    }

    // Global leaderboard
    const scores = await ctx.db
      .query("leaderboard")
      .withIndex("by_combo")
      .order("desc")
      .take(100);

    scores.sort((a, b) => {
      if (b.longestCombo !== a.longestCombo) {
        return b.longestCombo - a.longestCombo;
      }
      return a.completedAt - b.completedAt;
    });

    return scores.slice(0, limit);
  },
});

export const submitScore = mutation({
  args: {
    playerName: v.string(),
    tileset: v.string(),
    longestCombo: v.number(),
    isPerfectScore: v.boolean(),
  },
  handler: async (ctx, args) => {
    const trimmedName = args.playerName.trim().slice(0, 20);
    if (trimmedName.length === 0) {
      throw new Error("Player name cannot be empty");
    }

    await ctx.db.insert("leaderboard", {
      playerName: trimmedName,
      tileset: args.tileset,
      longestCombo: args.longestCombo,
      isPerfectScore: args.isPerfectScore,
      completedAt: Date.now(),
    });
  },
});
