"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { WHATSAPP_NUMBER } from "@/lib/whatsapp";

const NAV_LINKS = [
  { label: "Collections", href: "#collections" },
  { label: "Boutique", href: "#boutique" },
  { label: "Notre Histoire", href: "#histoire" },
];

const DRAWER_LINKS = [
  { label: "Colliers", href: "#collections" },
  { label: "Boucles d'oreilles", href: "#collections" },
  { label: "Bracelets", href: "#collections" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="animate-fade-up sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-ink/10">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between gap-6 px-8 py-5 max-[560px]:px-5 max-[560px]:py-4">
          <div className="flex items-center gap-3.5 flex-1">
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Menu"
              className="bg-none border-none cursor-pointer flex flex-col gap-1.5 p-1.5"
            >
              <span className="block w-6 h-[1.5px] bg-ink" />
              <span className="block w-6 h-[1.5px] bg-ink" />
              <span className="block w-4 h-[1.5px] bg-ink" />
            </button>
            <nav className="hidden min-[961px]:flex gap-7 ml-5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[13px] tracking-[1.5px] uppercase font-light"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <a href="#top" className="text-center shrink-0">
            <Image
              src="/andrea-wordmark-full.png"
              alt="Andréa Jewelry"
              width={645}
              height={275}
              priority
              className="w-[170px] h-auto mx-auto"
            />
          </a>

          <div className="flex items-center gap-6 flex-1 justify-end">
            <a
              href="#boutique"
              className="max-[560px]:hidden text-[13px] tracking-[1.5px] uppercase font-light"
            >
              Rechercher
            </a>
            <a
              href="#"
              className="max-[560px]:hidden text-[13px] tracking-[1.5px] uppercase font-light"
            >
              Compte
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] tracking-[1.5px] uppercase font-light"
            >
              Panier
            </a>
          </div>
        </div>
      </header>

      {menuOpen && (
        <>
          <div
            onClick={closeMenu}
            className="fixed inset-0 bg-ink/40 z-[60]"
          />
          <aside className="fixed top-0 left-0 bottom-0 w-[340px] max-w-[85vw] bg-cream z-[70] p-10 flex flex-col animate-fade-up">
            <button
              onClick={closeMenu}
              aria-label="Fermer le menu"
              className="self-end bg-none border-none text-[26px] cursor-pointer text-ink font-serif"
            >
              ×
            </button>
            <div className="font-serif text-2xl tracking-[3px] mb-9">
              ANDRÉA
            </div>
            <nav className="flex flex-col gap-[22px]">
              {DRAWER_LINKS.map((link, i) => (
                <a
                  key={link.label + i}
                  href={link.href}
                  onClick={closeMenu}
                  className="font-serif text-[28px]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mt-auto text-xs tracking-[1px] text-muted leading-[2]">
              Cocody, Riviera Golf
              <br />
              Abidjan, Côte d&apos;Ivoire
              <br />
              +225 07 00 00 00 00
            </div>
          </aside>
        </>
      )}
    </>
  );
}
