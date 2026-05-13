"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { pixelAdultMenu, pixelKidsMenu } from "@/data/pixel-menu";
import { groupDiscount } from "@/lib/menu-data";
import { PIXEL_PAGE_GRADIENT } from "@/lib/pixel-background";
import { Hero } from "./Hero";
import { PanelSwitch } from "./PanelSwitch";
import { PixelWorld } from "./KidsMenu/PixelWorld";

type Mode = "adult" | "kids";

const wipeIn = [
  "inset(0 100% 0 0)",
  "inset(0 80% 0 0)",
  "inset(0 60% 0 0)",
  "inset(0 40% 0 0)",
  "inset(0 20% 0 0)",
  "inset(0 0% 0 0)",
];

export function AppShell() {
  const [mode, setMode] = useState<Mode>("adult");

  return (
    <div
      data-pixel-shell
      className="relative isolate flex min-h-dvh flex-1 flex-col text-pixel-ink"
    >
      {/* Tam yükseklik: üst boşluk / güvenli alan dahil tek gradyan */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 min-h-dvh w-full"
        style={{ background: PIXEL_PAGE_GRADIENT[mode] }}
      />
      <PanelSwitch mode={mode} onChange={setMode} />

      <AnimatePresence mode="wait">
        <motion.div
          key={mode}
          initial={{ clipPath: wipeIn[0] }}
          animate={{ clipPath: wipeIn }}
          transition={{
            duration: 0.5,
            ease: "linear",
            times: [0, 0.2, 0.4, 0.6, 0.8, 1],
          }}
          className="flex flex-1 flex-col"
        >
          <Hero mode={mode} />
          {mode === "adult" ? (
            <PixelWorld
              categories={pixelAdultMenu}
              background="adult"
              footerText="★ AFİYET OLSUN ★"
            />
          ) : (
            <PixelWorld
              categories={pixelKidsMenu}
              background="kids"
              footerText="★ AFİYET OLSUN MİNİ ŞEF ★"
            />
          )}
          <PixelFooter />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function PixelFooter() {
  return (
    <footer className="px-4 pb-12 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="border-4 border-pixel-ink bg-pixel-sky p-6 shadow-[6px_6px_0_var(--color-pixel-ink)] sm:p-7">
          <p
            className="text-center text-lg leading-snug text-pixel-ink sm:text-xl"
            style={{ fontFamily: "var(--font-pixel-display)" }}
          >
            ★ {groupDiscount.title.toUpperCase()} ★
          </p>
          <p
            className="mx-auto mt-4 max-w-3xl text-center text-xl leading-snug text-pixel-ink sm:text-2xl"
            style={{ fontFamily: "var(--font-pixel-body)" }}
          >
            {groupDiscount.body}
          </p>
        </div>
      </div>
    </footer>
  );
}
