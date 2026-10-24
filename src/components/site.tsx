import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";

export const BOOK_URL = "https://cal.com/dario-design/15m";

export const projects = [
  { name: "Terrace", img: work1, tags: ["UX / UI Design", "Web Development"], year: "2025" },
  { name: "Oakline", img: work2, tags: ["UX / UI Design", "Web Development"], year: "2025" },
  { name: "Ambience", img: work3, tags: ["UX / UI Design", "Web Development"], year: "2024" },
  { name: "ARQC", img: work4, tags: ["UX / UI Design", "Web Development"], year: "2024" },
];

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${inView ? "is-in" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function Logo() {
  return <span className="font-display text-4xl leading-none tracking-tight">DOVV</span>;
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/80 py-3 backdrop-blur-md" : "py-6"}`}
    >
      <div className="mx-auto flex max-w-[1800px] items-center justify-between px-6 md:px-8">
        <Link to="/" aria-label="Home"><Logo /></Link>
        <nav className="flex items-center gap-2 md:gap-6">
          <Link to="/work" className="hidden text-sm font-medium hover:opacity-60 sm:block" activeProps={{ className: "underline underline-offset-4" }}>
            Work
          </Link>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
          >
            Contact <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="overflow-hidden bg-primary text-primary-foreground">
      <div className="mx-auto max-w-[1800px] px-6 pt-20 md:px-8">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <p className="text-sm opacity-60">Have a project in mind?</p>
            <a href={BOOK_URL} target="_blank" rel="noreferrer" className="group mt-3 inline-flex items-center gap-4 font-display text-5xl uppercase md:text-7xl">
              Let's talk <ArrowUpRight className="h-12 w-12 transition-transform group-hover:rotate-45" />
            </a>
          </div>
          <div className="space-y-2 text-sm">
            <p className="opacity-60">Pages</p>
            <Link to="/" className="block hover:opacity-60">Home</Link>
            <Link to="/work" className="block hover:opacity-60">Work</Link>
            <Link to="/contact" className="block hover:opacity-60">Contact</Link>
          </div>
          <div className="space-y-2 text-sm">
            <p className="opacity-60">Elsewhere</p>
            <a href="https://www.awwwards.com/sites/dovv-studio" target="_blank" rel="noreferrer" className="block hover:opacity-60">Awwwards</a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="block hover:opacity-60">Instagram</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="block hover:opacity-60">LinkedIn</a>
          </div>
        </div>
        <p className="mt-16 select-none text-center font-display text-[28vw] leading-[0.8] tracking-tighter">DOVV</p>
        <div className="flex justify-between border-t border-primary-foreground/20 py-6 text-xs opacity-60">
          <span>© {new Date().getFullYear()} DOVV Studio</span>
          <span>Made in Argentina</span>
        </div>
      </div>
    </footer>
  );
}

export function PillButton({ to, href, children, variant = "solid" }: { to?: "/" | "/work" | "/contact"; href?: string; children: ReactNode; variant?: "solid" | "outline" }) {
  const cls =
    variant === "solid"
      ? "bg-primary text-primary-foreground hover:scale-105"
      : "border border-border bg-card text-foreground hover:bg-primary hover:text-primary-foreground";
  const full = `group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-all duration-300 ${cls}`;
  if (href) return <a href={href} target="_blank" rel="noreferrer" className={full}>{children}<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></a>;
  return <Link to={to ?? "/"} className={full}>{children}</Link>;
}

export function ProjectCard({ p, i }: { p: (typeof projects)[number]; i: number }) {
  return (
    <Reveal delay={(i % 2) * 120}>
      <Link to="/work" className="group block">
        <div className="overflow-hidden rounded-2xl bg-muted">
          <img src={p.img} alt={`${p.name} website`} width={1280} height={896} loading="lazy" className="aspect-[10/7] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
        <div className="mt-4 flex items-center justify-between">
          <h3 className="font-display text-3xl uppercase">{p.name}</h3>
          <div className="flex gap-2">
            {p.tags.map((t) => (
              <span key={t} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">{t}</span>
            ))}
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
