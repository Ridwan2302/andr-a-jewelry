import Image from "next/image";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="top"
      className="section-anchor relative grid grid-cols-[1.05fr_1fr] items-stretch min-h-[640px] max-[960px]:grid-cols-1"
    >
      <div className="flex flex-col justify-center px-[clamp(32px,6vw,110px)] py-20 max-[960px]:py-14 max-[960px]:px-7">
        <Reveal className="text-xs tracking-[4px] uppercase text-gold mb-6">
          Nouvelle collection · 2026
        </Reveal>
        <Reveal delay={100}>
          <h1 className="font-serif font-medium text-[clamp(48px,6vw,82px)] leading-[1.02] tracking-[-0.5px]">
            Des bijoux pensés
            <br />
            <span className="italic text-gold-deep">pour durer</span>
          </h1>
        </Reveal>
        <Reveal
          delay={220}
          className="max-w-[420px] my-7 text-base leading-[1.75] text-muted font-light"
        >
          Acier inoxydable et plaqué or, sélectionnés pour leur éclat durable
          et leur confort au quotidien. Une élégance accessible, pensée pour
          la femme moderne.
        </Reveal>
        <Reveal delay={340} className="flex gap-4 items-center flex-wrap">
          <a
            href="#boutique"
            className="bg-ink text-cream px-10 py-[17px] text-[12.5px] tracking-[2px] uppercase rounded-full"
          >
            Découvrir la boutique
          </a>
          <a
            href="#collections"
            className="text-[12.5px] tracking-[2px] uppercase border-b border-ink pb-1"
          >
            Voir les collections
          </a>
        </Reveal>
      </div>
      <Reveal
        delay={150}
        className="relative min-h-[360px] max-[560px]:min-h-[300px]"
      >
        <Image
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80"
          alt="Modèle portant des bijoux Andréa"
          fill
          priority
          sizes="(max-width: 960px) 100vw, 50vw"
          className="object-cover"
        />
      </Reveal>
    </section>
  );
}
