import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function HotSeller() {
  return (
    <div className="container-x py-24 text-center">
      <Helmet><title>Hot Sellers — Ténura Beauty</title></Helmet>
      <p className="text-xs tracking-[0.35em] text-rose mb-3">FAN FAVORITES</p>
      <h1 className="font-display text-5xl">Hot Sellers</h1>
      <p className="mt-4 text-ink/60 max-w-md mx-auto">The shades and formulas everyone is talking about.</p>
      <Link to="/" className="inline-block mt-8 underline underline-offset-4">← Back to home</Link>
    </div>
  );
}
