import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <div className="container-x py-24 max-w-2xl">
      <Helmet><title>About Us — Ténura Beauty</title></Helmet>
      <p className="text-xs tracking-[0.35em] text-rose mb-3">OUR STORY</p>
      <h1 className="font-display text-5xl">About Ténura</h1>
      <p className="mt-6 text-ink/70 text-lg leading-relaxed">
        Ténura was born from a simple idea — that beauty should feel as good as it looks.
        Crafted in small batches with conscious ingredients, our formulas celebrate every shade of confidence.
      </p>
      <Link to="/" className="inline-block mt-8 underline underline-offset-4">← Back to home</Link>
    </div>
  );
}
