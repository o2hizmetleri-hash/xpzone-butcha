import { QRCodeSVG } from "qrcode.react";
import type { PixelCategory } from "@/data/pixel-menu";
import { PIXEL_PAGE_GRADIENT } from "@/lib/pixel-background";

type Accent = "adult" | "kids";

type Props = {
  title: string;
  subtitle: string;
  categories: PixelCategory[];
  accent: Accent;
};

const QR_URL = "https://butchash.qrlim.com/";

const ACCENT_BAND: Record<Accent, { strip: string; stripText: string; titleBg: string }> = {
  adult: { strip: "#1a1a1a", stripText: "#ffe08a", titleBg: "#a8e6cf" },
  kids: { strip: "#8b1e2c", stripText: "#ffe08a", titleBg: "#ffb7b2" },
};

/**
 * Tek bir A5 broşür paneli. Boyutu KESİN sabitlenmiş:
 * A4 yatay (297×210mm) - 12mm margin = 285×198mm; ikiye bölünce
 * her sütun ≈ 142.5×198mm. overflow: hidden ile içerik asla taşmaz.
 */
export function PrintMenuPage({ title, subtitle, categories, accent }: Props) {
  const band = ACCENT_BAND[accent];
  const gradient = PIXEL_PAGE_GRADIENT[accent];

  return (
    <article
      data-print-page
      className="relative flex flex-col overflow-hidden border-[3px] border-pixel-ink"
      style={{
        boxSizing: "border-box",
        background: gradient,
      }}
    >
      <PrintClouds variant={accent} />
      <PrintScene variant={accent} />

      <header
        className="relative z-10 flex shrink-0 items-center justify-between border-b-[3px] border-pixel-ink px-3 py-1.5"
        style={{
          background: band.strip,
          color: band.stripText,
          fontFamily: "var(--font-pixel-display)",
        }}
      >
        <span className="text-[9px] tracking-wider">★ XPZONE × BUTCHA</span>
        <span className="text-[9px] tracking-wider">EMAAR · TERAS</span>
      </header>

      <div
        className="relative z-10 shrink-0 border-b-[3px] border-pixel-ink px-3 py-2.5 text-center"
        style={{ background: band.titleBg }}
      >
        <p
          className="text-[9px] tracking-[0.3em] text-pixel-ink"
          style={{ fontFamily: "var(--font-pixel-display)" }}
        >
          {subtitle}
        </p>
        <h1
          className="mt-1 text-[20px] leading-none text-pixel-ink"
          style={{ fontFamily: "var(--font-pixel-display)" }}
        >
          {title}
        </h1>
      </div>

      {/* Kategori paneli: flex-1 min-h-0 overflow-hidden zorunlu */}
      <div
        className="relative z-10 mx-2.5 mt-2.5 flex min-h-0 flex-1 flex-col overflow-hidden border-[3px] border-pixel-ink bg-[rgba(250,247,242,0.94)] p-3 shadow-[3px_3px_0_var(--color-pixel-ink)]"
      >
        <div className="flex min-h-0 flex-1 flex-col gap-3 overflow-hidden">
          {categories.map((cat) => (
            <section key={cat.id} className="shrink-0">
              <h2
                className="mb-1.5 inline-block border-2 border-pixel-ink bg-pixel-sun px-1.5 py-0.5 text-[11px] uppercase tracking-wider text-pixel-ink"
                style={{ fontFamily: "var(--font-pixel-display)" }}
              >
                {cat.label}
              </h2>
              <ul className="space-y-1.5">
                {cat.items.map((item) => (
                  <li key={item.id} className="border-l-[3px] border-pixel-ink pl-2">
                    <div className="flex items-baseline justify-between gap-2">
                      <h3
                        className="text-[14px] leading-tight text-pixel-ink"
                        style={{ fontFamily: "var(--font-pixel-display)" }}
                      >
                        {item.name}
                      </h3>
                      {item.tag ? (
                        <span
                          className="shrink-0 border-2 border-pixel-ink bg-pixel-mint px-1 py-0 text-[7px] uppercase tracking-wider text-pixel-ink"
                          style={{ fontFamily: "var(--font-pixel-display)" }}
                        >
                          {item.tag}
                        </span>
                      ) : null}
                    </div>
                    <p
                      className="mt-0.5 text-[11px] leading-tight text-pixel-ink"
                      style={{ fontFamily: "var(--font-pixel-body)" }}
                    >
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="mt-2 flex shrink-0 items-center justify-center gap-2 border-t-2 border-dashed border-pixel-ink pt-2">
          <PixelStar />
          <span
            className="text-[9px] tracking-[0.25em] text-pixel-ink"
            style={{ fontFamily: "var(--font-pixel-display)" }}
          >
            {accent === "adult" ? "AFİYET OLSUN" : "AFİYET OLSUN MİNİ ŞEF"}
          </span>
          <PixelStar />
        </div>
      </div>

      <footer
        className="relative z-10 mx-2.5 my-2.5 grid shrink-0 grid-cols-[auto_1fr_auto] items-center gap-2 border-[3px] border-pixel-ink bg-pixel-sky p-2 shadow-[3px_3px_0_var(--color-pixel-ink)]"
      >
        <div className="border-2 border-pixel-ink bg-white p-0.5">
          <QRCodeSVG
            value={QR_URL}
            size={50}
            level="H"
            bgColor="#ffffff"
            fgColor="#1a1a1a"
            marginSize={0}
            style={{ display: "block", imageRendering: "pixelated" }}
          />
        </div>
        <div className="flex flex-col leading-tight">
          <p
            className="text-[9px] tracking-wider text-pixel-ink"
            style={{ fontFamily: "var(--font-pixel-display)" }}
          >
            ★ ONLINE MENÜ
          </p>
          <p
            className="text-[11px] text-pixel-ink"
            style={{ fontFamily: "var(--font-pixel-body)" }}
          >
            butchash.qrlim.com
          </p>
          <p
            className="mt-0.5 text-[9px] tracking-wider text-pixel-ink"
            style={{ fontFamily: "var(--font-pixel-display)" }}
          >
            5 NO. GİRİŞ SOLU · TERAS KAT
          </p>
        </div>
        <PixelBurgerIcon variant={accent} />
      </footer>
    </article>
  );
}

/* ---------- Dekoratif piksel komponentleri ---------- */

function PrintClouds({ variant }: { variant: Accent }) {
  const color = variant === "kids" ? "#ffffff" : "#fff5e0";
  const shade = variant === "kids" ? "#cfe6f7" : "#e8c9a0";
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
      <Cloud className="absolute left-[6%] top-[14%]" color={color} shade={shade} size={0.85} />
      <Cloud className="absolute right-[8%] top-[20%]" color={color} shade={shade} size={1.1} />
      <Cloud className="absolute left-[30%] top-[40%]" color={color} shade={shade} size={0.75} />
      <Cloud className="absolute right-[6%] top-[48%]" color={color} shade={shade} size={0.95} />
      <Cloud className="absolute left-[10%] bottom-[30%]" color={color} shade={shade} size={1} />
      <Cloud className="absolute right-[20%] bottom-[24%]" color={color} shade={shade} size={0.8} />
    </div>
  );
}

function Cloud({
  className = "",
  color,
  shade,
  size = 1,
}: {
  className?: string;
  color: string;
  shade: string;
  size?: number;
}) {
  const w = Math.round(64 * size);
  return (
    <svg
      width={w}
      height={Math.round((w * 32) / 64)}
      viewBox="0 0 16 8"
      shapeRendering="crispEdges"
      className={className}
      style={{ opacity: 0.85 }}
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

function PrintScene({ variant }: { variant: Accent }) {
  const grass = variant === "kids" ? "#7bc96f" : "#5fa85a";
  const grassDark = variant === "kids" ? "#4f9a45" : "#3b7a37";
  const sun = "#ffe08a";
  const trunk = "#5c4a2e";
  const leaf = variant === "kids" ? "#2e8b57" : "#1f6f43";

  return (
    <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 z-0">
      <svg
        viewBox="0 0 300 50"
        preserveAspectRatio="none"
        shapeRendering="crispEdges"
        className="block h-[44px] w-full"
      >
        <rect x="0" y="34" width="300" height="16" fill={grass} />
        {[20, 80, 140, 200, 260].map((x) => (
          <g key={`hill-${x}`}>
            <rect x={x} y="30" width="20" height="4" fill={grass} />
            <rect x={x + 4} y="26" width="12" height="4" fill={grass} />
          </g>
        ))}
        {Array.from({ length: 18 }).map((_, i) => (
          <rect key={`gd-${i}`} x={i * 16 + 4} y={42} width="4" height="2" fill={grassDark} />
        ))}
        <g>
          <rect x="270" y="2" width="14" height="14" fill={sun} />
          <rect x="266" y="6" width="22" height="6" fill={sun} />
        </g>
        <g>
          <rect x="36" y="22" width="4" height="12" fill={trunk} />
          <rect x="30" y="12" width="16" height="12" fill={leaf} />
          <rect x="32" y="8" width="12" height="4" fill={leaf} />
        </g>
        <g>
          <rect x="180" y="24" width="4" height="10" fill={trunk} />
          <rect x="174" y="16" width="16" height="10" fill={leaf} />
        </g>
        {[60, 110, 220].map((x) => (
          <g key={`flower-${x}`}>
            <rect x={x} y="32" width="2" height="2" fill="#ffb7b2" />
            <rect x={x + 2} y="30" width="2" height="2" fill={sun} />
          </g>
        ))}
      </svg>
    </div>
  );
}

function PixelStar() {
  return (
    <svg width="12" height="12" viewBox="0 0 7 7" shapeRendering="crispEdges">
      <rect x="3" y="0" width="1" height="7" fill="#1a1a1a" />
      <rect x="0" y="3" width="7" height="1" fill="#1a1a1a" />
      <rect x="1" y="1" width="1" height="1" fill="#1a1a1a" />
      <rect x="5" y="1" width="1" height="1" fill="#1a1a1a" />
      <rect x="1" y="5" width="1" height="1" fill="#1a1a1a" />
      <rect x="5" y="5" width="1" height="1" fill="#1a1a1a" />
    </svg>
  );
}

function PixelBurgerIcon({ variant }: { variant: Accent }) {
  const bun = variant === "adult" ? "#d8a05a" : "#f0c068";
  return (
    <svg width="38" height="30" viewBox="0 0 11 9" shapeRendering="crispEdges" aria-hidden>
      <rect x="1" y="0" width="9" height="1" fill={bun} />
      <rect x="0" y="1" width="11" height="2" fill={bun} />
      <rect x="2" y="0" width="1" height="1" fill="#fff" opacity="0.6" />
      <rect x="5" y="0" width="1" height="1" fill="#fff" opacity="0.6" />
      <rect x="0" y="3" width="11" height="1" fill="#5fa85a" />
      <rect x="0" y="4" width="11" height="2" fill="#6b3a1a" />
      <rect x="0" y="6" width="11" height="1" fill="#ffd97a" />
      <rect x="0" y="7" width="11" height="2" fill={bun} />
    </svg>
  );
}
