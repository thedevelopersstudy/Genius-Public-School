import { createFileRoute } from "@tanstack/react-router";
import { facilities } from "@/lib/data";
import { motion } from "framer-motion";
import { SectionTitle } from "./index";

export const Route = createFileRoute("/facilities")({
  head: () => ({
    meta: [
      { title: "Facilities · Genius Kids" },
      {
        name: "description",
        content:
          "Smart classrooms, playground, STEAM lab, library and GPS-tracked transport in Electronic City.",
      },
    ],
  }),
  component: () => (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <SectionTitle eyebrow="Campus" title="A campus designed around children" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {facilities.map((f, i) => (
          <motion.div
            key={f.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="card-cute overflow-hidden"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={f.img}
                alt={f.name}
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>
            <div className="p-5">
              <div className="text-3xl">{f.emoji}</div>
              <div className="font-display text-xl mt-1">{f.name}</div>
              <p className="text-sm text-muted-foreground mt-1.5">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  ),
});
