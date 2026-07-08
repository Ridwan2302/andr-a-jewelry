"use client";

import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";

export default function Newsletter() {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubscribed(true);
    e.currentTarget.reset();
  };

  return (
    <section className="bg-cream-2">
      <Reveal className="max-w-[720px] mx-auto px-8 py-[90px] text-center max-[560px]:px-5">
        <h2 className="font-serif font-medium text-[clamp(30px,3.4vw,44px)]">
          Rejoignez le cercle Andréa
        </h2>
        <p className="text-[15.5px] leading-[1.7] text-muted font-light mt-[18px] mb-[34px] mx-auto max-w-[480px]">
          Accédez en avant-première aux nouvelles collections et recevez -10%
          sur votre première commande.
        </p>
        {subscribed ? (
          <p className="text-[15px] tracking-[0.5px] text-ink">
            Merci ! Vous êtes inscrite au cercle Andréa.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex gap-3 max-w-[460px] mx-auto flex-wrap justify-center"
          >
            <input
              type="email"
              required
              placeholder="Votre adresse e-mail"
              className="flex-1 min-w-[220px] px-5 py-4 border border-ink/30 bg-transparent font-sans text-sm"
            />
            <button
              type="submit"
              className="bg-ink text-cream px-[34px] py-4 text-xs tracking-[2px] uppercase border-none cursor-pointer"
            >
              S&apos;inscrire
            </button>
          </form>
        )}
      </Reveal>
    </section>
  );
}
