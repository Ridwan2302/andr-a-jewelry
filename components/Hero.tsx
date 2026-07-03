import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="section-anchor relative grid grid-cols-[1.05fr_1fr] items-stretch min-h-[640px] max-[960px]:grid-cols-1"
    >
      <div className="flex flex-col justify-center px-[clamp(32px,6vw,110px)] py-20 max-[960px]:py-14 max-[960px]:px-7">
        <div className="text-xs tracking-[4px] uppercase text-gold mb-6">
          Nouvelle collection · 2026
        </div>
        <h1 className="font-serif font-medium text-[clamp(48px,6vw,82px)] leading-[1.02] tracking-[-0.5px]">
          L&apos;or qui raconte
          <br />
          <span className="italic text-gold-deep">votre histoire</span>
        </h1>
        <p className="max-w-[420px] my-7 text-base leading-[1.75] text-muted font-light">
          Des pièces façonnées à la main à Abidjan, en or 18 carats et pierres
          véritables. Une élégance intemporelle, pensée pour la femme
          ivoirienne.
        </p>
        <div className="flex gap-4 items-center flex-wrap">
          <a
            href="#boutique"
            className="bg-ink text-cream px-10 py-[17px] text-[12.5px] tracking-[2px] uppercase"
          >
            Découvrir la boutique
          </a>
          <a
            href="#collections"
            className="text-[12.5px] tracking-[2px] uppercase border-b border-ink pb-1"
          >
            Voir les collections
          </a>
        </div>
      </div>
      <div className="relative min-h-[360px] max-[560px]:min-h-[300px]">
        <Image
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80"
          alt="Modèle portant des bijoux Andréa"
          fill
          priority
          sizes="(max-width: 960px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
