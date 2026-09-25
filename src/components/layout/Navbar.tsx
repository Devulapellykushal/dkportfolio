import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { navItems } from "@/data/portfolio";
import { Link, NavLink, useLocation } from "react-router-dom";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const primaryItems = navItems;

  return (
    <header
      className={
        isHome
          ? "absolute inset-x-0 top-0 z-50 border-b border-transparent bg-transparent"
          : "sticky top-0 z-50 border-b border-brand-gold-deep bg-black/80 backdrop-blur-xl"
      }
    >
      <nav className="container-shell flex h-[4.25rem] items-center justify-between gap-4">
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
          className="rounded-[2px] border border-white/20 px-3 py-2 text-xs text-[#f6f3f0] md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation menu"
        >
          Menu
        </button>

        <ul className="hidden items-center gap-6 md:flex lg:gap-8">
          {primaryItems.map((item) => (
            <li key={item.href}>
              {item.href.includes("#") ? (
                <Link
                  to={item.href}
                  className="font-meta text-[0.8125rem] font-medium text-[#f6f3f0]/85 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ) : (
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `font-meta text-[0.8125rem] font-medium transition ${
                      isActive ? "text-white" : "text-[#f6f3f0]/85 hover:text-white"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        <a href="/contact" className="btn-primary hidden md:inline-flex">
          Contact
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </nav>

      {open ? (
        <ul className="container-shell flex flex-col gap-4 border-t border-white/10 bg-black/80 py-4 backdrop-blur-xl md:hidden">
          {primaryItems.map((item) => (
            <li key={item.href}>
              {item.href.includes("#") ? (
                <Link
                  to={item.href}
                  className="font-meta text-sm font-medium text-[#f6f3f0]"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `font-meta text-sm font-medium ${isActive ? "text-white" : "text-[#f6f3f0]/85"}`
                  }
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              )}
            </li>
          ))}
          <li>
            <a href="/contact" className="btn-primary" onClick={() => setOpen(false)}>
              Contact
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </li>
        </ul>
      ) : null}
    </header>
  );
}
