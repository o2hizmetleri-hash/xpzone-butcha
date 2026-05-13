"use client";

import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { PixelCategory } from "@/data/pixel-menu";
import { PixelTabs } from "./PixelTabs";
import { PixelDishCard } from "./PixelDishCard";

type Props = {
  categories: PixelCategory[];
  topSlot?: ReactNode;
  footerText?: string;
  background?: "kids" | "adult";
};

export function PixelWorld({
  categories,
  topSlot,
  footerText,
  background = "kids",
}: Props) {
  const [active, setActive] = useState(categories[0].id);
  const current = categories.find((c) => c.id === active) ?? categories[0];

  return (
    <section className="relative px-4 pb-32 sm:px-8">
      <PixelClouds variant={background} />

      <div className="mx-auto max-w-6xl">
        {topSlot}

        <PixelTabs
          categories={categories}
          active={active}
          onChange={setActive}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: "linear" }}
            className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {current.items.map((item, i) => (
              <PixelDishCard key={item.id} item={item} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {footerText && (
          <div className="mt-16 flex justify-center">
            <div className="pixel-bounce border-4 border-pixel-ink bg-pixel-mint px-4 py-3 shadow-[6px_6px_0_var(--color-pixel-ink)]">
              <span
                className="text-[10px] tracking-widest text-pixel-ink"
                style={{ fontFamily: "var(--font-pixel-display)" }}
              >
                {footerText}
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function PixelClouds({ variant }: { variant: "kids" | "adult" }) {
  const color = variant === "kids" ? "#ffffff" : "#fff5e0";
  const shade = variant === "kids" ? "#cfe6f7" : "#e8c9a0";
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <Cloud className="absolute top-24 left-8" color={color} shade={shade} />
      <Cloud className="absolute top-40 right-16" color={color} shade={shade} delay />
      <Cloud className="absolute top-72 left-1/3" color={color} shade={shade} />
      <Cloud className="absolute bottom-40 right-1/4" color={color} shade={shade} delay />
    </div>
  );
}

function Cloud({
  className = "",
  color,
  shade,
  delay,
}: {
  className?: string;
  color: string;
  shade: string;
  delay?: boolean;
}) {
  return (
    <svg
      width="64"
      height="32"
      viewBox="0 0 16 8"
      shapeRendering="crispEdges"
      className={`${className} ${delay ? "pixel-bounce" : ""}`}
      style={{ animationDelay: delay ? "0.4s" : undefined, opacity: 0.85 }}
    >
      <rect x="3" y="2" width="10" height="4" fill={color} />
      <rect x="2" y="3" width="12" height="2" fill={color} />
      <rect x="4" y="1" width="3" height="1" fill={color} />
      <rect x="9" y="1" width="4" height="1" fill={color} />
      <rect x="3" y="6" width="1" height="1" fill={shade} />
      <rect x="12" y="6" width="1" height="1" fill={shade} />
    </svg>
  );
}
