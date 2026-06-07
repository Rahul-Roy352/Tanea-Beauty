import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Tanéa Beauty" },
      { name: "description", content: "The story behind Tanéa Beauty." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="container-x py-24 max-w-2xl">
      <p className="text-xs tracking-[0.35em] text-rose mb-3">OUR STORY</p>
      <h1 className="font-display text-5xl">About Tanéa</h1>
      <p className="mt-6 text-ink/70 text-lg leading-relaxed">
        Tanéa was born from a simple idea — that beauty should feel as good as it looks.
        Crafted in small batches with conscious ingredients, our formulas celebrate every shade
        of confidence.
      </p>
      <Link to="/" className="inline-block mt-8 underline underline-offset-4">← Back to home</Link>
    </div>
  );
}
