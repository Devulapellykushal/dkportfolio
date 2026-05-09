export default function BlogRoute() {
  return (
    <section className="container-shell py-20 sm:py-24">
      <div className="glass-card">
        <p className="text-xs uppercase tracking-[0.2em] text-brand-gold">Blog</p>
        <h1 className="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl">
          Engineering Notes and Applied AI Writeups
        </h1>
        <p className="mt-4 max-w-3xl text-sm text-zinc-300 sm:text-base">
          Long-form case studies and implementation notes are being prepared. This route is production-ready for article
          publishing with SEO metadata and schema hooks.
        </p>
      </div>
    </section>
  );
}
