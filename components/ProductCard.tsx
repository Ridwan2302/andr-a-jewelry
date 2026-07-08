import Image from "next/image";
import type { Product } from "@/lib/data";

export default function ProductCard({
  product,
  orderHref,
}: {
  product: Product;
  orderHref: string;
}) {
  return (
    <div id={product.id} className="flex flex-col scroll-mt-20">
      <a
        href={orderHref}
        target="_blank"
        rel="noopener noreferrer"
        suppressHydrationWarning
        className="relative block bg-card rounded-2xl overflow-hidden"
      >
        <div className="relative w-full h-[300px]">
          <Image
            src={product.img}
            alt={product.name}
            fill
            sizes="(max-width: 560px) 100vw, (max-width: 960px) 50vw, 25vw"
            className="object-cover"
          />
        </div>
        {product.tag && (
          <span className="absolute top-3 left-3 bg-cream text-ink text-[10px] tracking-[1.5px] uppercase px-[11px] py-1.5 rounded-full">
            {product.tag}
          </span>
        )}
      </a>
      <div className="pt-[18px] px-0.5 flex flex-col gap-[5px]">
        <div className="text-[11px] tracking-[1.5px] uppercase text-muted-2">
          {product.cat} · {product.material}
        </div>
        <a
          href={orderHref}
          target="_blank"
          rel="noopener noreferrer"
          suppressHydrationWarning
          className="font-serif text-[22px]"
        >
          {product.name}
        </a>
        <div className="flex items-center justify-between mt-1.5">
          <span className="text-[15px] font-normal">{product.price} FCFA</span>
          <a
            href={orderHref}
            target="_blank"
            rel="noopener noreferrer"
            suppressHydrationWarning
            className="border border-ink px-4 py-2 text-[10.5px] tracking-[1.5px] uppercase inline-flex items-center gap-1.5 hover:bg-ink hover:text-cream transition-colors rounded-full"
          >
            Commander
          </a>
        </div>
      </div>
    </div>
  );
}
