"use client";

import { useMemo, useState } from "react";
import {
  filterOptions,
  filterToCategory,
  products,
  type FilterOption,
} from "@/lib/data";
import { productOrderLink } from "@/lib/whatsapp";
import ProductCard from "./ProductCard";
import Reveal from "./Reveal";

export default function Boutique() {
  const [activeFilter, setActiveFilter] = useState<FilterOption>("Tout");
  const [pageUrl] = useState(() =>
    typeof window !== "undefined"
      ? window.location.origin + window.location.pathname
      : ""
  );

  const visibleProducts = useMemo(() => {
    if (activeFilter === "Tout") return products;
    const cat = filterToCategory[activeFilter];
    return products.filter((p) => p.cat === cat);
  }, [activeFilter]);

  return (
    <section
      id="boutique"
      className="section-anchor max-w-[1280px] mx-auto px-8 pt-20 pb-[100px] max-[560px]:px-5"
    >
      <Reveal className="flex items-end justify-between mb-12 flex-wrap gap-5">
        <div>
          <div className="text-xs tracking-[4px] uppercase text-gold mb-3.5">
            La boutique
          </div>
          <h2 className="font-serif font-medium text-[clamp(34px,4vw,52px)]">
            Les plus convoités
          </h2>
        </div>
        <div className="flex gap-2.5 flex-wrap">
          {filterOptions.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`border border-ink px-4 py-[9px] text-[11px] tracking-[1.5px] uppercase cursor-pointer transition-colors ${
                activeFilter === f
                  ? "bg-ink text-cream"
                  : "bg-transparent text-ink"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </Reveal>
      <div className="grid grid-cols-4 gap-x-6 gap-y-7 max-[960px]:grid-cols-2 max-[560px]:grid-cols-1">
        {visibleProducts.map((product, i) => (
          <Reveal key={product.id} delay={(i % 4) * 80}>
            <ProductCard
              product={product}
              orderHref={productOrderLink(product, pageUrl)}
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
