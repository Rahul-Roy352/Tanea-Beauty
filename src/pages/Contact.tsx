import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <div className="container-x py-24 max-w-xl">
      <Helmet><title>Contact — Ténura Beauty</title></Helmet>
      <p className="text-xs tracking-[0.35em] text-rose mb-3">SAY HELLO</p>
      <h1 className="font-display text-5xl">Contact Us</h1>
      <p className="mt-4 text-ink/60">We'd love to hear from you. Drop us a line at hello@taneabeauty.com</p>
      <Link to="/" className="inline-block mt-8 underline underline-offset-4">← Back to home</Link>
    </div>
  );
}
