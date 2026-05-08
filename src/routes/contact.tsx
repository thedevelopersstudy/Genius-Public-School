import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { useState } from "react";
import { SectionTitle } from "./index";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact · Genius Kids" },
      {
        name: "description",
        content:
          "Visit Genius Kids and Public School in Electronic City, Bangalore. Call, WhatsApp or fill our enquiry form.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <SectionTitle eyebrow="Get in touch" title="We'd love to meet you ✨" />

      <div className="grid lg:grid-cols-3 gap-6 mt-12">
        {[
          { i: Phone, t: "Call us", d: "+91 99999 99999", h: "tel:+919999999999" },
          { i: MessageCircle, t: "WhatsApp", d: "Chat instantly", h: "https://wa.me/919999999999" },
          {
            i: Mail,
            t: "Email",
            d: "hello@geniuskids.school",
            h: "mailto:hello@geniuskids.school",
          },
        ].map((c) => (
          <a
            key={c.t}
            href={c.h}
            className="card-cute p-6 hover:-translate-y-1 transition flex items-center gap-4"
          >
            <div className="size-12 rounded-2xl gradient-rainbow grid place-items-center text-white">
              <c.i className="size-6" />
            </div>
            <div>
              <div className="font-display text-lg">{c.t}</div>
              <div className="text-sm text-muted-foreground">{c.d}</div>
            </div>
          </a>
        ))}
      </div>

      <div className="grid lg:grid-cols-5 gap-6 mt-8">
        <div className="lg:col-span-2 card-cute p-7">
          <div className="flex gap-3">
            <MapPin className="size-6 text-primary shrink-0" />
            <div>
              <div className="font-display text-xl">Visit our campus</div>
              <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                No 10, Genius Kids and Public School,
                <br />
                Near Sony Center, 2nd Cross,
                <br />
                Pragathi Nagar, Chikkathogur Road,
                <br />
                Electronic City, Bangalore – 560100,
                <br />
                Karnataka, India
              </p>
            </div>
          </div>
          <hr className="my-5 border-border" />
          {sent ? (
            <div className="font-display text-xl text-primary">
              Thanks! We'll be in touch shortly. 🎉
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="grid gap-3"
            >
              <input
                required
                placeholder="Your name"
                className="px-4 py-3 rounded-2xl bg-muted outline-none focus:ring-2 ring-primary"
              />
              <input
                required
                type="tel"
                placeholder="Phone"
                className="px-4 py-3 rounded-2xl bg-muted outline-none focus:ring-2 ring-primary"
              />
              <textarea
                required
                rows={3}
                placeholder="Message"
                className="px-4 py-3 rounded-2xl bg-muted outline-none focus:ring-2 ring-primary"
              />
              <button className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-bold btn-bouncy">
                Send message
              </button>
            </form>
          )}
        </div>
        <div className="lg:col-span-3 card-cute overflow-hidden min-h-[420px]">
          <iframe
            title="Genius Kids location"
            className="w-full h-full min-h-[420px]"
            src="https://www.google.com/maps?q=Electronic+City,+Bangalore&output=embed"
            loading="lazy"
          />
        </div>
      </div>
    </main>
  );
}
