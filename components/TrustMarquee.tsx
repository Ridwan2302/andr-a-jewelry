const ITEMS = [
  "Acier inoxydable & plaqué or",
  "Ne noircit pas · hypoallergénique",
  "Garantie 1 an",
  "Livraison en Côte d'Ivoire",
];

export default function TrustMarquee() {
  return (
    <div className="border-t border-b border-ink/10 py-[26px] px-8 flex justify-center gap-[clamp(28px,6vw,90px)] flex-wrap text-center">
      {ITEMS.map((item) => (
        <div
          key={item}
          className="text-xs tracking-[2px] uppercase text-muted"
        >
          {item}
        </div>
      ))}
    </div>
  );
}
