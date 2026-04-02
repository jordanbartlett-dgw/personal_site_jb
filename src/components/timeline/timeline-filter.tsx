"use client";

import { useState } from "react";
import type { TimelineCategory, TimelineEntry } from "@/data/timeline";
import { YearMarker } from "./year-marker";
import { TimelineCard } from "./timeline-card";

type FilterOption = "all" | "highlights" | TimelineCategory;

const filters: { value: FilterOption; label: string }[] = [
  { value: "all", label: "All" },
  { value: "highlights", label: "Highlights" },
  { value: "business", label: "Business" },
  { value: "product", label: "Product" },
  { value: "impact", label: "Impact" },
  { value: "personal", label: "Personal" },
];

function filterEntries(
  entries: TimelineEntry[],
  filter: FilterOption,
): TimelineEntry[] {
  if (filter === "all") return entries;
  if (filter === "highlights") return entries.filter((e) => e.highlight);
  return entries.filter((e) => e.category === filter);
}

export function TimelineFilter({ entries }: { entries: TimelineEntry[] }) {
  const [active, setActive] = useState<FilterOption>("all");
  const filtered = filterEntries(entries, active);

  let currentYear: number | null = null;

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-12">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActive(f.value)}
            className={`text-xs uppercase tracking-wider px-3 py-1.5 rounded-full transition-colors ${
              active === f.value
                ? "bg-ink text-cream"
                : "text-subtle hover:text-ink"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-sm text-muted">No entries for this filter.</p>
      ) : (
        <div>
          {filtered.map((entry) => {
            const showYear = entry.year !== currentYear;
            currentYear = entry.year;
            return (
              <div key={entry.id}>
                {showYear && <YearMarker year={entry.year} />}
                <TimelineCard entry={entry} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
