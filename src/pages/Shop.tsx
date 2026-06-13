import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Shop() {
  return (
    <div className="container-x py-24 text-center">
      <Helmet><title>Shop — Ténura Beauty</title></Helmet>
      <p className="text-xs tracking-[0.35em] text-rose mb-3">SHOP</p>
      <h1 className="font-display text-5xl">The Full Collection</h1>
      <p className="mt-4 text-ink/60 max-w-md mx-auto">Coming soon — our complete catalog of luxe beauty essentials.</p>
      <Link to="/" className="inline-block mt-8 underline underline-offset-4">← Back to home</Link>
    </div>
  );
}
