import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Connect",
  description:
    "Get in touch about branded merchandise, corporate partnerships, or anything else.",
};

export default function ConnectPage() {
  return (
    <div className="px-6 md:px-10 py-16 max-w-prose mx-auto">
      <h1 className="font-serif text-3xl md:text-4xl mb-3">
        Let&apos;s connect
      </h1>
      <p className="text-base text-muted leading-relaxed mb-12">
        Whether you are looking for branded merchandise through Doing Good
        Works or exploring a corporate partnership with Foster Greatness, this
        is the place to start.
      </p>

      <Suspense fallback={null}>
        <ContactForm />
      </Suspense>
    </div>
  );
}
