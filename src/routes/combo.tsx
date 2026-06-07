import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/combo")({
  head: () => ({
    meta: [
      { title: "Combo Sets — Tanéa Beauty" },
      { name: "description", content: "Curated beauty bundles at special prices." },
    ],
  }),
  component: ComboPage,
});

function ComboPage() {
  return (
    <div className="container-x py-24 text-center">
      <p className="text-xs tracking-[0.35em] text-rose mb-3">BUNDLES</p>
      <h1 className="font-display text-5xl">Combo Sets</h1>
      <p className="mt-4 text-ink/60 max-w-md mx-auto">Save more when you pair our bestsellers together.</p>
      <Link to="/" className="inline-block mt-8 underline underline-offset-4">← Back to home</Link>
    </div>
  );
}
