import { socialLinks } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-brand-gold-deep bg-black py-10">
      <div className="container-shell flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <img
            src="/Logo_dark.png"
            alt="Devulapelly Kushal"
            className="h-9 w-auto shrink-0"
            width={140}
            height={36}
            loading="lazy"
            decoding="async"
          />
          {/* <p className="text-sm text-zinc-400">AI Engineer and Full Stack Developer portfolio.</p> */}
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-sm text-zinc-300 hover:text-brand-gold">
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <p className="container-shell mt-6 border-t border-zinc-800 pt-5 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} Devulapelly Kushal Kumar Reddy.{" "}
        <a
          href="https://linkedin.com/in/devulapellykushal"
          target="_blank"
          rel="noreferrer"
          className="text-brand-gold hover:underline"
        >
          Built with love ♥
        </a>
      </p>
    </footer>
  );
}
