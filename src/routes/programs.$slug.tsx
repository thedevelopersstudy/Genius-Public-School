import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Carousel } from "@/components/Carousel";
import { gallery, programs } from "@/lib/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/programs/$slug")({
  loader: ({ params }) => {
    const program = programs.find((p) => p.slug === params.slug);
    if (!program) throw notFound();
    return { program };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.program.name ?? "Program"} · Genius Kids` },
      { name: "description", content: loaderData?.program.blurb ?? "" },
    ],
  }),
  component: ProgramDetail,
  notFoundComponent: () => (
    <div className="p-20 text-center">
      <h1 className="font-display text-3xl">Program not found</h1>
      <Link to="/programs" className="text-primary underline">
        Back to programs
      </Link>
    </div>
  ),
  errorComponent: ({ error }) => <div className="p-20 text-center">{error.message}</div>,
});

function ProgramDetail() {
  const { program: p } = Route.useLoaderData();
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <div className="rounded-[2rem] overflow-hidden card-cute">
        <div className="aspect-[16/7] overflow-hidden relative">
          <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <div className="text-5xl">{p.emoji}</div>
            <h1 className="font-display text-5xl mt-2">{p.name}</h1>
            <div className="text-sm opacity-90">{p.age}</div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mt-10">
        <div className="lg:col-span-2 space-y-8">
          <section>
            <h2 className="font-display text-2xl mb-2">Program overview</h2>
            <p className="text-muted-foreground leading-relaxed">
              {p.blurb} Our {p.name.toLowerCase()} program blends play-based discovery with
              structured learning, helping each child build confidence, curiosity and a strong
              academic foundation in a warm, joyful environment.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl mb-3">Curriculum highlights</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {p.focus.map((f: string) => (
                <div key={f} className="card-cute p-4 flex items-center gap-3">
                  <div
                    className="size-9 rounded-full grid place-items-center text-lg"
                    style={{ background: p.color }}
                  >
                    ✦
                  </div>
                  <div className="text-sm font-semibold">{f}</div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl mb-3">A typical day</h2>
            <ol className="space-y-2 text-sm">
              {[
                "9:00 – Welcome circle, songs and morning yoga",
                "9:45 – Theme-based learning blocks (literacy / numeracy)",
                "10:30 – Healthy snack break",
                "11:00 – Art, music or STEAM activity",
                "12:00 – Outdoor play & motor skills",
                "12:30 – Story time & reflection",
              ].map((s, i) => (
                <li key={i} className="card-cute px-4 py-3 flex gap-3">
                  <span className="font-display text-primary">{i + 1}</span>
                  {s}
                </li>
              ))}
            </ol>
          </section>

          <section>
            <h2 className="font-display text-2xl mb-3">Gallery</h2>
            <Carousel perView="lg">
              {gallery.slice(0, 8).map((src, i) => (
                <div key={i} className="card-cute overflow-hidden">
                  <div className="aspect-square">
                    <img src={src} alt="" className="w-full h-full object-cover" />
                  </div>
                </div>
              ))}
            </Carousel>
          </section>

          <section>
            <h2 className="font-display text-2xl mb-3">Frequently asked</h2>
            <Accordion type="single" collapsible className="card-cute px-5">
              {[
                {
                  q: "What is the teacher-to-child ratio?",
                  a: "We maintain a 1:8 ratio in early years and 1:15 in primary, ensuring every child gets attention.",
                },
                {
                  q: "Do you offer trial classes?",
                  a: "Yes! Book a free 1-hour trial via our admissions page.",
                },
                {
                  q: "Is transport available?",
                  a: "We run GPS-tracked AC buses across Electronic City and surrounding areas.",
                },
                {
                  q: "How are parents updated?",
                  a: "Daily photo updates, weekly summaries and a monthly parent-teacher meet.",
                },
              ].map((f, i) => (
                <AccordionItem key={i} value={`f${i}`}>
                  <AccordionTrigger className="font-semibold">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </div>

        <aside className="space-y-4">
          <div className="card-cute p-6 sticky top-24">
            <div className="font-display text-xl">Ready to enroll?</div>
            <p className="text-sm text-muted-foreground mt-1">Limited seats for 2025–26.</p>
            <Link
              to="/admissions"
              className="mt-4 block text-center px-5 py-3 rounded-full bg-primary text-primary-foreground font-bold btn-bouncy"
            >
              Apply now
            </Link>
            <Link
              to="/contact"
              className="mt-2 block text-center px-5 py-3 rounded-full bg-card border-2 border-border font-bold btn-bouncy"
            >
              Contact us
            </Link>
          </div>
        </aside>
      </div>
    </main>
  );
}
