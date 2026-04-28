import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { getAuthUserId } from "@convex-dev/auth/server";

export const checkNameClaimed = query({
  args: {
    name: v.string(),
  },
  handler: async (ctx, args) => {
    const trimmedName = args.name.trim().slice(0, 20);
    const existingUser = await ctx.db
      .query("users")
      .withIndex("customDisplayName", (q) => q.eq("customDisplayName", trimmedName))
      .first();

    return existingUser !== null;
  },
});

export const claimName = mutation({
  args: {
    name: v.string(),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) {
      throw new Error("User must be authenticated to claim a name.");
    }

    const trimmedName = args.name.trim().slice(0, 20);
    if (trimmedName.length === 0) {
      throw new Error("Name cannot be empty");
    }

    // Check if another user already claimed this name
    const existingUser = await ctx.db
      .query("users")
      .withIndex("customDisplayName", (q) => q.eq("customDisplayName", trimmedName))
      .first();

    if (existingUser !== null && existingUser._id !== userId) {
      throw new Error("This name is already claimed by someone else.");
    }

    // Update the user's customDisplayName
    await ctx.db.patch(userId, { customDisplayName: trimmedName, isAnonymous: false });

    // Migrate existing anonymous scores under this name to the user
    const allScoresForName = await ctx.db
      .query("leaderboard")
      .withIndex("by_playerName", (q) => q.eq("playerName", trimmedName))
      .collect();

    for (const score of allScoresForName) {
      if (score.userId === undefined) {
         await ctx.db.patch(score._id, { userId });
      }
    }

    // If the user previously had a different customDisplayName, do we migrate those scores?
    // Actually, scores submitted when authenticated are stored with userId.
    // The playername stored on the record will be historical or we can update it.
    // Let's update the playername on all their past scores to the new name.
    const allUserScores = await ctx.db
      .query("leaderboard")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .collect();

    for (const score of allUserScores) {
      if (score.playerName !== trimmedName) {
         await ctx.db.patch(score._id, { playerName: trimmedName });
      }
    }
  },
});

export const currentUserDetails = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) return null;
    const user = await ctx.db.get(userId);
    return {
      name: user?.customDisplayName || null,
      image: user?.image || null,
    };
  }
});