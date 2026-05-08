import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { events, gallery } from "@/lib/data";
import { SectionTitle } from "./index";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery & Events · Genius Kids" },
      {
        name: "description",
        content:
          "Annual day, sports, art mela and joyful moments at Genius Kids and Public School.",
      },
    ],
  }),
  component: () => (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <SectionTitle eyebrow="Events & Gallery" title="Memories that make us smile" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {events.map((e, i) => (
          <motion.div
            key={e.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="card-cute overflow-hidden"
          >
            <div className="aspect-[4/3] overflow-hidden relative">
              <img
                src={e.img}
                alt={e.title}
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-card/90 backdrop-blur text-xs font-bold">
                {e.date}
              </div>
            </div>
            <div className="p-4 font-display text-lg">{e.title}</div>
          </motion.div>
        ))}
      </div>

      <h2 className="font-display text-3xl mt-20 mb-6 text-center">Campus Gallery</h2>
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [&>*]:mb-4">
        {gallery.map((src, i) => (
          <motion.img
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            src={src}
            alt=""
            className="w-full rounded-2xl break-inside-avoid hover:scale-[1.02] transition shadow-toy"
            style={{ height: 180 + (i % 4) * 60 }}
          />
        ))}
      </div>
    </main>
  ),
});
