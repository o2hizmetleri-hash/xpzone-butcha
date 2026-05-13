"use client";

import { motion } from "framer-motion";
import { Users, Percent } from "lucide-react";
import { groupDiscount } from "@/lib/menu-data";

type Variant = "light" | "dark";

export function DiscountBanner({ variant = "dark" }: { variant?: Variant }) {
  const isLight = variant === "light";

  return (
    <motion.aside
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className={
        isLight
          ? "relative overflow-hidden rounded-3xl border-2 border-white/70 bg-white/95 p-6 shadow-[0_18px_45px_-15px_rgba(244,63,94,0.3)] sm:p-8"
          : "relative overflow-hidden rounded-3xl border border-amber-500/25 bg-gradient-to-br from-neutral-900/80 to-neutral-950/80 p-6 backdrop-blur-sm sm:p-8"
      }
    >
      <div
        aria-hidden
        className={
          isLight
            ? "absolute -top-16 -right-16 h-48 w-48 rounded-full bg-rose-300/30 blur-3xl"
            : "absolute -top-16 -right-16 h-48 w-48 rounded-full bg-amber-500/15 blur-3xl"
        }
      />

      <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div className="flex items-start gap-4">
          <div
            className={
              isLight
                ? "inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-rose-600 text-white"
                : "inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-300"
            }
          >
            <Users className="h-5 w-5" />
          </div>
          <div>
            <span
              className={
                isLight
                  ? "text-[10px] font-bold uppercase tracking-[0.3em] text-rose-500"
                  : "text-[10px] font-medium uppercase tracking-[0.3em] text-amber-300"
              }
            >
              {groupDiscount.title}
            </span>
            <h3
              className={
                isLight
                  ? "mt-1 text-xl font-black uppercase tracking-tight text-rose-700 sm:text-2xl"
                  : "mt-1 text-xl font-extralight uppercase tracking-tight text-white sm:text-2xl"
              }
            >
              Kalabalık geldikçe <br className="hidden sm:block" />
              <span
                className={
                  isLight ? "font-black" : "font-bold text-amber-400"
                }
              >
                indirim büyür.
              </span>
            </h3>
            <p
              className={
                isLight
                  ? "mt-2 max-w-md text-sm leading-relaxed text-stone-700"
                  : "mt-2 max-w-md text-sm leading-relaxed text-white/60"
              }
            >
              {groupDiscount.body}
            </p>
          </div>
        </div>

        <div
          className={
            isLight
              ? "flex shrink-0 items-center gap-3 rounded-2xl bg-rose-600 px-5 py-4 text-white shadow"
              : "flex shrink-0 items-center gap-3 rounded-2xl border border-amber-500/40 bg-black/40 px-5 py-4 text-amber-300 backdrop-blur"
          }
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-80">
            Maks.
          </span>
          <div className="flex items-baseline gap-0.5">
            <span className="text-4xl font-black tabular-nums sm:text-5xl">
              {groupDiscount.maxPercent}
            </span>
            <Percent className="h-5 w-5 stroke-[3]" />
          </div>
        </div>
      </div>
    </motion.aside>
  );
}
