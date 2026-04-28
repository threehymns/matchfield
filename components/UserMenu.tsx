import React from "react";
import { useAuthActions } from "@convex-dev/auth/react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../convex/_generated/api";

export function UserMenu() {
  const { signIn, signOut } = useAuthActions();
  // We use ts-ignore because we don't have a configured project for codegen.
  // @ts-ignore
  const userDetails = useQuery(api.users.currentUserDetails);

  return (
    <div className="absolute top-4 right-4 flex items-center gap-2 z-50">
      {userDetails !== undefined ? (
        userDetails === null ? (
          <button
            onClick={() => void signIn("google")}
            className="text-xs text-[var(--secondary-text-color)] hover:text-[var(--text-color)] opacity-70 hover:opacity-100 transition-opacity bg-transparent border-none"
            style={{ padding: '0.25rem 0.5rem' }}
          >
            Sign In
          </button>
        ) : (
          <div className="flex items-center gap-4 bg-black/20 rounded-full pl-2 pr-4 py-1.5 shadow-sm border border-white/5">
            <a
              href="/profile"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              title="Go to profile"
            >
              {userDetails.image && (
                <img
                  src={userDetails.image}
                  alt={userDetails.name || "User"}
                  className="w-6 h-6 rounded-full object-cover border border-white/20"
                />
              )}
              <span className="text-sm text-[var(--text-color)] font-medium">
                {userDetails.name || "Player"}
              </span>
            </a>
            <button
              onClick={() => void signOut()}
              className="text-xs text-[var(--secondary-text-color)] hover:text-red-400 transition"
            >
              Sign Out
            </button>
          </div>
        )
      ) : (
        <div className="w-24 h-10 bg-gray-700 animate-pulse rounded"></div>
      )}
    </div>
  );
}
