import { reviews } from "@/lib/data";
import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section className="max-w-[1100px] mx-auto px-8 py-[100px] text-center max-[560px]:px-5">
      <Reveal className="text-xs tracking-[4px] uppercase text-gold mb-10">
        Elles nous font confiance
      </Reveal>
      <div className="grid grid-cols-3 gap-12 max-[960px]:grid-cols-2 max-[560px]:grid-cols-1">
        {reviews.map((review, i) => (
          <Reveal key={review.name} delay={i * 100}>
            <div className="text-gold text-[15px] tracking-[3px] mb-[18px]">
              ★★★★★
            </div>
            <p className="font-serif italic text-[22px] leading-[1.5] text-ink">
              &ldquo;{review.quote}&rdquo;
            </p>
            <div className="text-[11px] tracking-[2px] uppercase text-muted-2 mt-5">
              {review.name}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
