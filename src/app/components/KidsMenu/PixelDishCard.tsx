"use client";

import { motion } from "framer-motion";
import type { PixelMenuItem } from "@/data/pixel-menu";
import { PixelIcon } from "./PixelIcon";

type Props = {
  item: PixelMenuItem;
  index: number;
};

const cardColors = [
  "var(--color-pixel-sun)",
  "var(--color-pixel-mint)",
  "var(--color-pixel-peach)",
  "var(--color-pixel-sky)",
  "var(--color-pixel-grape)",
];

export function PixelDishCard({ item, index }: Props) {
  const bg = cardColors[index % cardColors.length];
  return (
    <motion.article
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2, delay: index * 0.06, ease: "linear" }}
      className="pixel-card relative p-4"
      style={{ background: bg }}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="pixel-bg flex h-24 w-24 shrink-0 items-center justify-center border-4 border-pixel-ink">
          <PixelIcon id={item.id} size={80} />
        </div>
        <div className="flex-1">
          <h3
            className="text-[12px] leading-tight text-pixel-ink sm:text-[13px]"
            style={{ fontFamily: "var(--font-pixel-display)" }}
          >
            {item.name.toUpperCase()}
          </h3>
          <p
            className="mt-2 text-xl leading-tight text-pixel-ink/85 sm:text-2xl"
            style={{ fontFamily: "var(--font-pixel-body)" }}
          >
            {item.description}
          </p>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between border-t-4 border-dashed border-pixel-ink pt-3">
        <span
          className="text-[10px] tracking-widest text-pixel-ink"
          style={{ fontFamily: "var(--font-pixel-display)" }}
        >
          ★ FIYAT
        </span>
        <span
          className="bg-pixel-ink px-3 py-1 text-[11px] text-pixel-sun"
          style={{ fontFamily: "var(--font-pixel-display)" }}
        >
          {item.price}
        </span>
      </div>
    </motion.article>
  );
}
