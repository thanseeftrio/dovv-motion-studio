import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { BOOK_URL } from "@/components/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — DOVV Studio" },
      { name: "description", content: "Start your project with DOVV Studio. Book a free 15 minute call." },
      { property: "og:title", content: "Contact — DOVV Studio" },
      { property: "og:description", content: "Start your project with DOVV Studio. Book a free 15 minute call." },
    ],
  }),
  component: Contact,
});

const budgets = ["$1k – $2k", "$2k – $5k", "$5k+", "Monthly"];

function Contact() {
  const [sent, setSent] = useState(false);
  const [budget, setBudget] = useState(budgets[1]);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };
  const field = "w-full border-b border-border bg-transparent py-4 text-lg outline-none transition-colors focus:border-foreground";
  return (
    <main className="mx-auto grid max-w-[1800px] gap-16 px-6 pt-40 pb-24 md:px-8 lg:grid-cols-2">
      <div>
        <h1 className="font-display text-[18vw] uppercase leading-[0.85] lg:text-[9vw]">
          <span className="block overflow-hidden"><span className="animate-rise block">Let's build</span></span>
          <span className="block overflow-hidden"><span className="animate-rise block" style={{ animationDelay: "120ms" }}>something</span></span>
        </h1>
        <p className="animate-fade-up mt-6 max-w-md text-lg text-muted-foreground" style={{ animationDelay: "300ms" }}>
          Tell us about your project, or skip the form and book a free 15 minute call.
        </p>
        <a href={BOOK_URL} target="_blank" rel="noreferrer" className="animate-fade-up group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground" style={{ animationDelay: "450ms" }}>
          Book a call <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
        </a>
      </div>
      <div className="animate-fade-up rounded-3xl bg-card p-8 md:p-12" style={{ animationDelay: "300ms" }}>
        {sent ? (
          <div className="flex h-full min-h-80 flex-col items-center justify-center text-center">
            <span className="sticker-sun grid h-24 w-24 place-items-center rounded-full text-5xl">☺</span>
            <h2 className="font-display mt-6 text-5xl uppercase">Thanks!</h2>
            <p className="mt-2 text-muted-foreground">We'll get back to you within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-6">
            <input required placeholder="Your name" className={field} />
            <input required type="email" placeholder="Email" className={field} />
            <input placeholder="Company / website" className={field} />
            <div>
              <p className="mb-3 text-sm text-muted-foreground">Budget</p>
              <div className="flex flex-wrap gap-2">
                {budgets.map((b) => (
                  <button type="button" key={b} onClick={() => setBudget(b)} className={`rounded-full border px-4 py-2 text-sm transition-colors ${budget === b ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-foreground"}`}>
                    {b}
                  </button>
                ))}
              </div>
            </div>
            <textarea required rows={4} placeholder="Tell us about your project" className={field} />
            <button className="w-full rounded-full bg-primary py-4 font-medium text-primary-foreground transition-transform hover:scale-[1.02]">Send message</button>
          </form>
        )}
      </div>
    </main>
  );
}
