import Image from "next/image";
import { collections } from "@/lib/data";
import Reveal from "./Reveal";

export default function Collections() {
  return (
    <section
      id="collections"
      className="section-anchor max-w-[1280px] mx-auto px-8 pt-[100px] pb-10 max-[560px]:px-5"
    >
      <Reveal className="text-center mb-14">
        <div className="text-xs tracking-[4px] uppercase text-gold mb-3.5">
          Explorer
        </div>
        <h2 className="font-serif font-medium text-[clamp(34px,4vw,52px)]">
          Nos collections
        </h2>
      </Reveal>
      <div className="grid grid-cols-3 gap-6 max-[960px]:grid-cols-2 max-[560px]:grid-cols-1">
        {collections.map((col, i) => (
          <Reveal key={col.id} delay={i * 100}>
            <a href="#boutique" className="block relative">
              <div className="relative w-full h-[440px]">
                <Image
                  src={col.img}
                  alt={col.name}
                  fill
                  sizes="(max-width: 560px) 100vw, (max-width: 960px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute left-0 right-0 bottom-0 p-7 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-transparent">
                <div className="font-serif text-[30px] text-white">
                  {col.name}
                </div>
                <div className="text-[11px] tracking-[2px] uppercase text-on-dark mt-1">
                  {col.count} pièces
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
