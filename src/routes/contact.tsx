import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Tanéa Beauty" },
      { name: "description", content: "Get in touch with Tanéa Beauty." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="container-x py-24 max-w-xl">
      <p className="text-xs tracking-[0.35em] text-rose mb-3">SAY HELLO</p>
      <h1 className="font-display text-5xl">Contact Us</h1>
      <p className="mt-4 text-ink/60">We'd love to hear from you. Drop us a line at hello@taneabeauty.com</p>
      <Link to="/" className="inline-block mt-8 underline underline-offset-4">← Back to home</Link>
    </div>
  );
}
