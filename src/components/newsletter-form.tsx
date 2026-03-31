"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="text-sm text-muted">
        You are in. Check your inbox for a welcome from Infrastructure of Belonging.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="px-4 py-2.5 border border-border-light rounded bg-white text-sm text-ink placeholder:text-subtle focus:outline-none focus:border-terracotta transition-colors flex-1 sm:max-w-[280px]"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-5 py-2.5 bg-terracotta text-cream text-sm rounded hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {status === "loading" ? "Subscribing..." : "Subscribe"}
        </button>
      </div>
      {status === "error" && (
        <p className="text-sm text-terracotta">
          Something went wrong. Try again.
        </p>
      )}
      <p className="text-xs text-subtle">
        Join Infrastructure of Belonging. On building things that matter.
      </p>
    </form>
  );
}
