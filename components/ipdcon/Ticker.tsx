export function Ticker({
  items,
  style,
}: {
  items: string[];
  style?: React.CSSProperties;
}) {
  return (
    <div className="ticker" style={style} aria-hidden="true">
      <div className="ticker-track">
        {[...items, ...items].map((item, i) => (
          <span key={`${item}-${i}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}
