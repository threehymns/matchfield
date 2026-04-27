import React from "react";
import { useAuthActions } from "@convex-dev/auth/react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../convex/_generated/api";

export function UserMenu() {
  const { signIn, signOut } = useAuthActions();
  // We use ts-ignore because we don't have a configured project for codegen.
  // @ts-ignore
  const userName = useQuery(api.users.currentUserName);

  return (
    <div className="absolute top-4 right-4 flex items-center gap-2 z-50">
      {userName !== undefined ? (
        userName === null ? (
          <button
            onClick={() => void signIn("google")}
            className="px-4 py-2 bg-white text-black font-semibold rounded hover:bg-gray-200 transition"
          >
            Sign in with Google
          </button>
        ) : (
          <div className="flex items-center gap-4">
            <span className="text-[var(--text-color)] font-medium">
              Hello, {userName}
            </span>
            <button
              onClick={() => void signOut()}
              className="px-4 py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition"
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
