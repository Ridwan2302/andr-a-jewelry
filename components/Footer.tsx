import Reveal from "./Reveal";

const BOUTIQUE_LINKS = ["Colliers", "Bagues", "Boucles d'oreilles", "Bracelets"];
const AIDE_LINKS = ["Livraison", "Retours", "Entretien des bijoux", "Nous contacter"];

export default function Footer() {
  return (
    <footer className="bg-ink text-on-dark-2">
      <Reveal className="max-w-[1280px] mx-auto px-8 pt-[70px] pb-10 grid grid-cols-[1.6fr_1fr_1fr_1fr] gap-10 max-[960px]:grid-cols-2 max-[560px]:grid-cols-1 max-[560px]:px-5">
        <div>
          <div className="font-serif text-[28px] tracking-[3px] text-on-dark">
            ANDRÉA
          </div>
          <div className="text-[10px] tracking-[4px] uppercase text-gold mt-1">
            Jewelry · Abidjan
          </div>
          <p className="text-[13.5px] leading-[1.8] text-muted-2 mt-[22px] max-w-[280px] font-light">
            Bijoux en acier inoxydable et plaqué or, sélectionnés avec soin
            en Côte d&apos;Ivoire depuis 2018.
          </p>
        </div>
        <div>
          <div className="text-[11px] tracking-[2px] uppercase text-on-dark mb-5">
            Boutique
          </div>
          <div className="flex flex-col gap-3 text-[13.5px] font-light">
            {BOUTIQUE_LINKS.map((label) => (
              <a key={label} href="#collections">
                {label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="text-[11px] tracking-[2px] uppercase text-on-dark mb-5">
            Aide
          </div>
          <div className="flex flex-col gap-3 text-[13.5px] font-light">
            {AIDE_LINKS.map((label) => (
              <a key={label} href="#">
                {label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="text-[11px] tracking-[2px] uppercase text-on-dark mb-5">
            Boutique
          </div>
          <div className="text-[13.5px] leading-[1.9] font-light">
            Cocody, Riviera Golf
            <br />
            Abidjan, Côte d&apos;Ivoire
            <br />
            +225 07 00 00 00 00
            <br />
            bonjour@andrea.ci
          </div>
        </div>
      </Reveal>
      <div className="border-t border-on-dark/10 py-6 px-8 text-center text-[11.5px] tracking-[1px] text-on-dark-muted max-[560px]:px-5">
        © 2026 Andréa Jewelry · Abidjan, Côte d&apos;Ivoire · Tous droits
        réservés
      </div>
    </footer>
  );
}
