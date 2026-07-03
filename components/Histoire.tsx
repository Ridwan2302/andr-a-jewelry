import Image from "next/image";

export default function Histoire() {
  return (
    <section id="histoire" className="section-anchor bg-ink text-on-dark">
      <div className="max-w-[1280px] mx-auto grid grid-cols-2 items-stretch min-h-[560px] max-[960px]:grid-cols-1 max-[960px]:min-h-0">
        <div className="relative min-h-[360px] max-[560px]:min-h-[300px]">
          <Image
            src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1100&q=80"
            alt="Atelier de joaillerie Andréa"
            fill
            sizes="(max-width: 960px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center px-[clamp(32px,6vw,90px)] py-20 max-[960px]:py-14 max-[960px]:px-7">
          <div className="text-xs tracking-[4px] uppercase text-gold mb-[22px]">
            Notre histoire
          </div>
          <h2 className="font-serif font-medium text-[clamp(32px,3.6vw,48px)] leading-[1.1]">
            Un savoir-faire né à Abidjan
          </h2>
          <p className="text-base leading-[1.85] text-on-dark-2 font-light mt-[26px] mb-[18px] max-w-[460px]">
            Fondée à Cocody, Andréa Jewelry réunit des artisans joailliers qui
            perpétuent un art d&apos;exception. Chaque pièce est dessinée,
            fondue et sertie à la main, avec des matériaux nobles
            sélectionnés avec soin.
          </p>
          <p className="text-base leading-[1.85] text-on-dark-2 font-light max-w-[460px]">
            De la première esquisse à l&apos;écrin final, nous créons des
            bijoux qui traversent les générations.
          </p>
          <a
            href="#collections"
            className="mt-[38px] self-start border-b border-gold text-on-dark pb-[5px] text-[12.5px] tracking-[2px] uppercase"
          >
            Découvrir le savoir-faire
          </a>
        </div>
      </div>
    </section>
  );
}
