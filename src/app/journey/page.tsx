import type { Metadata } from "next";
import { SectionLabel } from "@/components/section-label";
import { NewsletterForm } from "@/components/newsletter-form";
import { TimelineFilter } from "@/components/timeline/timeline-filter";
import { timeline } from "@/data/timeline";

export const metadata: Metadata = {
  title: "The Journey — Jordan Bartlett",
  description:
    "Eleven years of building at the intersection of commerce, community, and technology. From a coffee meeting in Irvine to an Inc. 5000 social enterprise and a 2,000-member foster care community.",
  openGraph: {
    title: "The Journey — Jordan Bartlett",
    description:
      "Eleven years of building at the intersection of commerce, community, and technology.",
    url: "https://jordanbartlett.co/journey",
  },
};

export default function JourneyPage() {
  return (
    <div>
      <section className="px-6 md:px-10 pt-20 pb-16 max-w-prose mx-auto">
        <SectionLabel>The Journey</SectionLabel>
        <h1 className="font-serif text-3xl md:text-4xl leading-tight mb-4">
          Eleven years of building
        </h1>
        <p className="text-base text-muted leading-relaxed mb-4">
          From a coffee meeting in Irvine to an Inc. 5000 social enterprise and
          a 2,000-member foster care community. This is the timeline, built from
          a decade of sent emails, team notes, and the moments that changed the
          direction.
        </p>
        <p className="text-sm text-subtle mb-12">
          Start with Highlights for the short version. Or read it all.
        </p>

        <TimelineFilter entries={timeline} />
      </section>

      <div className="border-t border-border-light mx-6 md:mx-10" />

      <section className="px-6 md:px-10 py-16 max-w-prose mx-auto">
        <SectionLabel>Stay in the loop</SectionLabel>
        <p className="text-base text-muted leading-relaxed mb-6">
          Infrastructure of Belonging. Weekly on building things that matter.
        </p>
        <NewsletterForm />
      </section>
    </div>
  );
}
