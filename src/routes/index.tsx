import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Carousel } from "@/components/Carousel";
import {
  additionalServices,
  events,
  facilities,
  gallery,
  programs,
  registrationBadges,
  teachers,
  testimonials,
} from "@/lib/data";
import { Award, BookOpen, HeartHandshake, Quote, ShieldCheck, Sparkles, Star } from "lucide-react";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Genius Kids and Public School · Premium Preschool & Primary in Electronic City" },
      {
        name: "description",
        content:
          "Where little minds grow into big dreams. Joyful, safe and academically excellent learning for ages 1.5–11 in Electronic City, Bangalore.",
      },
      { property: "og:title", content: "Genius Kids and Public School" },
      { property: "og:description", content: "Where little minds grow into big dreams." },
    ],
  }),
  component: Home,
});

function Float({
  className,
  delay = 0,
  children,
}: {
  className?: string;
  delay?: number;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      animate={{ y: [0, -16, 0], rotate: [0, 6, 0] }}
      transition={{ duration: 6, repeat: Infinity, delay, ease: "easeInOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Home() {
  return (
    <main className="overflow-hidden">
      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 pt-10 pb-20 grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card border border-border text-sm font-semibold shadow-sm"
            >
              <Sparkles className="size-4 text-primary" /> Admissions Open · 2025–26
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mt-5"
            >
              Where little minds <br />
              grow into <span className="gradient-text">big dreams</span> ✨
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="mt-5 text-lg text-muted-foreground max-w-xl"
            >
              A joyful, premium learning environment in Electronic City designed for creativity,
              confidence, and academic excellence — from playgroup to grade 5.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link
                to="/admissions"
                className="btn-bouncy px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-bold shadow-toy"
              >
                Apply for Admission →
              </Link>
              <Link
                to="/admissions"
                className="btn-bouncy px-7 py-3.5 rounded-full bg-card border-2 border-foreground/10 font-bold"
              >
                Book a School Tour
              </Link>
            </motion.div>

            <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg">
              {[
                { n: "12+", l: "Years of joy" },
                { n: "1.2k", l: "Happy kids" },
                { n: "4.9★", l: "Parent rating" },
              ].map((s) => (
                <div key={s.l} className="card-cute px-4 py-4 text-center">
                  <div className="font-display text-3xl gradient-text">{s.n}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[460px] lg:h-[560px]">
            <Float className="absolute -top-2 left-4 z-10" delay={0}>
              <div className="bg-card card-cute px-4 py-3 flex items-center gap-3">
                <div className="size-10 rounded-full bg-mint grid place-items-center">🌟</div>
                <div className="text-sm">
                  <b>Storytime</b>
                  <div className="text-xs text-muted-foreground">9:30 AM</div>
                </div>
              </div>
            </Float>
            <Float className="absolute top-32 -right-2 z-10" delay={1.2}>
              <div className="bg-card card-cute px-4 py-3 flex items-center gap-3">
                <div
                  className="size-10 rounded-full grid place-items-center"
                  style={{ background: "var(--sun)" }}
                >
                  🎨
                </div>
                <div className="text-sm">
                  <b>Art Studio</b>
                  <div className="text-xs text-muted-foreground">Mon · Wed</div>
                </div>
              </div>
            </Float>
            <Float className="absolute bottom-6 left-0 z-10" delay={2.4}>
              <div className="bg-card card-cute px-4 py-3 flex items-center gap-3">
                <div
                  className="size-10 rounded-full grid place-items-center"
                  style={{ background: "var(--bubblegum)" }}
                >
                  🚌
                </div>
                <div className="text-sm">
                  <b>GPS Buses</b>
                  <div className="text-xs text-muted-foreground">Live tracking</div>
                </div>
              </div>
            </Float>

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-[3rem] overflow-hidden shadow-toy border-8 border-card"
            >
              <img
                src={heroImg}
                alt="Indian children learning joyfully at Genius Kids and Public School"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/30" />
            </motion.div>
            <div className="absolute -z-10 -inset-8 gradient-rainbow blur-3xl opacity-30 rounded-full" />
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="Why parents love us"
          title="A school built for happy, confident kids"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {[
            {
              icon: HeartHandshake,
              t: "Loving Educators",
              d: "Warm, trained teachers who treat every child like their own.",
              c: "var(--bubblegum)",
            },
            {
              icon: BookOpen,
              t: "Joyful Curriculum",
              d: "Play-based pedagogy blended with CBSE-aligned rigour.",
              c: "var(--sun)",
            },
            {
              icon: ShieldCheck,
              t: "100% Safe Campus",
              d: "CCTV, biometric entry, female staff and full-time nurse.",
              c: "var(--mint)",
            },
            {
              icon: Award,
              t: "Award Winning",
              d: "Recognised among the top preschools in Electronic City.",
              c: "var(--sky)",
            },
          ].map((f, i) => (
            <motion.div
              key={f.t}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card-cute p-6 hover:-translate-y-2 transition"
            >
              <div
                className="size-14 rounded-2xl grid place-items-center mb-4"
                style={{ background: f.c }}
              >
                <f.icon className="size-7 text-foreground" />
              </div>
              <div className="font-display text-xl">{f.t}</div>
              <p className="text-sm text-muted-foreground mt-1.5">{f.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROGRAMS CAROUSEL */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <SectionTitle eyebrow="Our Programs" title="From first steps to confident learners" />
        <div className="mt-10">
          <Carousel>
            {programs.map((p) => (
              <Link
                key={p.slug}
                to="/programs/$slug"
                params={{ slug: p.slug }}
                className="block group"
              >
                <div className="card-cute overflow-hidden">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <span className="text-3xl">{p.emoji}</span>
                      <span
                        className="text-xs font-bold uppercase px-2.5 py-1 rounded-full"
                        style={{ background: p.color, color: "white" }}
                      >
                        {p.tag}
                      </span>
                    </div>
                    <div className="font-display text-2xl mt-2">{p.name}</div>
                    <div className="text-sm text-muted-foreground">{p.age}</div>
                    <p className="text-sm mt-2 line-clamp-2">{p.blurb}</p>
                  </div>
                </div>
              </Link>
            ))}
          </Carousel>
        </div>
      </section>

      {/* ADDITIONAL SERVICES — Music, Dance, Tutorials */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle eyebrow="Beyond academics" title="Music · Dance · Tutorials" />
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
                <Link
                  to={s.slug === "tutorials" ? "/tutorials" : "/services"}
                  className="inline-block mt-4 text-sm font-bold text-primary"
                >
                  Learn more →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TRUST / REGISTRATION BADGES */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="rounded-[2.5rem] p-8 lg:p-12 bg-card card-cute">
          <SectionTitle
            eyebrow="Officially Registered Institute"
            title="A school parents can trust"
          />
          <p className="text-center text-sm text-muted-foreground mt-3 max-w-2xl mx-auto">
            Authorised to teach <b>Preschool, Nursery, Kindergarten and Class 1 to Class 8</b> —
            with experienced teachers and a safe, activity-based environment.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {registrationBadges.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-3xl p-5 bg-background border-2 border-border"
              >
                <div className="text-4xl">{b.emoji}</div>
                <div className="font-display text-lg mt-3">{b.title}</div>
                <p className="text-xs text-muted-foreground mt-1.5">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <SectionTitle eyebrow="A day at Genius Kids" title="Classroom moments that spark joy" />
        <div className="mt-10">
          <Carousel perView="lg">
            {gallery.slice(0, 8).map((src, i) => (
              <div key={i} className="card-cute overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover hover:scale-110 transition duration-500"
                  />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle eyebrow="World-class facilities" title="A campus designed around children" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {facilities.slice(0, 8).map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="card-cute overflow-hidden hover:-translate-y-2 transition"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={f.img} alt={f.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <div className="text-2xl">{f.emoji}</div>
                <div className="font-display text-lg mt-1">{f.name}</div>
                <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TEACHERS CAROUSEL */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <SectionTitle eyebrow="Meet the team" title="Educators who light up every day" />
        <div className="mt-10">
          <Carousel perView="lg">
            {teachers.map((t) => (
              <div key={t.name} className="card-cute overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <div className="font-display text-lg">{t.name}</div>
                  <div className="text-xs text-primary font-bold">{t.role}</div>
                  <p className="text-xs text-muted-foreground mt-1.5">{t.bio}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* TESTIMONIALS CAROUSEL */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="Words from parents"
          title="Loved by families across Electronic City"
        />
        <div className="mt-10">
          <Carousel>
            {testimonials.map((t) => (
              <div key={t.name} className="card-cute p-6 h-full">
                <Quote className="size-7 text-primary" />
                <p className="text-sm mt-3 leading-relaxed">{t.quote}</p>
                <div className="flex gap-0.5 mt-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" style={{ color: "var(--sun)" }} />
                  ))}
                </div>
                <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border">
                  <img src={t.img} alt={t.name} className="size-12 rounded-full object-cover" />
                  <div>
                    <div className="font-bold text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* EVENTS CAROUSEL */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <SectionTitle eyebrow="Events & celebrations" title="Memories that last a lifetime" />
        <div className="mt-10">
          <Carousel perView="lg">
            {events.map((e) => (
              <div key={e.title} className="card-cute overflow-hidden group">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={e.img}
                    alt={e.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-card/90 backdrop-blur text-xs font-bold">
                    {e.date}
                  </div>
                </div>
                <div className="p-4 font-display text-lg">{e.title}</div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pt-12 pb-20">
        <div className="relative overflow-hidden rounded-[2.5rem] p-10 lg:p-14 gradient-rainbow text-white shadow-toy">
          <div className="relative z-10 max-w-2xl">
            <h2 className="font-display text-4xl lg:text-5xl">
              Ready to give your child the best start? 🎒
            </h2>
            <p className="mt-4 opacity-95 text-lg">
              Schedule a personalised campus tour. Meet our teachers, see the classrooms and feel
              the magic.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/admissions"
                className="btn-bouncy px-7 py-3.5 rounded-full bg-white text-foreground font-bold shadow-toy"
              >
                Book a Tour
              </Link>
              <Link
                to="/contact"
                className="btn-bouncy px-7 py-3.5 rounded-full bg-white/15 backdrop-blur border-2 border-white/40 text-white font-bold"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute -right-20 -bottom-20 size-72 rounded-full bg-white/20"
          />
          <div className="absolute right-10 top-10 text-7xl">🌟</div>
        </div>
      </section>
    </main>
  );
}

export function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-xs font-bold uppercase tracking-wider">
        {eyebrow}
      </div>
      <h2 className="font-display text-4xl lg:text-5xl mt-3">{title}</h2>
    </div>
  );
}
