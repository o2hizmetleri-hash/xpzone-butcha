import Image from "next/image";

/**
 * Butcha PNG 2048×2048; kelime işareti merkezde, etrafta geniş şeffaf boşluk var.
 * object-contain tek başına grafiği küçük bırakır — scale ile slotu XPZone ile aynı
 * görsel ağırlığa getiriyoruz.
 */
const BUTCHA_VISUAL_SCALE = "scale-[2.28] sm:scale-[2.52]";

function LogoSlot({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-[5rem] w-[min(100%,19rem)] min-w-[13rem] overflow-visible sm:h-[6.25rem] sm:min-w-[17rem] sm:w-[min(100%,21rem)]">
      {children}
    </div>
  );
}

export function CollabStrip() {
  return (
    <div className="mx-auto w-full max-w-5xl px-3 sm:max-w-6xl sm:px-4">
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-x-2 gap-y-3 sm:gap-x-6">
        <div className="flex min-h-0 justify-end">
          <LogoBox>
            <LogoSlot>
              <Image
                src="/images/butcha-logo.png"
                alt="Butcha Steakhouse"
                fill
                sizes="(max-width:640px) 42vw, 320px"
                className={`object-contain object-center [transform-origin:center] ${BUTCHA_VISUAL_SCALE}`}
                priority
              />
            </LogoSlot>
          </LogoBox>
        </div>
        <div className="flex min-w-0 flex-col items-center justify-center gap-0.5 px-1 text-center">
          <span
            className="text-[10px] leading-none tracking-widest text-pixel-ink"
            style={{ fontFamily: "var(--font-pixel-display)" }}
          >
            ×
          </span>
          <span
            className="text-[8px] leading-tight tracking-widest text-pixel-ink/75 sm:text-[9px]"
            style={{ fontFamily: "var(--font-pixel-display)" }}
          >
            COLLAB
          </span>
        </div>
        <div className="flex min-h-0 justify-start">
          <LogoBox>
            <LogoSlot>
              <Image
                src="/images/xpzone-logo.svg"
                alt="XPZone"
                fill
                sizes="(max-width:640px) 42vw, 320px"
                className="object-contain object-center [transform-origin:center]"
                priority
              />
            </LogoSlot>
          </LogoBox>
        </div>
      </div>
    </div>
  );
}

function LogoBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-[6.25rem] w-full max-w-[min(100%,22rem)] items-center justify-center overflow-visible border-4 border-pixel-ink bg-pixel-ink px-1.5 py-2 shadow-[6px_6px_0_var(--color-pixel-ink)] sm:min-h-[7.75rem] sm:max-w-[23rem] sm:px-3 sm:py-3">
      {children}
    </div>
  );
}
