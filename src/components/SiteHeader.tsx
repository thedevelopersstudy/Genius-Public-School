import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoSrc from "@/assets/Logo.jpg";

const links = [
  { to: "/", label: "Home" },
  { to: "/programs", label: "Programs" },
  { to: "/services", label: "Music & Dance" },
  { to: "/tutorials", label: "Tutorials" },
  { to: "/facilities", label: "Facilities" },
  { to: "/gallery", label: "Gallery" },
  { to: "/teachers", label: "Teachers" },
  { to: "/admissions", label: "Admissions" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 group">
          
            <img
              src={logoSrc}
              alt="Genius Kids Public School"
              className="size-full object-cover w-20 h-20 rounded-4xl"
              
            />
<motion.div
            whileHover={{ rotate: 6, scale: 1.05 }}
            className="size-10 shrink-0 overflow-hidden rounded-2xl bg-card shadow-toy w-40 h-10 flex items-center justify-center"
          >
          <div className="leading-tight">
            <div className="font-display text-lg font-bold">Genius Kids</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
              Public School
            </div>
          </div>
            </motion.div>

        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-3 py-2 rounded-full text-sm font-semibold text-foreground/70 hover:text-foreground hover:bg-accent transition"
              activeProps={{
                className:
                  "px-3 py-2 rounded-full text-sm font-semibold bg-accent text-accent-foreground",
              }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/admissions"
            className="hidden sm:inline-flex btn-bouncy items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground font-bold text-sm shadow-toy"
          >
            Apply Now ✨
          </Link>
          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden size-10 grid place-items-center rounded-full bg-accent"
            aria-label="Menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border/60 bg-background/95">
          <div className="px-4 py-3 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-xl font-semibold hover:bg-accent"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
