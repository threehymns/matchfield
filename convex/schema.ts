import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  leaderboard: defineTable({
    playerName: v.string(),
    tileset: v.string(),
    longestCombo: v.number(),
    isPerfectScore: v.boolean(),
    completedAt: v.number(), // timestamp
  })
    .index("by_tileset", ["tileset", "longestCombo"])
    .index("by_combo", ["longestCombo"]),
});
