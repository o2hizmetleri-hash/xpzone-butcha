export type MenuItem = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  includes: string[];
  drinkOptions?: string[];
  image: string;
  badge?: string;
  /** Adult menu kategorileri için (Imza, Combo, …) */
  category?: string;
  /** Optional path to an animated asset (gif/webm) provided by the user. */
  animation?: string;
};

export const groupDiscount = {
  title: "Grup İndirimi",
  body: "Kişi sayısı arttıkça toplam siparişinize %15'e varan indirim uygulanır.",
  maxPercent: 15,
};

export const kidsMenu: MenuItem[] = [
  {
    id: "baby-hamburger",
    name: "Baby Hamburger Menü",
    tagline: "Minik şefler için minik burger",
    description:
      "Yumuşacık ekmek arasında dana köfte, eriyen cheddar ve özel sosla; çocuklar için tam porsiyon mutluluk.",
    includes: ["2 adet mini burger", "Çıtır patates", "İçecek dahil"],
    drinkOptions: ["Fanta", "Cola", "Ayran"],
    image: "/images/miniburger.jpg",
    badge: "EN POPÜLER",
  },
  {
    id: "ekonomik-tavuklu",
    name: "Ekonomik Tavuklu Menü",
    tagline: "Çıtır tavuk, patates ve içecek",
    description:
      "Çıtır çıtır tavuk lokmaları, altın sarısı patates ve buz gibi içecekle çocukların favori menüsü.",
    includes: ["Çıtır tavuk lokmaları", "Çıtır patates", "İçecek dahil"],
    drinkOptions: ["Fanta", "Cola", "Ayran"],
    image: "/images/miniburger.jpg",
    badge: "EKONOMİK",
  },
];

export const adultMenu: MenuItem[] = [
  {
    id: "butcha-kofte",
    name: "Butcha Köfte Menü",
    tagline: "Mangal ateşinde, Butcha imzasıyla",
    description:
      "El yapımı dana köfte, közlenmiş sebzeler, ev yapımı sos ve yanında şefin önerisi garnitür eşliğinde.",
    includes: [
      "180g el yapımı köfte",
      "Közlenmiş domates ve biber",
      "Patates kızartması veya pilav",
      "Ev yapımı acılı sos",
      "Soğuk içecek",
    ],
    image: "/images/miniburger.jpg",
    badge: "ŞEFİN İMZASI",
    category: "İmza Menü",
  },
  {
    id: "butcha-kofte-burger",
    name: "Butcha Köfte Burger",
    tagline: "Köfte ve burger bir arada",
    description:
      "El yapımı Butcha köfteyi taze brioche ekmek arasında, eriyen cheddar ve özel sosla buluşturduğumuz combo lezzet.",
    includes: [
      "El yapımı köfte burger",
      "Brioche ekmek",
      "Cheddar peyniri",
      "Patates kızartması",
      "Soğuk içecek",
    ],
    image: "/images/miniburger.jpg",
    badge: "COMBO",
    category: "Combo Menü",
  },
  {
    id: "butcha-kasap-kofte",
    name: "Butcha Kasap Köfte",
    tagline: "Kasap ustamızın özel reçetesi",
    description:
      "Seçilmiş etlerden elde sarılmış kasap köfte; mangal ateşinde, sade ama unutulmaz bir lezzetle.",
    includes: [
      "Kasap usulü el yapımı köfte",
      "Közlenmiş sebzeler",
      "Pilav veya patates",
      "Ev yapımı sos",
      "Soğuk içecek",
    ],
    image: "/images/miniburger.jpg",
    badge: "COMBO",
    category: "Combo Menü",
  },
];
