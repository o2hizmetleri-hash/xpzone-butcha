"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronRight, Flame } from "lucide-react";
import { BrandMark } from "@/components/site/brand-mark";
import { DiscountBanner } from "@/components/site/discount-banner";
import { adultMenu, type MenuItem } from "@/lib/menu-data";
import { useMemo } from "react";

export default function AdultMenuPage() {
  // Group items by category preserving original order
  const grouped = useMemo(() => {
    const order: string[] = [];
    const map = new Map<string, MenuItem[]>();
    for (const item of adultMenu) {
      const key = item.category ?? "Diğer";
      if (!map.has(key)) {
        map.set(key, []);
        order.push(key);
      }
      map.get(key)!.push(item);
    }
    return order.map((key) => ({ category: key, items: map.get(key)! }));
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-neutral-950">
      {/* Ember background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-amber-500/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-700/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.05),transparent_55%)]" />
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 py-8 sm:px-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-widest text-white/80 backdrop-blur transition hover:bg-white/10"
        >
          <ArrowLeft className="h-4 w-4" />
          Geri
        </Link>
        <BrandMark />
      </header>

      {/* Title */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pt-6 pb-14 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.3em] text-amber-300">
          <Flame className="h-3.5 w-3.5" />
          Yetişkin Menüsü
        </span>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="mt-6 text-5xl font-extralight uppercase leading-[0.95] tracking-tight text-white sm:text-7xl"
        >
          Mangal Ateşinin <br />
          <span className="font-bold text-amber-400">İmzası</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-xl text-sm uppercase tracking-[0.3em] text-white/50 sm:text-base"
        >
          Şefin elinden, közün üzerinden masanıza
        </motion.p>
      </section>

      {/* Menu items grouped by category */}
      <section className="relative z-10 mx-auto max-w-5xl space-y-16 px-6 pb-12">
        {grouped.map((group, gi) => (
          <div key={group.category}>
            <CategoryHeading title={group.category} />
            <div className="mt-8 space-y-10">
              {group.items.map((item, i) => (
                <AdultMenuRow
                  key={item.id}
                  item={item}
                  index={i}
                  offset={gi}
                />
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Discount banner */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 pb-24">
        <DiscountBanner variant="dark" />
      </section>

      <footer className="relative z-10 px-6 pb-10 text-center text-xs uppercase tracking-[0.3em] text-white/30">
        XPZone × Butcha Steakhouse · Yetişkin Menüsü
      </footer>
    </main>
  );
}

function CategoryHeading({ title }: { title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-4"
    >
      <span className="h-px flex-1 bg-gradient-to-r from-amber-500/0 via-amber-500/50 to-amber-500/0" />
      <h2 className="text-xs font-medium uppercase tracking-[0.4em] text-amber-400 sm:text-sm">
        {title}
      </h2>
      <span className="h-px flex-1 bg-gradient-to-r from-amber-500/0 via-amber-500/50 to-amber-500/0" />
    </motion.div>
  );
}

function AdultMenuRow({
  item,
  index,
  offset,
}: {
  item: MenuItem;
  index: number;
  offset: number;
}) {
  const reverse = (index + offset) % 2 === 1;

  return (
    <motion.article
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: 0.05 * index }}
      className={`grid grid-cols-1 items-center gap-8 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900/80 to-neutral-950/80 p-6 backdrop-blur-sm sm:grid-cols-2 sm:p-8 ${
        reverse ? "sm:[&>div:first-child]:order-2" : ""
      }`}
    >
      {/* Image / animation */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
        <div className="relative h-full w-full transition-transform duration-700 hover:scale-[1.03]">
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
              className="object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        </div>

        {item.badge && (
          <span className="absolute top-4 left-4 rounded-full border border-amber-500/40 bg-black/60 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.3em] text-amber-300 backdrop-blur">
            {item.badge}
          </span>
        )}
      </div>

      {/* Body */}
      <div>
        <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-amber-400">
          Butcha İmza
        </span>
        <h3 className="mt-4 text-3xl font-extralight uppercase leading-tight tracking-tight text-white sm:text-4xl">
          {item.name}
        </h3>
        <p className="mt-2 text-xs font-medium uppercase tracking-[0.25em] text-amber-200/70">
          {item.tagline}
        </p>
        <p className="mt-5 text-sm leading-relaxed text-white/65">
          {item.description}
        </p>

        <div className="mt-6 space-y-2 border-l-2 border-amber-500/30 pl-4">
          {item.includes.map((line, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-sm text-white/70"
            >
              <ChevronRight className="h-3 w-3 text-amber-400" />
              {line}
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
