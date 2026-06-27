"use client";

import { useState } from "react";
import { Send, Check } from "lucide-react";

const inputCls =
  "h-12 w-full rounded-xl border border-border bg-white/5 px-4 text-sm outline-none placeholder:text-muted focus:border-[var(--neon-blue)]";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="glass-card flex flex-col items-center justify-center rounded-3xl p-10 text-center">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[var(--neon-blue)]/15">
          <Check className="h-7 w-7 text-[var(--neon-cyan)]" />
        </span>
        <h3 className="mt-4 font-display text-xl font-bold">Message received</h3>
        <p className="mt-2 text-sm text-muted">Thanks for reaching out — our team will get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="glass-card space-y-4 rounded-3xl p-6 sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <input required placeholder="Full name" className={inputCls} />
        <input required type="email" placeholder="Email address" className={inputCls} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input placeholder="Organization" className={inputCls} />
        <select className={inputCls} defaultValue="">
          <option value="" disabled>I'm reaching out about…</option>
          <option>Tickets & registration</option>
          <option>Partnership & sponsorship</option>
          <option>Speaking opportunity</option>
          <option>Exhibiting</option>
          <option>Media & press</option>
          <option>Something else</option>
        </select>
      </div>
      <textarea required rows={5} placeholder="Your message" className="w-full rounded-xl border border-border bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-muted focus:border-[var(--neon-blue)]" />
      <button className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[linear-gradient(110deg,var(--neon-blue),var(--neon-violet))] font-semibold text-white sm:w-auto sm:px-8">
        Send message <Send className="h-4 w-4" />
      </button>
    </form>
  );
}
