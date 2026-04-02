export function YearMarker({ year }: { year: number }) {
  return (
    <div className="sticky top-0 z-10 bg-cream/95 backdrop-blur-sm py-3 -mx-6 px-6 md:-mx-10 md:px-10">
      <span className="font-serif text-3xl md:text-4xl text-ink/20">
        {year}
      </span>
    </div>
  );
}
