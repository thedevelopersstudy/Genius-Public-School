import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { programs } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import { SectionTitle } from "./index";

export const Route = createFileRoute("/programs/")({
  head: () => ({
    meta: [
      { title: "Programs · Genius Kids and Public School" },
      {
        name: "description",
        content:
          "Playgroup, Nursery, LKG, UKG and Primary programs designed for joyful learning in Electronic City, Bangalore.",
      },
    ],
  }),
  component: ProgramsPage,
});

function ProgramsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <SectionTitle
        eyebrow="Our Programs"
        title="A program for every age, a smile for every child"
      />
      <div className="grid md:grid-cols-2 gap-6 mt-12">
        {programs.map((p, i) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="card-cute overflow-hidden group"
          >
            <div className="grid md:grid-cols-5">
              <div className="md:col-span-2 aspect-square md:aspect-auto overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="md:col-span-3 p-6">
                <div className="flex items-center gap-3">
                  <div
                    className="size-12 rounded-2xl grid place-items-center text-2xl"
                    style={{ background: p.color }}
                  >
                    {p.emoji}
                  </div>
                  <div>
                    <div className="font-display text-2xl">{p.name}</div>
                    <div className="text-sm text-muted-foreground">{p.age}</div>
                  </div>
                </div>
                <p className="mt-3 text-sm">{p.blurb}</p>
                <ul className="grid grid-cols-2 gap-2 mt-4">
                  {p.focus.map((f) => (
                    <li key={f} className="text-xs px-3 py-1.5 rounded-full bg-muted font-semibold">
                      ✦ {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/programs/$slug"
                  params={{ slug: p.slug }}
                  className="mt-5 inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-bold text-sm btn-bouncy"
                >
                  Explore {p.name} <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
