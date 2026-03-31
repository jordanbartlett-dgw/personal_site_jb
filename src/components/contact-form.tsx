"use client";

import { useActionState } from "react";
import { useSearchParams } from "next/navigation";
import { submitContactForm, type FormState } from "@/app/connect/actions";

const inquiryTypes = [
  { value: "merchandise", label: "Branded Merchandise" },
  { value: "partnership", label: "Corporate Partnership" },
  { value: "general", label: "General" },
];

export function ContactForm() {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get("type");

  const defaultType = inquiryTypes.find((t) => t.value === typeParam)
    ? typeParam
    : "general";

  const [state, formAction, pending] = useActionState<FormState, FormData>(
    submitContactForm,
    { success: false, error: null }
  );

  if (state.success) {
    return (
      <div className="py-8">
        <h2 className="font-serif text-2xl mb-3">Thank you</h2>
        <p className="text-muted">
          Your message has been received. I will be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6">
      {state.error && (
        <p className="text-sm text-terracotta">{state.error}</p>
      )}

      <div>
        <label
          htmlFor="name"
          className="block text-xs uppercase tracking-widest text-subtle mb-2"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-2.5 border border-border-light rounded bg-white text-sm text-ink placeholder:text-subtle focus:outline-none focus:border-terracotta transition-colors"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-xs uppercase tracking-widest text-subtle mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-2.5 border border-border-light rounded bg-white text-sm text-ink placeholder:text-subtle focus:outline-none focus:border-terracotta transition-colors"
        />
      </div>

      <div>
        <label
          htmlFor="company"
          className="block text-xs uppercase tracking-widest text-subtle mb-2"
        >
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          required
          className="w-full px-4 py-2.5 border border-border-light rounded bg-white text-sm text-ink placeholder:text-subtle focus:outline-none focus:border-terracotta transition-colors"
        />
      </div>

      <fieldset>
        <legend className="text-xs uppercase tracking-widest text-subtle mb-3">
          What can I help with?
        </legend>
        <div className="space-y-2">
          {inquiryTypes.map((type) => (
            <label
              key={type.value}
              className="flex items-center gap-3 cursor-pointer"
            >
              <input
                type="radio"
                name="inquiry_type"
                value={type.value}
                defaultChecked={type.value === defaultType}
                className="accent-terracotta"
              />
              <span className="text-sm text-muted">{type.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label
          htmlFor="notes"
          className="block text-xs uppercase tracking-widest text-subtle mb-2"
        >
          Notes{" "}
          <span className="normal-case tracking-normal">(optional)</span>
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          className="w-full px-4 py-2.5 border border-border-light rounded bg-white text-sm text-ink placeholder:text-subtle focus:outline-none focus:border-terracotta transition-colors resize-y"
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="px-6 py-2.5 bg-terracotta text-cream text-sm rounded hover:opacity-90 transition-opacity disabled:opacity-50"
      >
        {pending ? "Sending..." : "Send"}
      </button>
    </form>
  );
}
