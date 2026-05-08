import { AnimatePresence, motion } from "framer-motion";
import { Bot, Send, Sparkles, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Msg = { from: "bot" | "user"; text: string };

const KB: { keywords: string[]; reply: string }[] = [
  {
    keywords: ["hi", "hello", "hey", "namaste"],
    reply:
      "Hi there! 👋 I'm Genie, your parent assistant. Ask me about programs, fees, transport, or admissions!",
  },
  {
    keywords: ["age", "old", "year"],
    reply:
      "We have programs for kids 1.5–10 years: Playgroup, Nursery, LKG, UKG and Primary (Grades 1–5). Which age is your child? 🌈",
  },
  {
    keywords: ["fee", "fees", "cost", "price"],
    reply:
      "Our fees are very competitive for the Electronic City area. Drop your number on the Admissions page and our counsellor will share a detailed brochure within the hour. 📩",
  },
  {
    keywords: ["transport", "bus", "pickup"],
    reply:
      "Yes! We run GPS-tracked buses across Electronic City, HSR, Bommasandra and Singasandra with female attendants on every route. 🚌",
  },
  {
    keywords: ["timing", "time", "hours"],
    reply:
      "Preschool: 9:00 AM – 12:30 PM • Kindergarten: 9:00 AM – 1:30 PM • Primary: 8:30 AM – 3:00 PM. 🕘",
  },
  {
    keywords: ["admission", "apply", "join", "enroll"],
    reply:
      "Admissions for 2025–26 are open! Visit the Admissions page to book a campus tour or apply in 60 seconds. ✨",
  },
  {
    keywords: ["food", "meal", "lunch", "tiffin"],
    reply:
      "We serve freshly cooked, nutritionist-approved vegetarian meals + healthy snacks every day. 🥗",
  },
  {
    keywords: ["safety", "secure", "cctv"],
    reply:
      "100% CCTV coverage, biometric entry, female caretakers, fire-safety drills and a full-time nurse on campus. 🛡️",
  },
  {
    keywords: ["location", "address", "where"],
    reply:
      "We are at No 10, Near Sony Center, 2nd Cross, Pragathi Nagar, Chikkathogur Road, Electronic City, Bangalore – 560100. 📍",
  },
];

function answer(q: string): string {
  const t = q.toLowerCase();
  for (const k of KB) if (k.keywords.some((w) => t.includes(w))) return k.reply;
  return "Lovely question! 🌟 A counsellor will reach out shortly. Meanwhile, you can call us at +91 99999 99999 or book a tour from the Admissions page.";
}

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([
    {
      from: "bot",
      text: "Hi! I'm Genie 🧞 — ask me anything about Genius Kids: programs, fees, transport, admissions…",
    },
  ]);
  const [text, setText] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, open]);

  const send = () => {
    const t = text.trim();
    if (!t) return;
    setMsgs((m) => [...m, { from: "user", text: t }]);
    setText("");
    setTimeout(() => setMsgs((m) => [...m, { from: "bot", text: answer(t) }]), 500);
  };

  return (
    <>
      <motion.button
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-5 right-5 z-50 size-16 rounded-full gradient-rainbow shadow-toy grid place-items-center text-white"
        aria-label="Open chat"
      >
        {open ? <X className="size-7" /> : <Bot className="size-7" />}
      </motion.button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            className="fixed bottom-24 right-5 z-50 w-[92vw] max-w-sm h-[70vh] max-h-[560px] bg-card rounded-3xl shadow-toy border border-border overflow-hidden flex flex-col"
          >
            <div className="p-4 gradient-rainbow text-white flex items-center gap-3">
              <div className="size-10 rounded-2xl bg-white/20 grid place-items-center">
                <Sparkles className="size-5" />
              </div>
              <div>
                <div className="font-display text-lg leading-tight">Genie · Parent Assistant</div>
                <div className="text-xs opacity-90">Online · Replies in seconds</div>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-muted/40">
              {msgs.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm ${m.from === "user" ? "bg-primary text-primary-foreground rounded-br-sm" : "bg-card border border-border rounded-bl-sm"}`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              <div ref={endRef} />
            </div>
            <div className="p-3 border-t border-border flex gap-2 bg-card">
              <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Ask about programs, fees, transport…"
                className="flex-1 px-4 py-2.5 rounded-full bg-muted text-sm outline-none focus:ring-2 ring-primary"
              />
              <button
                onClick={send}
                className="size-11 grid place-items-center rounded-full bg-primary text-primary-foreground btn-bouncy"
              >
                <Send className="size-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
