import { reviews } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="max-w-[1100px] mx-auto px-8 py-[100px] text-center max-[560px]:px-5">
      <div className="text-xs tracking-[4px] uppercase text-gold mb-10">
        Elles nous font confiance
      </div>
      <div className="grid grid-cols-3 gap-12 max-[960px]:grid-cols-2 max-[560px]:grid-cols-1">
        {reviews.map((review) => (
          <div key={review.name}>
            <div className="text-gold text-[15px] tracking-[3px] mb-[18px]">
              ★★★★★
            </div>
            <p className="font-serif italic text-[22px] leading-[1.5] text-[#3a352e]">
              &ldquo;{review.quote}&rdquo;
            </p>
            <div className="text-[11px] tracking-[2px] uppercase text-muted-2 mt-5">
              {review.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
