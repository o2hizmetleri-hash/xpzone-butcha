"use client";

import type { PixelCategory } from "@/data/pixel-menu";

type Props = {
  categories: PixelCategory[];
  active: string;
  onChange: (id: string) => void;
};

const palette = [
  { bg: "var(--color-pixel-peach)", active: "var(--color-pixel-sun)" },
  { bg: "var(--color-pixel-mint)", active: "var(--color-pixel-sun)" },
  { bg: "var(--color-pixel-sky)", active: "var(--color-pixel-sun)" },
  { bg: "var(--color-pixel-grape)", active: "var(--color-pixel-sun)" },
];

export function PixelTabs({ categories, active, onChange }: Props) {
  return (
    <div className="mx-auto mt-10 flex w-fit max-w-full flex-wrap justify-center gap-3 px-2">
      {categories.map((cat, i) => {
        const isActive = cat.id === active;
        const colors = palette[i % palette.length];
        return (
          <button
            key={cat.id}
            type="button"
            onClick={() => onChange(cat.id)}
            className="pixel-btn cursor-pointer px-4 py-3 text-[9px] sm:text-[11px]"
            style={{
              background: isActive ? colors.active : colors.bg,
              color: "var(--color-pixel-ink)",
            }}
            aria-pressed={isActive}
          >
            {isActive ? "▶ " : ""}
            {cat.label.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
