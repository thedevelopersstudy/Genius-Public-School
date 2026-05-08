import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, MapPin, Phone, Youtube } from "lucide-react";
import logoSrc from "@/assets/Logo.jpg";

export function SiteFooter() {
  return (
    <footer className="mt-24 relative">
      <div className="h-10 gradient-rainbow" />
      <div className="bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-6 py-14 grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="size-10 overflow-hidden rounded-2xl bg-white/10">
                <img
                  src={logoSrc}
                  alt="Genius Kids Public School"
                  className="size-full object-cover"
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <div className="font-display text-lg font-bold">Genius Kids</div>
                <div className="text-xs opacity-70">Learning Today, Leading Tomorrow</div>
              </div>
            </div>
            <p className="text-sm opacity-70 mt-4 leading-relaxed">
              A joyful, premium learning environment in Electronic City, Bangalore where little
              minds grow into big dreams.
            </p>
            <div className="flex gap-2 mt-4">
              {[Instagram, Facebook, Youtube].map((I, i) => (
                <a
                  key={i}
                  href="#"
                  className="size-9 grid place-items-center rounded-full bg-white/10 hover:bg-white/20"
                >
                  <I className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-base mb-3">Explore</h4>
            <ul className="space-y-2 text-sm opacity-80">
              {[
                ["/programs", "Programs"],
                ["/facilities", "Facilities"],
                ["/gallery", "Gallery"],
                ["/teachers", "Teachers"],
              ].map(([to, l]) => (
                <li key={to}>
                  <Link to={to} className="hover:opacity-100 hover:underline">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base mb-3">Admissions</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link to="/admissions" className="hover:underline">
                  Apply Online
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="hover:underline">
                  Book a School Tour
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Fee Enquiry
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base mb-3">Visit Us</h4>
            <p className="text-sm opacity-80 leading-relaxed flex gap-2">
              <MapPin className="size-4 shrink-0 mt-0.5" />
              No 10, Near Sony Center, 2nd Cross, Pragathi Nagar, Chikkathogur Road, Electronic
              City, Bangalore – 560100
            </p>
            <a
              href="tel:+919999999999"
              className="mt-3 inline-flex items-center gap-2 text-sm font-semibold"
            >
              <Phone className="size-4" /> +91 99999 99999
            </a>
          </div>
        </div>
        <div className="border-t border-white/10 py-5 text-center text-xs opacity-60">
          © {new Date().getFullYear()} Genius Kids and Public School. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
