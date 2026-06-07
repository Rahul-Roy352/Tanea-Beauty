import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — Tanéa Beauty" },
      { name: "description", content: "Browse the full Tanéa Beauty collection." },
    ],
  }),
  component: ShopPage,
});

function ShopPage() {
  return (
    <div className="container-x py-24 text-center">
      <p className="text-xs tracking-[0.35em] text-rose mb-3">SHOP</p>
      <h1 className="font-display text-5xl">The Full Collection</h1>
      <p className="mt-4 text-ink/60 max-w-md mx-auto">Coming soon — our complete catalog of luxe beauty essentials.</p>
      <Link to="/" className="inline-block mt-8 underline underline-offset-4">← Back to home</Link>
    </div>
  );
}
