import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ReactNode, useCallback, useEffect, useState } from "react";

export function Carousel({
  children,
  autoplay = true,
  perView = "md",
}: {
  children: ReactNode[];
  autoplay?: boolean;
  perView?: "sm" | "md" | "lg";
}) {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "start", dragFree: false });
  const [, setTick] = useState(0);

  const scrollPrev = useCallback(() => embla?.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla?.scrollNext(), [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", () => setTick((t) => t + 1));
  }, [embla]);

  useEffect(() => {
    if (!embla || !autoplay) return;
    const id = setInterval(() => embla.scrollNext(), 3800);
    return () => clearInterval(id);
  }, [embla, autoplay]);

  const slideClass =
    perView === "sm"
      ? "basis-[80%] sm:basis-1/2 lg:basis-1/3"
      : perView === "lg"
        ? "basis-[88%] sm:basis-1/2 lg:basis-1/4"
        : "basis-[80%] sm:basis-1/2 lg:basis-1/3";

  return (
    <div className="relative">
      <div className="overflow-hidden -mx-2" ref={emblaRef}>
        <div className="flex">
          {children.map((c, i) => (
            <div key={i} className={`px-2 shrink-0 ${slideClass}`}>
              {c}
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={scrollPrev}
        className="absolute -left-3 top-1/2 -translate-y-1/2 size-11 rounded-full bg-card shadow-toy grid place-items-center btn-bouncy z-10"
        aria-label="Previous"
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute -right-3 top-1/2 -translate-y-1/2 size-11 rounded-full bg-card shadow-toy grid place-items-center btn-bouncy z-10"
        aria-label="Next"
      >
        <ChevronRight className="size-5" />
      </button>
    </div>
  );
}
