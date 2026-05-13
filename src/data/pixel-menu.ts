export type PixelMenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  tag?: "Şef Önerisi" | "Yeni" | "İmza";
};

export type PixelCategory = {
  id: string;
  label: string;
  items: PixelMenuItem[];
};

export const pixelAdultMenu: PixelCategory[] = [
  {
    id: "menuler",
    label: "Menüler",
    items: [
      {
        id: "butcha_burger",
        name: "Butcha Burger Menü",
        description:
          "Butcha imza burger + patates kızartması + içecek dahil. İçecek seçenekleri: Ayran, Fanta, Kola.",
        price: "₺ 710",
        tag: "İmza",
      },
      {
        id: "butcha_kofte",
        name: "Butcha Köfte Menü",
        description:
          "Özel harç ızgara köfte + patates kızartması + içecek dahil. İçecek seçenekleri: Ayran, Fanta, Kola.",
        price: "₺ 720",
        tag: "İmza",
      },
    ],
  },
];

export const pixelKidsMenu: PixelCategory[] = [
  {
    id: "menuler",
    label: "Menüler",
    items: [
      {
        id: "burger_et",
        name: "Baby Hamburger Menü — Etli",
        description:
          "Mini dana hamburger + patates kızartması + içecek. İçecek seçenekleri: Ayran, Fanta, Kola.",
        price: "₺ 550",
        tag: "İmza",
      },
      {
        id: "burger_tavuk",
        name: "Baby Hamburger Menü — Tavuklu",
        description:
          "Mini tavuk hamburger + patates kızartması + içecek. İçecek seçenekleri: Ayran, Fanta, Kola.",
        price: "₺ 490",
      },
    ],
  },
  {
    id: "makarna",
    label: "Makarna",
    items: [
      {
        id: "spaghetti",
        name: "Spagetti",
        description: "Domates sos, parmesan rendesi.",
        price: "₺ 300",
      },
    ],
  },
  {
    id: "icecek",
    label: "İçecek",
    items: [
      {
        id: "kola",
        name: "Kola",
        description: "Soğuk servis, ekstra içecek.",
        price: "₺ 195",
      },
      {
        id: "limonata",
        name: "Limonata",
        description: "Taze sıkım, nane yapraklı.",
        price: "₺ 200",
      },
    ],
  },
];
