import type { TimelineEntry } from "@/data/timeline";

const categoryColors: Record<string, string> = {
  business: "bg-terracotta",
  product: "bg-ink/60",
  impact: "bg-terracotta/60",
  personal: "bg-subtle",
};

const categoryLabels: Record<string, string> = {
  business: "Business",
  product: "Product",
  impact: "Impact",
  personal: "Personal",
};

export function TimelineCard({ entry }: { entry: TimelineEntry }) {
  return (
    <article className="relative pl-6 pb-8 border-l border-border-light last:pb-0">
      <div className="absolute left-0 top-[10px] -translate-x-1/2 w-2 h-2 rounded-full bg-border-light" />
      {entry.highlight && (
        <div className="absolute left-0 top-[6px] -translate-x-1/2 w-3 h-3 rounded-full border-2 border-terracotta bg-cream" />
      )}
      <div className="flex items-center gap-3 mb-2">
        <span
          className={`inline-block w-1.5 h-1.5 rounded-full ${categoryColors[entry.category]}`}
        />
        <span className="text-xs text-subtle uppercase tracking-wider">
          {categoryLabels[entry.category]}
          {entry.quarter && ` · Q${entry.quarter}`}
        </span>
      </div>
      <h3 className="font-serif text-lg md:text-xl mb-1">{entry.title}</h3>
      <p className="text-sm text-muted leading-relaxed">{entry.description}</p>
    </article>
  );
}
