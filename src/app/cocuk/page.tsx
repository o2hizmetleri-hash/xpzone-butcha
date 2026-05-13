"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Check, Star, GlassWater } from "lucide-react";
import { BrandMark } from "@/components/site/brand-mark";
import { DiscountBanner } from "@/components/site/discount-banner";
import { kidsMenu, type MenuItem } from "@/lib/menu-data";

export default function KidsMenuPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-amber-300 via-orange-400 to-rose-500">
      {/* Soft blobs only */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full bg-yellow-200/40 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-32 -right-24 h-[480px] w-[480px] rounded-full bg-pink-300/40 blur-3xl"
        />
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 py-8 sm:px-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-white/85 px-4 py-2 text-xs font-bold uppercase tracking-widest text-rose-600 shadow backdrop-blur transition hover:bg-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Geri
        </Link>
        <BrandMark variant="light" />
      </header>

      {/* Title */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pt-6 pb-12 text-center">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/90">
          Çocuk Menüsü
        </span>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-4 text-balance text-5xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-7xl"
        >
          Mini Şefler, <br /> Buyrun Sofraya
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-5 max-w-xl text-sm uppercase tracking-[0.25em] text-white/80 sm:text-base"
        >
          Eğlenceli, doyurucu ve renkli menüler
        </motion.p>
      </section>

      {/* Menu cards */}
      <section className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 sm:grid-cols-2">
        {kidsMenu.map((item, i) => (
          <KidsMenuCard key={item.id} item={item} index={i} />
        ))}
      </section>

      {/* Discount banner */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-14">
        <DiscountBanner variant="light" />
      </section>

      <footer className="relative z-10 px-6 pb-10 text-center text-xs uppercase tracking-[0.3em] text-white/60">
        XPZone × Butcha Steakhouse · Çocuk Menüsü
      </footer>
    </main>
  );
}

function KidsMenuCard({ item, index }: { item: MenuItem; index: number }) {
  return (
    <motion.article
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.1 * index, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-[28px] border border-white/60 bg-white/95 p-6 shadow-[0_20px_50px_-15px_rgba(244,63,94,0.35)] backdrop-blur sm:p-7"
    >
      {item.badge && (
        <span className="absolute top-5 right-5 z-20 inline-flex items-center gap-1 rounded-full bg-rose-600 px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-white shadow">
          <Star className="h-3 w-3 fill-yellow-300 stroke-yellow-300" />
          {item.badge}
        </span>
      )}

      {/* Image */}
      <div className="relative mb-6 aspect-[5/3] overflow-hidden rounded-2xl bg-orange-100">
        {item.animation ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.animation}
            alt={item.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}
      </div>

      {/* Text */}
      <h3 className="text-2xl font-black uppercase leading-tight tracking-tight text-rose-700 sm:text-3xl">
        {item.name}
      </h3>
      <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-orange-600">
        {item.tagline}
      </p>
      <p className="mt-4 text-sm leading-relaxed text-stone-700">
        {item.description}
      </p>

      <ul className="mt-5 space-y-2 text-sm text-stone-800">
        {item.includes.map((line, i) => (
          <li key={i} className="flex items-center gap-2.5">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-rose-600 text-white">
              <Check className="h-3 w-3" strokeWidth={3} />
            </span>
            {line}
          </li>
        ))}
      </ul>

      {item.drinkOptions && item.drinkOptions.length > 0 && (
        <div className="mt-5 rounded-2xl border border-rose-200 bg-rose-50 p-4">
          <div className="flex items-center gap-2 text-rose-700">
            <GlassWater className="h-3.5 w-3.5" />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em]">
              İçecek Seçenekleri
            </span>
          </div>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {item.drinkOptions.map((drink) => (
              <span
                key={drink}
                className="rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider text-rose-700 shadow-sm"
              >
                {drink}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="mt-7 flex items-end justify-between border-t border-stone-200 pt-5">
        <div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-stone-500">
            Fiyat
          </span>
          <div className="mt-1 text-3xl font-black text-rose-700">
            {item.price !== null ? (
              <>
                {item.price}
                <span className="ml-1 text-xl font-bold">{item.currency}</span>
              </>
            ) : (
              <span className="text-xl font-bold text-stone-400">Yakında</span>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
