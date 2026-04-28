import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const getTopScores = query({
  args: {
    settingsHash: v.string(),
    limit: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const limit = args.limit ?? 10;

    const scores = await ctx.db
      .query("leaderboard")
      .withIndex("by_settings", (q) => q.eq("settingsHash", args.settingsHash))
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
  },
});

/**
 * Returns all distinct settingsHash values that have at least one score,
 * along with the count of entries and the top combo for each.
 * Used by the leaderboard browser to let players discover available boards.
 */
export const listBoards = query({
  args: {},
  handler: async (ctx) => {
    // Scan all entries (capped for safety) and aggregate by settingsHash.
    const all = await ctx.db.query("leaderboard").take(5000);

    const map = new Map<
      string,
      { settingsHash: string; gameMode: string; count: number; topCombo: number }
    >();

    for (const entry of all) {
      const existing = map.get(entry.settingsHash);
      if (existing) {
        existing.count++;
        if (entry.longestCombo > existing.topCombo) {
          existing.topCombo = entry.longestCombo;
        }
      } else {
        map.set(entry.settingsHash, {
          settingsHash: entry.settingsHash,
          gameMode: entry.gameMode,
          count: 1,
          topCombo: entry.longestCombo,
        });
      }
    }

    // Sort: Classic first, then by number of entries descending
    const boards = Array.from(map.values());
    boards.sort((a, b) => {
      if (a.settingsHash === "classic" && b.settingsHash !== "classic") return -1;
      if (b.settingsHash === "classic" && a.settingsHash !== "classic") return 1;
      return b.count - a.count;
    });

    return boards;
  },
});

import { getAuthUserId } from "@convex-dev/auth/server";

export const submitScore = mutation({
  args: {
    playerName: v.string(),
    gameMode: v.string(),
    settingsHash: v.string(),
    longestCombo: v.number(),
    isPerfectScore: v.boolean(),
  },
  handler: async (ctx, args) => {
    const trimmedName = args.playerName.trim().slice(0, 20);
    if (trimmedName.length === 0) {
      throw new Error("Player name cannot be empty");
    }

    const userId = await getAuthUserId(ctx);

    // If they are not logged in, ensure the name is not claimed
    if (userId === null) {
      const existingUser = await ctx.db
        .query("users")
        .withIndex("customDisplayName", (q) => q.eq("customDisplayName", trimmedName))
        .first();

      if (existingUser !== null) {
         throw new Error("This name is already claimed by a registered user. Please sign in or choose another name.");
      }
    } else {
      // If logged in, they should only be submitting scores under their claimed name
      const user = await ctx.db.get(userId);
      if (user && user.customDisplayName && user.customDisplayName !== trimmedName) {
        throw new Error("You must submit scores under your claimed name, or change your name.");
      }
    }

    await ctx.db.insert("leaderboard", {
      playerName: trimmedName,
      userId: userId !== null ? userId : undefined,
      gameMode: args.gameMode,
      settingsHash: args.settingsHash,
      longestCombo: args.longestCombo,
      isPerfectScore: args.isPerfectScore,
      completedAt: Date.now(),
    });
  },
});
