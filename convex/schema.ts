import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

export default defineSchema({
  ...authTables,
  users: defineTable({
    name: v.optional(v.string()),
    image: v.optional(v.string()),
    email: v.optional(v.string()),
    emailVerificationTime: v.optional(v.number()),
    phone: v.optional(v.string()),
    phoneVerificationTime: v.optional(v.number()),
    isAnonymous: v.optional(v.boolean()),
    customDisplayName: v.optional(v.string()),
  }).index("email", ["email"]).index("customDisplayName", ["customDisplayName"]),
  leaderboard: defineTable({
    playerName: v.string(),
    userId: v.optional(v.id("users")),
    gameMode: v.string(), // "Classic" or "Custom"
    settingsHash: v.string(), // "classic" for Classic, deterministic key for Custom
    longestCombo: v.number(),
    isPerfectScore: v.boolean(),
    completedAt: v.number(), // timestamp
  })
    .index("by_settings", ["settingsHash", "longestCombo"])
    .index("by_mode", ["gameMode", "longestCombo"])
    .index("by_userId", ["userId"]),
});
