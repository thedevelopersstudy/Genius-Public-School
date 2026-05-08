import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { teachers } from "@/lib/data";
import { SectionTitle } from "./index";

export const Route = createFileRoute("/teachers")({
  head: () => ({
    meta: [
      { title: "Our Teachers · Genius Kids" },
      {
        name: "description",
        content: "Meet the warm, qualified educators behind Genius Kids and Public School.",
      },
    ],
  }),
  component: () => (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <SectionTitle eyebrow="Our Educators" title="Hearts that teach, minds that inspire" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {teachers.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="card-cute overflow-hidden group"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={t.img}
                alt={t.name}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
            <div className="p-5">
              <div className="font-display text-xl">{t.name}</div>
              <div className="text-sm text-primary font-bold">{t.role}</div>
              <p className="text-sm text-muted-foreground mt-2">{t.bio}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  ),
});
