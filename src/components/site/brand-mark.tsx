"use client";

import Image from "next/image";

type Variant = "light" | "dark";

export function BrandMark({ variant = "dark" }: { variant?: Variant }) {
  const dividerColor = variant === "dark" ? "text-white/30" : "text-black/30";

  return (
    <div className="flex items-center gap-4 sm:gap-5 select-none">
      <Image
        src="/images/xpzone-logo.svg"
        alt="XPZone"
        width={120}
        height={120}
        className="h-14 w-14 sm:h-20 sm:w-20"
        priority
      />
      <span className={`text-2xl sm:text-3xl font-extralight ${dividerColor}`}>
        ×
      </span>
      <Image
        src="/images/butcha-logo.png"
        alt="Butcha Steakhouse"
        width={220}
        height={88}
        className="h-14 w-auto sm:h-20"
        priority
      />
    </div>
  );
}
