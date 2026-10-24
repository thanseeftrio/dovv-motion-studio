import { createFileRoute } from "@tanstack/react-router";
import { PillButton, ProjectCard, projects } from "@/components/site";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — DOVV Studio" },
      { name: "description", content: "Selected Framer websites designed and built by DOVV Studio." },
      { property: "og:title", content: "Work — DOVV Studio" },
      { property: "og:description", content: "Selected Framer websites designed and built by DOVV Studio." },
    ],
  }),
  component: Work,
});

function Work() {
  return (
    <main className="mx-auto max-w-[1800px] px-6 pt-40 pb-24 md:px-8">
      <h1 className="font-display overflow-hidden text-[18vw] uppercase leading-[0.85] md:text-[12vw]">
        <span className="animate-rise block">Our work</span>
      </h1>
      <p className="animate-fade-up mt-6 max-w-md text-lg text-muted-foreground" style={{ animationDelay: "300ms" }}>
        A selection of sites designed in Figma and built in Framer for brands around the world.
      </p>
      <div className="mt-16 grid gap-x-8 gap-y-14 md:grid-cols-2">
        {[...projects, ...projects.slice().reverse()].map((p, i) => <ProjectCard key={i} p={p} i={i} />)}
      </div>
      <div className="mt-20 flex justify-center"><PillButton to="/contact">Start a project</PillButton></div>
    </main>
  );
}
