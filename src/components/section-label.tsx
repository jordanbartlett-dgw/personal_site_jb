export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs uppercase tracking-widest text-subtle mb-8">
      {children}
    </p>
  );
}
