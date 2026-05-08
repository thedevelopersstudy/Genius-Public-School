import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { SectionTitle } from "./index";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions 2025–26 · Genius Kids" },
      {
        name: "description",
        content:
          "Apply online or book a school tour at Genius Kids and Public School, Electronic City.",
      },
    ],
  }),
  component: AdmissionsPage,
});

const steps = [
  { t: "Enquire Online", d: "Fill the 60-second enquiry form below." },
  { t: "Campus Tour", d: "Visit us, meet teachers, see the classrooms." },
  { t: "Interaction", d: "A friendly play-based session with your child." },
  { t: "Confirm Seat", d: "Complete formalities and welcome to the family!" },
];

function AdmissionsPage() {
  const [done, setDone] = useState(false);
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <SectionTitle eyebrow="Admissions 2025–26" title="A simple journey to a happier school day" />

     

      <div className="mt-14 grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 card-cute p-7">
          <h2 className="font-display text-2xl">Apply / Book a tour</h2>
          {done ? (
            <div className="mt-8 text-center">
              <CheckCircle2 className="size-16 mx-auto text-primary" />
              <div className="font-display text-2xl mt-3">Thank you! 🎉</div>
              <p className="text-muted-foreground mt-1">
                Our admissions team will call you within an hour.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setDone(true);
              }}
              className="grid sm:grid-cols-2 gap-4 mt-5"
            >
              {[
                { n: "parent", l: "Parent name", t: "text" },
                { n: "phone", l: "Phone", t: "tel" },
                { n: "email", l: "Email", t: "email" },
                { n: "child", l: "Child name", t: "text" },
              ].map((f) => (
                <label key={f.n} className="text-sm">
                  <span className="font-semibold">{f.l}</span>
                  <input
                    required
                    type={f.t}
                    className="mt-1.5 w-full px-4 py-3 rounded-2xl bg-muted outline-none focus:ring-2 ring-primary"
                  />
                </label>
              ))}
              <label className="text-sm">
                <span className="font-semibold">Child's age</span>
                <input
                  required
                  type="number"
                  min={1}
                  max={11}
                  className="mt-1.5 w-full px-4 py-3 rounded-2xl bg-muted outline-none focus:ring-2 ring-primary"
                />
              </label>
              <label className="text-sm">
                <span className="font-semibold">Interested in</span>
                <select className="mt-1.5 w-full px-4 py-3 rounded-2xl bg-muted outline-none focus:ring-2 ring-primary">
                  <option>Playgroup</option>
                  <option>Nursery</option>
                  <option>LKG</option>
                  <option>UKG</option>
                  <option>Primary</option>
                </select>
              </label>
              <label className="sm:col-span-2 text-sm">
                <span className="font-semibold">Message (optional)</span>
                <textarea
                  rows={3}
                  className="mt-1.5 w-full px-4 py-3 rounded-2xl bg-muted outline-none focus:ring-2 ring-primary"
                />
              </label>
              <button className="sm:col-span-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-bold btn-bouncy shadow-toy">
                Submit Enquiry ✨
              </button>
            </form>
          )}
        </div>
         <div className="grid md:grid-cols-4 gap-4 mt-12">
        {steps.map((s, i) => (
          <motion.div
            key={s.t}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="card-cute p-5 relative"
          >
            <div className="size-10 rounded-full gradient-rainbow text-white grid place-items-center font-display">
              {i + 1}
            </div>
            <div className="font-display text-lg mt-3">{s.t}</div>
            <p className="text-sm text-muted-foreground mt-1">{s.d}</p>
          </motion.div>
        ))}
      </div>
        <aside className="lg:col-span-2 space-y-4">
          <div className="card-cute p-6">
            <div className="font-display text-xl">Why apply early?</div>
            <ul className="mt-3 space-y-2 text-sm">
              {[
                "Limited seats per class",
                "Early-bird fee benefits",
                "Priority for sibling admissions",
                "Free school tour & trial day",
              ].map((s) => (
                <li key={s} className="flex gap-2">
                  <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="card-cute p-6 gradient-rainbow text-white">
            <div className="font-display text-xl">Talk to admissions</div>
            <a href="tel:+919999999999" className="block mt-2 font-bold text-2xl">
              +91 99999 99999
            </a>
            <div className="text-xs opacity-90 mt-1">Mon – Sat · 9 AM – 6 PM</div>
          </div>
        </aside>
      </div>
    </main>
  );
}
