import React from "react";
import ReactDOM from "react-dom/client";
import { ConvexReactClient } from "convex/react";
import { ConvexAuthProvider } from "@convex-dev/auth/react";
import App from "./App";
import "./global.css";
import { inject } from "@vercel/analytics";

inject();

const convexUrl = import.meta.env.VITE_CONVEX_URL;

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);

if (convexUrl) {
  const convex = new ConvexReactClient(convexUrl);
  root.render(
    <React.StrictMode>
      <ConvexAuthProvider client={convex}>
        <App />
      </ConvexAuthProvider>
    </React.StrictMode>,
  );
} else {
  console.warn(
    "VITE_CONVEX_URL is not set. Leaderboard features will be unavailable.",
  );
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
