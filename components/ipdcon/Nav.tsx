import Link from "next/link";

export type NavLink = { label: string; href: string };

export function Nav({ links }: { links: NavLink[] }) {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link href="/" className="brand">
          IPD<b>CON</b>
        </Link>
        <nav className="navlinks" aria-label="Navegação principal">
          {links.map(({ label, href }) =>
            href.startsWith("#") ? (
              <a key={label} href={href}>
                {label}
              </a>
            ) : (
              <Link key={label} href={href}>
                {label}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
