export type CardItem = { num: string; titulo: string; texto: string };

export function CardGrid({
  items,
  className,
}: {
  items: CardItem[];
  className: "ecosystem-grid" | "services-grid";
}) {
  return (
    <div className={className}>
      {items.map(({ num, titulo, texto }) => (
        <article className="card" key={num}>
          <span className="card-num">{num}</span>
          <h3 className="h3">{titulo}</h3>
          <p>{texto}</p>
        </article>
      ))}
    </div>
  );
}
