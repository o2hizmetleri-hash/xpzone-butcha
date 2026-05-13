"use client";

import { motion } from "framer-motion";
import { PixelAvatar } from "./KidsMenu/PixelAvatar";
import { CollabStrip } from "./CollabStrip";

type Props = {
  mode: "adult" | "kids";
};

export function Hero({ mode }: Props) {
  if (mode === "kids") {
    return (
      <section className="relative px-4 pt-1 pb-10 sm:px-8">
        <CollabStrip />
        <div className="mx-auto mt-8 max-w-5xl space-y-5 text-center sm:mt-10">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "linear" }}
            className="inline-block border-4 border-pixel-ink bg-pixel-sun px-4 py-2 shadow-[6px_6px_0_var(--color-pixel-ink)]"
            style={{ fontFamily: "var(--font-pixel-display)" }}
          >
            <span className="text-[10px] tracking-widest text-pixel-ink">
              ★ MINI QUEST ★
            </span>
          </motion.div>
          <h1
            className="text-3xl leading-tight text-pixel-ink sm:text-4xl md:text-5xl"
            style={{ fontFamily: "var(--font-pixel-display)" }}
          >
            ROOKIE <span className="text-bordeaux">LEVEL</span>
          </h1>
          <p
            className="mx-auto max-w-xl text-2xl text-pixel-ink/80 sm:text-3xl"
            style={{ fontFamily: "var(--font-pixel-body)" }}
          >
            Mini şefler için 8-bit dünya. Lezzetli görevler ve renkli ödüller seni
            bekliyor!
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative px-4 pt-1 pb-10 sm:px-8">
      <CollabStrip />
      <div className="mx-auto mt-8 flex max-w-5xl flex-col items-center gap-6 text-center sm:mt-10">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "linear" }}
          className="inline-block border-4 border-pixel-ink bg-pixel-peach px-4 py-2 shadow-[6px_6px_0_var(--color-pixel-ink)]"
          style={{ fontFamily: "var(--font-pixel-display)" }}
        >
          <span className="text-[10px] tracking-widest text-pixel-ink">
            ★ MAIN QUEST ★
          </span>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          <AvatarFrame kind="man" />
          <h1
            className="text-3xl leading-tight text-pixel-ink sm:text-4xl md:text-5xl"
            style={{ fontFamily: "var(--font-pixel-display)" }}
          >
            BOSS
            <br />
            <span className="text-bordeaux">LEVEL</span>
          </h1>
          <AvatarFrame kind="woman" />
        </div>

        <p
          className="mx-auto max-w-xl text-2xl text-pixel-ink/85 sm:text-3xl"
          style={{ fontFamily: "var(--font-pixel-body)" }}
        >
          Yetişkin ve gençler için imza menüler. Patates kızartması ve içecek dahil.
        </p>
      </div>
    </section>
  );
}

function AvatarFrame({ kind }: { kind: "man" | "woman" }) {
  return (
    <div className="pixel-bg flex h-28 w-28 items-center justify-center border-4 border-pixel-ink shadow-[6px_6px_0_var(--color-pixel-ink)] sm:h-32 sm:w-32">
      <PixelAvatar kind={kind} size={104} />
    </div>
  );
}
