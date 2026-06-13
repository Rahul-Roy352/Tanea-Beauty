import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import heroImg from "@/assets/hero-model.jpg";
import catLipoils from "@/assets/cat-lipoils.jpg";
import catHighlighters from "@/assets/cat-highlighters.jpg";
import catLipsticks from "@/assets/cat-lipsticks.jpg";
import prod1 from "@/assets/prod-1.jpg";
import prod2 from "@/assets/prod-2.jpg";
import prod3 from "@/assets/prod-3.jpg";
import prod4 from "@/assets/prod-4.jpg";

const categories = [
  { name: "Lip Oils", img: catLipoils, tint: "from-gold/80" },
  { name: "Highlighters", img: catHighlighters, tint: "from-rose/70" },
  { name: "Lipsticks", img: catLipsticks, tint: "from-rose/90" },
];

const products = [
  { name: "Rosy Rasna Tinted Lip Oil", price: 599, img: prod1 },
  { name: "Sweet Escape Tinted Lip Oil", price: 599, img: prod2 },
  { name: "Gola Gloss Lip Oil", price: 599, img: prod3 },
  { name: "Bare Bliss Lip Oil", price: 599, img: prod4 },
];

export default function Index() {
  return (
    <>
      <Helmet>
        <title>Ténura Beauty — Make up that loves you back</title>
        <meta name="description" content="Luxe beauty that's bold, conscious, and unforgettable. Shop lip oils, lipsticks, highlighters and more." />
      </Helmet>

      <section className="relative bg-ink text-cream overflow-hidden">
        <div className="container-x grid lg:grid-cols-[45%_55%] items-center min-h-[85vh] gap-4 py-8">
          <div className="relative z-10 max-w-xl">
            <p className="text-xs tracking-[0.4em] text-gold mb-6">NEW · WINTER EDIT</p>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.05] text-cream">
              Make up that<br />loves you back
            </h1>
            <p className="mt-6 text-cream/70 text-lg max-w-md">
              Unveil luxe beauty that's bold, conscious, and unforgettable.
            </p>
            <div className="mt-10 flex items-center gap-4">
              <Link to="/shop" className="group inline-flex items-center gap-3 rounded-full border border-cream/60 px-8 py-3.5 text-sm tracking-widest uppercase hover:bg-cream hover:text-ink transition-all">
                Shop Now
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
              </Link>
              <Link to="/hot-seller" className="text-sm text-cream/60 hover:text-gold underline-offset-4 hover:underline">
                Bestsellers →
              </Link>
            </div>
          </div>
          <div className="relative h-[70vh] md:h-[85vh]">
            <div className="absolute top-4 bottom-4 right-4 left-4">
              <img src={heroImg} alt="Ténura Beauty model with bold red lips" className="h-full w-full object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-r from-ink/30 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <div className="bg-cream border-y border-border overflow-hidden py-4">
        <div className="marquee-track flex gap-16 whitespace-nowrap text-ink/70 text-sm tracking-[0.3em] uppercase">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-16">
              <span>✦ Cruelty Free</span>
              <span>✦ Vegan Formulas</span>
              <span>✦ Free Shipping over Rs. 999</span>
              <span>✦ Made in Small Batches</span>
              <span>✦ Cruelty Free</span>
              <span>✦ Vegan Formulas</span>
              <span>✦ Free Shipping over Rs. 999</span>
              <span>✦ Made in Small Batches</span>
            </div>
          ))}
        </div>
      </div>

      <section className="container-x py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs tracking-[0.35em] text-rose mb-3">DISCOVER</p>
            <h2 className="font-display text-4xl md:text-5xl">Shop by Categories</h2>
          </div>
          <Link to="/shop" className="hidden md:inline text-sm text-ink/60 hover:text-ink underline-offset-4 hover:underline">
            View all →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((c) => (
            <Link key={c.name} to="/shop" className="group relative block aspect-[4/5] overflow-hidden rounded-lg">
              <img src={c.img} alt={c.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className={`absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t ${c.tint} to-transparent`} />
              <div className="absolute inset-x-6 bottom-6">
                <div className="bg-cream/95 backdrop-blur rounded-md py-3 text-center font-display text-xl text-ink shadow-lg">
                  {c.name}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="container-x">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs tracking-[0.35em] text-rose mb-3">HOT SELLERS</p>
              <h2 className="font-display text-4xl md:text-5xl">Loved by all</h2>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <button className="h-10 w-10 rounded-full border border-ink/20 grid place-items-center hover:bg-ink hover:text-cream transition">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button className="h-10 w-10 rounded-full border border-ink/20 grid place-items-center hover:bg-ink hover:text-cream transition">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.map((p) => (
              <div key={p.name} className="group flex flex-col">
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-white min-h-[420px]">
                  <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute top-3 left-3 bg-ink text-cream text-[10px] tracking-[0.2em] uppercase px-2 py-1 rounded">
                    Bestseller
                  </span>
                </div>
                <div className="pt-4 pb-2 px-1">
                  <h3 className="font-display text-lg leading-snug">{p.name}</h3>
                  <p className="text-ink/70 mt-1 text-sm">Rs. {p.price.toFixed(2)}</p>
                </div>
                <button className="mt-2 w-full border border-ink py-3 text-xs tracking-[0.25em] uppercase hover:bg-ink hover:text-cream transition rounded">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-24 grid md:grid-cols-2 gap-16 items-center">
        <div className="aspect-[4/5] rounded-lg overflow-hidden bg-muted">
          <img src={catLipoils} alt="Ténura craftsmanship" loading="lazy" className="h-full w-full object-cover" />
        </div>
        <div>
          <p className="text-xs tracking-[0.35em] text-rose mb-4">OUR PROMISE</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            Crafted with intention,<br />worn with confidence.
          </h2>
          <p className="mt-6 text-ink/70 text-lg leading-relaxed">
            Every Ténura formula is built on responsibly sourced ingredients, kind to your skin and the planet.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6 text-sm">
            {[
              { k: "100%", v: "Cruelty Free" },
              { k: "12+", v: "Award Winning Shades" },
              { k: "50K+", v: "Happy Customers" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-3xl text-rose">{s.k}</div>
                <div className="text-ink/60 mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
