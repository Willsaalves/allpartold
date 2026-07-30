export function MonoLabel({
  children,
  className = "text-pink",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <span className={`mono-label ${className}`}>{children}</span>;
}

export function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center justify-center gap-3 mb-4">
      <div className="w-6 h-px bg-pink" />
      <MonoLabel>{children}</MonoLabel>
      <div className="w-6 h-px bg-pink" />
    </div>
  );
}
