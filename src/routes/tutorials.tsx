import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { tutorialSubjects } from "@/lib/data";
import { SectionTitle } from "./index";

export const Route = createFileRoute("/tutorials")({
  head: () => ({
    meta: [
      { title: "Tutorials Class 1 to 10 · Genius Kids" },
      {
        name: "description",
        content:
          "After-school tutorials for Class 1 to 10 — Maths, Science, English, Social Studies, Computers and more in Electronic City.",
      },
    ],
  }),
  component: TutorialsPage,
});

function TutorialsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <SectionTitle eyebrow="Class 1 to 10" title="Tutorials that build confident learners" />
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mt-4">
        Personalised academic coaching with small batches, concept clarity, homework help and full
        exam preparation.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
        {tutorialSubjects.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="card-cute p-6 hover:-translate-y-2 transition"
          >
            <div className="text-4xl">{s.emoji}</div>
            <div className="font-display text-xl mt-3">{s.name}</div>
            <p className="text-sm text-muted-foreground mt-2">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-5">
        {[
          { t: "Homework Support", d: "Daily guided homework hours so kids never fall behind." },
          { t: "Concept Learning", d: "Visual, hands-on teaching that makes tough topics click." },
          { t: "Exam Preparation", d: "Mock tests, revision plans and personalised feedback." },
        ].map((b) => (
          <div key={b.t} className="card-cute p-6">
            <div className="font-display text-lg">{b.t}</div>
            <p className="text-sm text-muted-foreground mt-2">{b.d}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 text-center">
        <Link
          to="/admissions"
          className="btn-bouncy inline-block px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-bold shadow-toy"
        >
          Enrol for Tutorials →
        </Link>
      </div>
    </main>
  );
}
