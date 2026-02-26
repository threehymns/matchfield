import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  leaderboard: defineTable({
    playerName: v.string(),
    gameMode: v.string(), // "Classic" or "Custom"
    settingsHash: v.string(), // "classic" for Classic, deterministic key for Custom
    longestCombo: v.number(),
    isPerfectScore: v.boolean(),
    completedAt: v.number(), // timestamp
  })
    .index("by_settings", ["settingsHash", "longestCombo"])
    .index("by_mode", ["gameMode", "longestCombo"]),
});
