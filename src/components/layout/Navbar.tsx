import { useState } from "react";
import { navItems } from "@/data/portfolio";
import { Link, NavLink } from "react-router-dom";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const primaryItems = navItems;

  return (
    <header className="sticky top-0 z-50 border-b border-brand-gold-deep bg-black/80 backdrop-blur-xl">
      <nav className="container-shell flex h-16 items-center justify-between gap-4">
        <Link to="/" className="shrink-0" aria-label="Devulapelly Kushal home">
          <img
            src="/Logo_dark.png"
            alt="Devulapelly Kushal"
            className="h-8 w-auto sm:h-9"
            width={140}
            height={36}
            decoding="async"
          />
        </Link>

        <button
          className="rounded-md border border-brand-gold-deep px-3 py-2 text-xs text-brand-gold md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation menu"
        >
          Menu
        </button>

        <ul className="hidden items-center gap-5 lg:gap-6 md:flex">
          {primaryItems.map((item) => (
            <li key={item.href}>
              {item.href.includes("#") ? (
                <Link to={item.href} className="text-sm font-medium text-zinc-300 transition hover:text-brand-gold">
                  {item.label}
                </Link>
              ) : (
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `text-sm font-medium transition ${isActive ? "text-brand-gold" : "text-zinc-300 hover:text-brand-gold"}`
                  }
                >
                  {item.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {open ? (
        <ul className="container-shell flex flex-col gap-4 border-t border-brand-gold-deep py-4 md:hidden">
          {primaryItems.map((item) => (
            <li key={item.href}>
              {item.href.includes("#") ? (
                <Link to={item.href} className="text-sm font-medium text-zinc-300 hover:text-brand-gold" onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              ) : (
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `text-sm font-medium ${isActive ? "text-brand-gold" : "text-zinc-300 hover:text-brand-gold"}`
                  }
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      ) : null}
    </header>
  );
}
