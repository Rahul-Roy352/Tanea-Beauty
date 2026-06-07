export function SiteFooter() {
  return (
    <footer className="bg-ink text-cream/80 mt-24">
      <div className="container-x py-16 grid md:grid-cols-4 gap-10">
        <div>
          <div className="font-display text-2xl text-cream">Tanéa</div>
          <p className="text-xs tracking-[0.4em] text-cream/50 mt-1">BEAUTY</p>
          <p className="mt-5 text-sm leading-relaxed">
            Luxe beauty that's bold, conscious, and unforgettable.
          </p>
        </div>
        {[
          { title: "Shop", links: ["Lip Oils", "Lipsticks", "Highlighters", "Combos"] },
          { title: "Company", links: ["About Us", "Hot Sellers", "Contact", "Stores"] },
          { title: "Help", links: ["Shipping", "Returns", "FAQ", "Track Order"] },
        ].map((c) => (
          <div key={c.title}>
            <h4 className="text-cream font-medium mb-4">{c.title}</h4>
            <ul className="space-y-2 text-sm">
              {c.links.map((l) => (
                <li key={l} className="hover:text-gold cursor-pointer transition">{l}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-cream/10 py-5 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} Tanéa Beauty. All rights reserved.
      </div>
    </footer>
  );
}
