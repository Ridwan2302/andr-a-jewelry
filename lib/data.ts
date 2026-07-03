export type Category = "Collier" | "Bague" | "Boucles d'oreilles" | "Bracelet";

export type Product = {
  id: string;
  cat: Category;
  name: string;
  price: string;
  tag?: string;
  img: string;
};

export type Collection = {
  id: string;
  name: string;
  count: number;
  img: string;
};

export type Review = {
  quote: string;
  name: string;
};

const unsplash = (id: string, w: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const collections: Collection[] = [
  {
    id: "col-colliers",
    name: "Colliers",
    count: 24,
    img: unsplash("photo-1599643478518-a784e5dc4c8f", 800),
  },
  {
    id: "col-bagues",
    name: "Bagues",
    count: 31,
    img: unsplash("photo-1605100804763-247f67b3557e", 800),
  },
  {
    id: "col-boucles",
    name: "Boucles d'oreilles",
    count: 18,
    img: unsplash("photo-1535632066927-ab7c9ab60908", 800),
  },
];

export const products: Product[] = [
  {
    id: "p1",
    cat: "Collier",
    name: "Collier Lagune",
    price: "285 000",
    tag: "Nouveau",
    img: unsplash("photo-1599643478518-a784e5dc4c8f", 700),
  },
  {
    id: "p2",
    cat: "Bague",
    name: "Bague Éclat",
    price: "420 000",
    img: unsplash("photo-1605100804763-247f67b3557e", 700),
  },
  {
    id: "p3",
    cat: "Boucles d'oreilles",
    name: "Créoles Soleil",
    price: "165 000",
    img: unsplash("photo-1535632066927-ab7c9ab60908", 700),
  },
  {
    id: "p4",
    cat: "Bracelet",
    name: "Jonc Ivoire",
    price: "198 000",
    tag: "Best-seller",
    img: unsplash("photo-1611652022419-a9419f74343d", 700),
  },
  {
    id: "p5",
    cat: "Collier",
    name: "Pendentif Étoile",
    price: "145 000",
    img: unsplash("photo-1611085583191-a3b181a88401", 700),
  },
  {
    id: "p6",
    cat: "Bague",
    name: "Alliance Éternité",
    price: "375 000",
    img: unsplash("photo-1603561591411-07134e71a2a9", 700),
  },
  {
    id: "p7",
    cat: "Boucles d'oreilles",
    name: "Puces Perle",
    price: "92 000",
    img: unsplash("photo-1596944924616-7b38e7cfac36", 700),
  },
  {
    id: "p8",
    cat: "Bracelet",
    name: "Chaîne Cocody",
    price: "230 000",
    tag: "Nouveau",
    img: unsplash("photo-1611591437281-460bfbe1220a", 700),
  },
];

export const filterOptions = [
  "Tout",
  "Colliers",
  "Bagues",
  "Boucles d'oreilles",
  "Bracelets",
] as const;

export type FilterOption = (typeof filterOptions)[number];

export const filterToCategory: Record<Exclude<FilterOption, "Tout">, Category> = {
  Colliers: "Collier",
  Bagues: "Bague",
  "Boucles d'oreilles": "Boucles d'oreilles",
  Bracelets: "Bracelet",
};

export const reviews: Review[] = [
  {
    quote: "Un travail d'orfèvre. Mon collier attire tous les regards.",
    name: "Aïcha K., Cocody",
  },
  {
    quote: "Élégance et qualité irréprochables. Je recommande les yeux fermés.",
    name: "Fatou D., Plateau",
  },
  {
    quote: "La bague de mes rêves, livrée en 48h à Abidjan.",
    name: "Mariam T., Marcory",
  },
];
