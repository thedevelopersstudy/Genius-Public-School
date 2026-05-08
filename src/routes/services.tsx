import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { additionalServices } from "@/lib/data";
import { SectionTitle } from "./index";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Music, Dance & Tutorials · Genius Kids" },
      {
        name: "description",
        content:
          "Genius Music Classes, Dance Classes and Tutorials for Class 1–10 in Electronic City, Bangalore.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <SectionTitle eyebrow="Beyond the classroom" title="Music, Dance & Academic Tutorials" />
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mt-4">
        A complete learning ecosystem — from melody and movement to mastery in academics.
      </p>

      <div className="grid lg:grid-cols-3 gap-6 mt-12">
        {additionalServices.map((s, i) => (
          <motion.div
            key={s.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="card-cute overflow-hidden hover:-translate-y-2 transition group"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={s.image}
                alt={s.name}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between">
                <span className="text-3xl">{s.emoji}</span>
                <span
                  className="text-xs font-bold uppercase px-2.5 py-1 rounded-full text-white"
                  style={{ background: s.color }}
                >
                  {s.tag}
                </span>
              </div>
              <div className="font-display text-2xl mt-3">{s.name}</div>
              <p className="text-sm text-muted-foreground mt-2">{s.blurb}</p>
              <ul className="mt-4 space-y-1.5">
                {s.points.map((p) => (
                  <li key={p} className="text-sm flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              {s.slug === "tutorials" && (
                <Link
                  to="/tutorials"
                  className="inline-block mt-5 px-5 py-2 rounded-full bg-primary text-primary-foreground font-bold text-sm btn-bouncy"
                >
                  Explore Subjects →
                </Link>
              )}
              {s.slug !== "tutorials" && (
                <Link
                  to="/admissions"
                  className="inline-block mt-5 px-5 py-2 rounded-full bg-accent font-bold text-sm btn-bouncy"
                >
                  Enquire Now →
                </Link>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
