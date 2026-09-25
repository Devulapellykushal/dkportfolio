import { useEffect, useId, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navItems } from "@/data/portfolio";
import { Link, NavLink, useLocation } from "react-router-dom";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const menuId = useId();
  const primaryItems = navItems;

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header
      className={
        isHome && !open
          ? "absolute inset-x-0 top-0 z-50 border-b border-transparent bg-transparent"
          : "sticky top-0 z-50 border-b border-white/10 bg-[#121314]/95 backdrop-blur-xl"
      }
    >
      <nav className="container-shell flex h-[4.25rem] items-center justify-between gap-3">
        <Link to="/" className="min-w-0 shrink" aria-label="Devulapelly Kushal home" onClick={() => setOpen(false)}>
          <img
            src="/Logo_dark.png"
            alt="Devulapelly Kushal"
            className="h-7 w-auto max-w-[140px] object-contain sm:h-9 sm:max-w-none"
            width={140}
            height={36}
            decoding="async"
          />
        </Link>

        <div className="flex items-center gap-3">
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

          <div className="hidden md:block">
            <a href="/contact" className="btn-primary">
              Contact
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-[2px] border border-white/20 text-[#f6f3f0] transition hover:border-white/40 md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls={menuId}
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div id={menuId} className="border-t border-white/10 bg-[#121314] md:hidden">
          <ul className="container-shell flex max-h-[calc(100svh-4.25rem)] flex-col gap-1 overflow-y-auto py-3">
            {primaryItems.map((item) => (
              <li key={item.href}>
                {item.href.includes("#") ? (
                  <Link
                    to={item.href}
                    className="font-meta block rounded-[2px] px-3 py-3.5 text-base font-medium text-[#f6f3f0] transition active:bg-white/5"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      `font-meta block rounded-[2px] px-3 py-3.5 text-base font-medium transition active:bg-white/5 ${
                        isActive ? "bg-white/5 text-white" : "text-[#f6f3f0]/90"
                      }`
                    }
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
