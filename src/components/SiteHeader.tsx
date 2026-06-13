import { Link, NavLink } from "react-router-dom";
import { Search, User, ShoppingBag } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About Us" },
  { to: "/hot-seller", label: "Hot Seller" },
  { to: "/combo", label: "Combo" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40">
      <div className="bg-ink text-cream text-center text-xs tracking-[0.18em] uppercase py-2.5">
        Black Friday Sale: Save up to 60% with code{" "}
        <span className="font-semibold text-gold">BLACKFRIDAY</span>
      </div>
      <div className="bg-cream/95 backdrop-blur border-b border-border">
        <div className="container-x flex items-center justify-between h-20">
          <nav className="hidden md:flex items-center gap-7 text-sm flex-1">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                className={({ isActive }) =>
                  isActive
                    ? "text-ink underline underline-offset-8 decoration-1"
                    : "text-ink/80 hover:text-ink transition-colors"
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>
          <Link to="/" className="font-display text-3xl tracking-wide">
            Ténura
            <span className="block text-[0.55rem] tracking-[0.5em] text-center text-ink/60 -mt-1">
              BEAUTY
            </span>
          </Link>
          <div className="flex items-center gap-5 flex-1 justify-end text-ink">
            <Search className="h-5 w-5 cursor-pointer" />
            <User className="h-5 w-5 cursor-pointer" />
            <div className="relative cursor-pointer">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-rose text-[10px] text-white rounded-full h-4 w-4 grid place-items-center">
                0
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
