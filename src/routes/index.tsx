import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Star, ArrowRight } from "lucide-react";
import { BOOK_URL, PillButton, ProjectCard, Reveal, projects } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DOVV Studio — We build sites that move people" },
      { name: "description", content: "Independent studio designing and building fast, high-converting Framer websites for startups, creators and brands." },
      { property: "og:title", content: "DOVV Studio — We build sites that move people" },
      { property: "og:description", content: "Framer web design and development studio made in Argentina." },
    ],
  }),
  component: Index,
});

const logos = ["Motum", "ENDER", "ARQC Estudio", "SENSE", "Del Viento", "Silvina Paz", "Coderhouse"];

const testimonials = [
  { q: "Dario helped us improve the Coderhouse website with great design ideas and solid execution. He's creative, detail-oriented, and easy to work with.", n: "Christian Patiño", r: "Founder at Coderhouse" },
  { q: "Dario turned our vision into a top-tier digital experience. His creativity, expertise, and attention to detail exceeded expectations. We hired him again immediately.", n: "Victor McInerney", r: "Founder at Motum" },
  { q: "He understood exactly what we wanted and adapted perfectly to our vision. Communication was always clear and he delivered everything on time.", n: "Federico Deyá", r: "Founder at ENDER" },
  { q: "He turned our Figma designs into a live Framer site within 24 hours, was super responsive to feedback, and handled every detail quickly.", n: "Shumel Lais", r: "Client at Day30" },
  { q: "Amazing experience! Dario took the time to understand the vision and kept me updated in every step of the way. Committed, skilled and reliable. 5 stars!", n: "Josü", r: "Client" },
];

const steps = [
  { t: "Discovery", d: "A short call about your goals. You get scope, timeline and price before anything starts.", tag: "Free 15 min call" },
  { t: "Design", d: "Structure and visuals in Figma, shaped with your feedback at every step." },
  { t: "Framer build", d: "Responsive and animated, with CMS and SEO set up so you can edit it yourself." },
  { t: "Launch", d: "Live on your domain, everything handed over, and support after.", tag: "It's live!" },
];

const plans = [
  { price: "$1k", unit: "one time, starting at", d: "A single high converting page for a launch, a product or a campaign.", f: ["Design and Framer build", "Responsive and animated", "Basic SEO setup", "1 round of revisions"] },
  { price: "$2k", unit: "one time, starting at", d: "A complete site with CMS, ready to grow with your brand.", f: ["Up to 6 pages", "CMS for blog or projects", "SEO and analytics", "2 rounds of revisions", "30 days of support"], featured: true },
  { price: "$600", unit: "per month, starting at", d: "Ongoing design and updates after launch, without hiring in house.", f: ["New sections and pages", "Content and CMS updates", "Priority replies", "Cancel anytime"] },
];

function Line({ text, delay }: { text: string; delay: number }) {
  return (
    <span className="block overflow-hidden">
      <span className="animate-rise block" style={{ animationDelay: `${delay}ms` }}>{text}</span>
    </span>
  );
}

function Index() {
  return (
    <main>
      {/* Hero */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-32 pb-16 text-center">
        <a href={BOOK_URL} target="_blank" rel="noreferrer" className="animate-fade-up mb-8 inline-flex items-center gap-3 rounded-full border border-border bg-card px-4 py-2 text-sm shadow-sm">
          <span className="animate-pulse-dot h-2 w-2 rounded-full bg-live" />
          <span className="font-medium">Available for new projects</span>
          <span className="h-4 w-px bg-border" />
          <span className="text-muted-foreground">Book a call</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
        <h1 className="font-display text-[15vw] uppercase leading-[0.88] md:text-[8.5vw]">
          <span className="sr-only">We build sites that move people</span>
          <span aria-hidden>
            <Line text="We build sites" delay={100} />
            <Line text="that move people" delay={250} />
          </span>
        </h1>

        {/* stickers */}
        <span className="animate-float sticker-orange shadow-sticker absolute left-[8%] top-[22%] hidden rounded-full border-4 border-card px-8 py-3 text-2xl font-bold text-primary-foreground md:block" style={{ ["--r" as string]: "-12deg", animationDelay: "600ms" }}>
          Framer expert
        </span>
        <span className="animate-float sticker-sun shadow-sticker absolute right-[9%] top-[19%] hidden h-28 w-28 place-items-center rounded-full border-4 border-card text-5xl md:grid" style={{ ["--r" as string]: "8deg", animationDelay: "750ms" }}>
          ☺
        </span>
        <span className="animate-float sticker-lime shadow-sticker absolute bottom-[26%] left-[7%] hidden h-36 w-36 flex-col items-center justify-center border-4 border-card md:flex" style={{ ["--r" as string]: "-8deg", clipPath: "polygon(50% 0,61% 12%,78% 6%,80% 23%,96% 28%,88% 43%,100% 55%,85% 64%,90% 82%,72% 82%,64% 98%,50% 88%,36% 98%,28% 82%,10% 82%,15% 64%,0 55%,12% 43%,4% 28%,20% 23%,22% 6%,39% 12%)", animationDelay: "900ms" }}>
          <span className="text-4xl font-bold">4.9</span>
          <span className="flex">{[0, 1, 2, 3, 4].map((i) => <Star key={i} className="h-3 w-3 fill-current" />)}</span>
        </span>
        <span className="animate-float sticker-pink shadow-sticker absolute bottom-[24%] right-[8%] hidden rounded-full border-4 border-card px-10 py-4 text-2xl font-bold md:block" style={{ ["--r" as string]: "6deg", animationDelay: "1050ms" }}>
          Made in Argentina
        </span>

        <p className="animate-fade-up mx-auto mt-10 max-w-lg text-lg text-muted-foreground" style={{ animationDelay: "500ms" }}>
          Independent studio designing and building fast, high-converting websites in Framer for startups, creators and brands.
        </p>
        <div className="animate-fade-up mt-8 flex flex-wrap justify-center gap-3" style={{ animationDelay: "650ms" }}>
          <PillButton to="/contact">Start a project</PillButton>
          <PillButton to="/work" variant="outline">See our work</PillButton>
        </div>

        <div className="animate-fade-up mt-20 w-full max-w-5xl" style={{ animationDelay: "800ms" }}>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="h-px flex-1 bg-border" />Trusted by<span className="h-px flex-1 bg-border" />
          </div>
          <div className="mt-6 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
            <div className="animate-marquee flex w-max gap-16">
              {[...logos, ...logos].map((l, i) => (
                <span key={i} className="font-display whitespace-nowrap text-3xl uppercase text-muted-foreground/60">{l}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Work */}
      <section className="mx-auto max-w-[1800px] px-6 py-24 md:px-8">
        <Reveal className="mb-12 flex items-end justify-between">
          <h2 className="font-display text-6xl uppercase md:text-8xl">Selected work</h2>
          <Link to="/work" className="hidden text-sm font-medium underline underline-offset-4 md:block">View all</Link>
        </Reveal>
        <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
          {projects.map((p, i) => <ProjectCard key={p.name} p={p} i={i} />)}
        </div>
        <div className="mt-14 flex justify-center"><PillButton to="/work" variant="outline">View all</PillButton></div>
      </section>

      {/* Testimonials */}
      <section className="overflow-hidden py-24">
        <Reveal className="px-6 text-center">
          <p className="text-sm text-muted-foreground">Kind words</p>
          <h2 className="font-display mt-2 text-6xl uppercase md:text-8xl">50+ happy clients</h2>
        </Reveal>
        <div className="mt-14 [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
          <div className="animate-marquee flex w-max gap-6 hover:[animation-play-state:paused]" style={{ animationDuration: "60s" }}>
            {[...testimonials, ...testimonials].map((t, i) => (
              <figure key={i} className="w-[380px] shrink-0 rounded-2xl border border-border bg-card p-8">
                <div className="flex gap-0.5">{[0, 1, 2, 3, 4].map((s) => <Star key={s} className="h-4 w-4 fill-current" />)}</div>
                <blockquote className="mt-4 text-lg leading-snug">“{t.q}”</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-primary font-bold text-primary-foreground">{t.n[0]}</span>
                  <span><span className="block font-medium">{t.n}</span><span className="text-sm text-muted-foreground">{t.r}</span></span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-8">
        <Reveal><p className="text-sm text-muted-foreground">About the studio</p></Reveal>
        <Reveal delay={100}>
          <p className="mt-6 text-3xl font-medium leading-tight md:text-5xl">
            I'm Dario, the designer and developer behind DOVV. I design and build websites from the first sketch to the last line of code, so strategy, design and Framer development stay in the same hands and nothing gets lost along the way.
          </p>
        </Reveal>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {["Design and development, one team", "A direct line, no handoffs", "50+ clients worldwide", "Also building IURA, for law firms"].map((x, i) => (
            <Reveal key={x} delay={i * 80}>
              <li className="flex h-full items-center gap-3 rounded-2xl border border-border bg-card p-5"><Check className="h-5 w-5 shrink-0" />{x}</li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-[1800px] px-6 py-24 md:px-8">
        <Reveal><h2 className="font-display text-6xl uppercase md:text-8xl">How it works</h2></Reveal>
        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.t} delay={i * 120}>
              <li className="group relative flex h-full min-h-72 flex-col justify-between rounded-2xl bg-card p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-primary hover:text-primary-foreground">
                <div className="flex items-start justify-between">
                  <span className="font-display text-6xl">0{i + 1}</span>
                  {s.tag && <span className={`${i === 0 ? "sticker-lime" : "sticker-pink"} rotate-6 rounded-full px-3 py-1 text-xs font-bold text-foreground`}>{s.tag}</span>}
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{s.t}</h3>
                  <p className="mt-2 opacity-70">{s.d}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Pricing */}
      <section className="mx-auto max-w-[1800px] px-6 py-24 md:px-8">
        <Reveal className="text-center">
          <p className="text-sm text-muted-foreground">Pricing</p>
          <h2 className="font-display mt-2 text-6xl uppercase md:text-8xl">Clear plans, no surprises</h2>
        </Reveal>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.price} delay={i * 120}>
              <div className={`flex h-full flex-col rounded-3xl p-8 transition-transform duration-500 hover:-translate-y-2 ${p.featured ? "bg-primary text-primary-foreground" : "border border-border bg-card"}`}>
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-7xl">{p.price}</span>
                  <span className="text-sm opacity-60">{p.unit}</span>
                </div>
                <p className="mt-4 opacity-80">{p.d}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {p.f.map((f) => <li key={f} className="flex items-center gap-2"><Check className="h-4 w-4" />{f}</li>)}
                </ul>
                <a href={BOOK_URL} target="_blank" rel="noreferrer" className={`mt-8 rounded-full py-3.5 text-center text-sm font-medium transition-transform hover:scale-[1.03] ${p.featured ? "bg-primary-foreground text-primary" : "bg-primary text-primary-foreground"}`}>
                  Book a call
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
