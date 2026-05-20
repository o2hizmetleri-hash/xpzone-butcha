import { QRCodeSVG } from "qrcode.react";
import type { PixelCategory } from "@/data/pixel-menu";

type Accent = "adult" | "kids";

type Props = {
  title: string;
  subtitle: string;
  categories: PixelCategory[];
  accent: Accent;
};

const QR_URL = "https://butchash.qrlim.com/";

/* ───────────────────────── RENK PALETİ ───────────────────────── */

const PALETTE = {
  kids: {
    // Gökyüzü mavisi + crayon sarısı + beyaz + canlı vurgular
    gradient:
      "linear-gradient(180deg, #7DD3FC 0%, #BAE6FD 40%, #FEF3C7 75%, #FFFFFF 100%)",
    strip: "#0369A1", // koyu deniz mavisi
    stripText: "#FEF9C3", // boya kalemi sarısı
    titleBg: "#FCD34D", // crayon yellow
    titleText: "#1E3A8A",
    panelBg: "rgba(255, 255, 255, 0.93)",
    accentBorder: "#0EA5E9",
    sun: "#FCD34D",
    sunRay: "#FBBF24",
    cloud: "#FFFFFF",
    cloudShade: "#BAE6FD",
    grass: "#86EFAC",
    grassDark: "#22C55E",
    leaf: "#16A34A",
    trunk: "#7C3F0F",
    pinkAccent: "#FB7185",
    purpleAccent: "#A78BFA",
    bunBg: "#F0C068",
    starColor: "#FBBF24",
    catTags: ["#FCD34D", "#86EFAC", "#FB7185", "#A78BFA", "#7DD3FC"],
  },
  adult: {
    // Sıcak ama canlı: turuncu + krem + mint vurgu
    gradient:
      "linear-gradient(180deg, #FFB7B2 0%, #FFD180 50%, #FFF3D6 100%)",
    strip: "#1A1612",
    stripText: "#FFE08A",
    titleBg: "#A8E6CF",
    titleText: "#1A1612",
    panelBg: "rgba(255, 251, 240, 0.94)",
    accentBorder: "#1A1612",
    sun: "#FFE08A",
    sunRay: "#F9A825",
    cloud: "#FFF5E0",
    cloudShade: "#E8C9A0",
    grass: "#7BC96F",
    grassDark: "#4F9A45",
    leaf: "#1F6F43",
    trunk: "#5C4A2E",
    pinkAccent: "#E8829D",
    purpleAccent: "#9F7AEA",
    bunBg: "#D8A05A",
    starColor: "#F9A825",
    catTags: ["#FFE08A", "#A8E6CF", "#FFB7B2"],
  },
} as const;

/**
 * Tek A5 broşür paneli. KESİN boyutlu, overflow gizlenmiş.
 * Print CSS bunu A4 yatay yarısına (≈142×198mm) tam oturtur.
 */
export function PrintMenuPage({ title, subtitle, categories, accent }: Props) {
  const p = PALETTE[accent];

  return (
    <article
      data-print-page
      className="relative flex flex-col overflow-hidden border-[3px] border-pixel-ink"
      style={{ boxSizing: "border-box", background: p.gradient }}
    >
      {/* Dekor katmanları */}
      {accent === "kids" ? (
        <>
          <KidsRainbow palette={p} />
          <KidsBalloons palette={p} />
          <KidsBirds />
          <KidsSparkles palette={p} />
        </>
      ) : (
        <AdultSparkles palette={p} />
      )}
      <BigSun palette={p} variant={accent} />
      <PrintClouds palette={p} variant={accent} />
      <PrintScene palette={p} variant={accent} />
      {accent === "kids" && <KidsChef />}
      {accent === "adult" && <AdultChef />}

      {/* Üst başlık şeridi */}
      <header
        className="relative z-10 flex shrink-0 items-center justify-between border-b-[3px] border-pixel-ink px-3 py-1.5"
        style={{
          background: p.strip,
          color: p.stripText,
          fontFamily: "var(--font-pixel-display)",
        }}
      >
        <span className="text-[9px] tracking-wider">★ XPZONE × BUTCHA</span>
        <span className="text-[9px] tracking-wider">EMAAR · TERAS</span>
      </header>

      {/* Hero başlık */}
      <div
        className="relative z-10 shrink-0 border-b-[3px] border-pixel-ink px-3 py-2.5 text-center"
        style={{ background: p.titleBg, color: p.titleText }}
      >
        <p
          className="text-[9px] tracking-[0.3em]"
          style={{ fontFamily: "var(--font-pixel-display)" }}
        >
          {subtitle}
        </p>
        <h1
          className="mt-1 text-[20px] leading-none"
          style={{ fontFamily: "var(--font-pixel-display)" }}
        >
          {title}
        </h1>
      </div>

      {/* Kategori paneli */}
      <div
        className="relative z-10 mx-2.5 mt-2.5 flex min-h-0 flex-1 flex-col overflow-hidden border-[3px] border-pixel-ink p-3 shadow-[3px_3px_0_var(--color-pixel-ink)]"
        style={{ background: p.panelBg }}
      >
        <div className="flex min-h-0 flex-1 flex-col gap-3 overflow-hidden">
          {categories.map((cat, ci) => {
            const tagColor = p.catTags[ci % p.catTags.length];
            return (
              <section key={cat.id} className="shrink-0">
                <h2
                  className="mb-1.5 inline-block border-2 border-pixel-ink px-1.5 py-0.5 text-[11px] uppercase tracking-wider"
                  style={{
                    background: tagColor,
                    color: "#1a1a1a",
                    fontFamily: "var(--font-pixel-display)",
                  }}
                >
                  {cat.label}
                </h2>
                <ul className="space-y-1.5">
                  {cat.items.map((item, ii) => {
                    const itemBorder =
                      p.catTags[(ci + ii + 1) % p.catTags.length];
                    return (
                      <li
                        key={item.id}
                        className="border-l-[4px] pl-2"
                        style={{ borderColor: itemBorder }}
                      >
                        <div className="flex items-baseline justify-between gap-2">
                          <h3
                            className="text-[14px] leading-tight text-pixel-ink"
                            style={{ fontFamily: "var(--font-pixel-display)" }}
                          >
                            {item.name}
                          </h3>
                          {item.tag ? (
                            <span
                              className="shrink-0 border-2 border-pixel-ink px-1 py-0 text-[7px] uppercase tracking-wider text-pixel-ink"
                              style={{
                                background: p.catTags[0],
                                fontFamily: "var(--font-pixel-display)",
                              }}
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
                    );
                  })}
                </ul>
              </section>
            );
          })}
        </div>

        <div
          className="mt-2 flex shrink-0 items-center justify-center gap-2 border-t-2 border-dashed pt-2"
          style={{ borderColor: "#1a1a1a" }}
        >
          <PixelStar color={p.starColor} />
          <span
            className="text-[9px] tracking-[0.25em] text-pixel-ink"
            style={{ fontFamily: "var(--font-pixel-display)" }}
          >
            {accent === "adult" ? "AFİYET OLSUN" : "AFİYET OLSUN MİNİ ŞEF"}
          </span>
          <PixelStar color={p.starColor} />
        </div>
      </div>

      {/* Footer: QR + konum */}
      <footer
        className="relative z-10 mx-2.5 my-2.5 grid shrink-0 grid-cols-[auto_1fr_auto] items-center gap-2 border-[3px] border-pixel-ink p-2 shadow-[3px_3px_0_var(--color-pixel-ink)]"
        style={{
          background: accent === "kids" ? "#FFFFFF" : "var(--color-pixel-sky)",
        }}
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
        <PixelBurger bunColor={p.bunBg} />
      </footer>
    </article>
  );
}

/* ───────────────────────── DEKORATİF PİKSEL KOMPONENTLERİ ───────────────────────── */

type Palette = typeof PALETTE[Accent];

function PrintClouds({ palette, variant }: { palette: Palette; variant: Accent }) {
  // Çocukta daha bol bulut
  const positions =
    variant === "kids"
      ? [
          { top: "8%", left: "4%", size: 0.95 },
          { top: "5%", left: "32%", size: 0.7 },
          { top: "16%", right: "8%", size: 1.2 },
          { top: "28%", left: "10%", size: 0.85 },
          { top: "36%", right: "20%", size: 0.75 },
          { top: "42%", left: "44%", size: 0.9 },
          { bottom: "32%", right: "4%", size: 1 },
          { bottom: "26%", left: "8%", size: 1.05 },
          { bottom: "20%", right: "30%", size: 0.7 },
        ]
      : [
          { top: "10%", left: "6%", size: 0.85 },
          { top: "18%", right: "10%", size: 1.1 },
          { top: "38%", left: "32%", size: 0.75 },
          { top: "46%", right: "8%", size: 0.95 },
          { bottom: "28%", left: "12%", size: 1 },
          { bottom: "22%", right: "22%", size: 0.8 },
        ];

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
      {positions.map((pos, i) => (
        <Cloud
          key={i}
          style={pos as React.CSSProperties}
          color={palette.cloud}
          shade={palette.cloudShade}
          size={pos.size ?? 1}
        />
      ))}
    </div>
  );
}

function Cloud({
  style = {},
  color,
  shade,
  size = 1,
}: {
  style?: React.CSSProperties;
  color: string;
  shade: string;
  size?: number;
}) {
  const w = Math.round(60 * size);
  return (
    <svg
      width={w}
      height={Math.round((w * 32) / 64)}
      viewBox="0 0 16 8"
      shapeRendering="crispEdges"
      className="absolute"
      style={{ opacity: 0.92, ...style }}
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

function BigSun({ palette, variant }: { palette: Palette; variant: Accent }) {
  const pos = variant === "kids" ? { top: "4%", right: "5%" } : { top: "6%", right: "5%" };
  return (
    <div aria-hidden className="pointer-events-none absolute z-0" style={pos}>
      <svg width={variant === "kids" ? 80 : 60} viewBox="0 0 20 20" shapeRendering="crispEdges">
        {/* Işınlar */}
        <rect x="9" y="0" width="2" height="3" fill={palette.sunRay} />
        <rect x="9" y="17" width="2" height="3" fill={palette.sunRay} />
        <rect x="0" y="9" width="3" height="2" fill={palette.sunRay} />
        <rect x="17" y="9" width="3" height="2" fill={palette.sunRay} />
        <rect x="2" y="2" width="2" height="2" fill={palette.sunRay} />
        <rect x="16" y="2" width="2" height="2" fill={palette.sunRay} />
        <rect x="2" y="16" width="2" height="2" fill={palette.sunRay} />
        <rect x="16" y="16" width="2" height="2" fill={palette.sunRay} />
        {/* Güneş gövdesi */}
        <rect x="6" y="4" width="8" height="12" fill={palette.sun} />
        <rect x="4" y="6" width="12" height="8" fill={palette.sun} />
        <rect x="5" y="5" width="10" height="10" fill={palette.sun} />
        {/* Yüz (sadece çocukta) */}
        {variant === "kids" && (
          <>
            <rect x="7" y="8" width="2" height="2" fill="#1a1a1a" />
            <rect x="11" y="8" width="2" height="2" fill="#1a1a1a" />
            <rect x="8" y="12" width="4" height="1" fill="#1a1a1a" />
            <rect x="7" y="11" width="1" height="1" fill="#1a1a1a" />
            <rect x="12" y="11" width="1" height="1" fill="#1a1a1a" />
          </>
        )}
      </svg>
    </div>
  );
}

function KidsRainbow({ palette }: { palette: Palette }) {
  return (
    <div aria-hidden className="pointer-events-none absolute z-0" style={{ top: "20%", left: "-6%" }}>
      <svg width="100" viewBox="0 0 20 14" shapeRendering="crispEdges" style={{ opacity: 0.95 }}>
        {/* Arc'lar - dıştan içe */}
        <path d="M0 13 Q10 3 20 13" stroke="#FB7185" strokeWidth="1.2" fill="none" />
        <path d="M1.2 13 Q10 4.2 18.8 13" stroke="#FB923C" strokeWidth="1.2" fill="none" />
        <path d="M2.4 13 Q10 5.4 17.6 13" stroke={palette.sun} strokeWidth="1.2" fill="none" />
        <path d="M3.6 13 Q10 6.6 16.4 13" stroke="#86EFAC" strokeWidth="1.2" fill="none" />
        <path d="M4.8 13 Q10 7.8 15.2 13" stroke="#7DD3FC" strokeWidth="1.2" fill="none" />
        <path d="M6 13 Q10 9 14 13" stroke="#A78BFA" strokeWidth="1.2" fill="none" />
      </svg>
    </div>
  );
}

function KidsBalloons({ palette }: { palette: Palette }) {
  return (
    <div aria-hidden className="pointer-events-none absolute z-0" style={{ bottom: "38%", right: "3%" }}>
      <svg width="46" viewBox="0 0 12 18" shapeRendering="crispEdges">
        {/* Balon 1 */}
        <rect x="1" y="1" width="4" height="4" fill={palette.pinkAccent} />
        <rect x="0" y="2" width="6" height="2" fill={palette.pinkAccent} />
        <rect x="2" y="0" width="2" height="1" fill={palette.pinkAccent} />
        <rect x="2" y="5" width="1" height="1" fill={palette.pinkAccent} />
        <rect x="3" y="6" width="1" height="6" fill="#1a1a1a" />
        {/* Balon 2 */}
        <rect x="7" y="3" width="4" height="4" fill={palette.purpleAccent} />
        <rect x="6" y="4" width="6" height="2" fill={palette.purpleAccent} />
        <rect x="8" y="2" width="2" height="1" fill={palette.purpleAccent} />
        <rect x="8" y="7" width="1" height="1" fill={palette.purpleAccent} />
        <rect x="9" y="8" width="1" height="6" fill="#1a1a1a" />
        {/* Highlight */}
        <rect x="1" y="2" width="1" height="1" fill="#FFFFFF" opacity="0.7" />
        <rect x="7" y="4" width="1" height="1" fill="#FFFFFF" opacity="0.7" />
      </svg>
    </div>
  );
}

function KidsBirds() {
  return (
    <>
      <div aria-hidden className="pointer-events-none absolute z-0" style={{ top: "12%", left: "48%" }}>
        <BirdSilhouette />
      </div>
      <div aria-hidden className="pointer-events-none absolute z-0" style={{ top: "20%", left: "62%" }}>
        <BirdSilhouette size={0.75} />
      </div>
    </>
  );
}

function BirdSilhouette({ size = 1 }: { size?: number }) {
  return (
    <svg width={Math.round(22 * size)} viewBox="0 0 11 5" shapeRendering="crispEdges">
      <rect x="0" y="2" width="2" height="1" fill="#1a1a1a" />
      <rect x="1" y="1" width="2" height="1" fill="#1a1a1a" />
      <rect x="2" y="2" width="2" height="1" fill="#1a1a1a" />
      <rect x="4" y="3" width="2" height="1" fill="#1a1a1a" />
      <rect x="5" y="2" width="2" height="1" fill="#1a1a1a" />
      <rect x="6" y="1" width="2" height="1" fill="#1a1a1a" />
      <rect x="7" y="2" width="2" height="1" fill="#1a1a1a" />
      <rect x="9" y="3" width="2" height="1" fill="#1a1a1a" />
    </svg>
  );
}

function KidsSparkles({ palette }: { palette: Palette }) {
  const positions = [
    { top: "14%", left: "22%" },
    { top: "28%", right: "30%" },
    { top: "44%", left: "60%" },
    { bottom: "36%", right: "12%" },
    { bottom: "30%", left: "26%" },
  ];
  return (
    <>
      {positions.map((pos, i) => (
        <div
          key={i}
          aria-hidden
          className="pointer-events-none absolute z-0"
          style={pos as React.CSSProperties}
        >
          <Sparkle color={i % 2 === 0 ? palette.starColor : palette.pinkAccent} />
        </div>
      ))}
    </>
  );
}

function AdultSparkles({ palette }: { palette: Palette }) {
  const positions = [
    { top: "12%", left: "20%" },
    { top: "30%", right: "26%" },
    { bottom: "32%", left: "24%" },
    { bottom: "26%", right: "10%" },
  ];
  return (
    <>
      {positions.map((pos, i) => (
        <div
          key={i}
          aria-hidden
          className="pointer-events-none absolute z-0"
          style={pos as React.CSSProperties}
        >
          <Sparkle color={palette.starColor} size={0.85} />
        </div>
      ))}
    </>
  );
}

function Sparkle({ color, size = 1 }: { color: string; size?: number }) {
  const w = Math.round(12 * size);
  return (
    <svg width={w} viewBox="0 0 7 7" shapeRendering="crispEdges">
      <rect x="3" y="0" width="1" height="7" fill={color} />
      <rect x="0" y="3" width="7" height="1" fill={color} />
      <rect x="1" y="1" width="1" height="1" fill={color} opacity="0.8" />
      <rect x="5" y="5" width="1" height="1" fill={color} opacity="0.8" />
    </svg>
  );
}

function PrintScene({ palette, variant }: { palette: Palette; variant: Accent }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 z-0">
      <svg
        viewBox="0 0 300 50"
        preserveAspectRatio="none"
        shapeRendering="crispEdges"
        className="block h-[46px] w-full"
      >
        {/* Çim */}
        <rect x="0" y="34" width="300" height="16" fill={palette.grass} />
        {/* Tepecikler */}
        {[20, 80, 140, 200, 260].map((x) => (
          <g key={`hill-${x}`}>
            <rect x={x} y="30" width="20" height="4" fill={palette.grass} />
            <rect x={x + 4} y="26" width="12" height="4" fill={palette.grass} />
          </g>
        ))}
        {/* Çim koyu pikselleri */}
        {Array.from({ length: 18 }).map((_, i) => (
          <rect key={`gd-${i}`} x={i * 16 + 4} y={42} width="4" height="2" fill={palette.grassDark} />
        ))}
        {/* Ağaç sol */}
        <g>
          <rect x="36" y="22" width="4" height="12" fill={palette.trunk} />
          <rect x="30" y="12" width="16" height="12" fill={palette.leaf} />
          <rect x="32" y="8" width="12" height="4" fill={palette.leaf} />
          {variant === "kids" && (
            <>
              <rect x="34" y="10" width="2" height="2" fill="#FB7185" />
              <rect x="40" y="14" width="2" height="2" fill="#FCD34D" />
            </>
          )}
        </g>
        {/* Ağaç sağ-orta */}
        <g>
          <rect x="180" y="24" width="4" height="10" fill={palette.trunk} />
          <rect x="174" y="16" width="16" height="10" fill={palette.leaf} />
          {variant === "kids" && (
            <>
              <rect x="178" y="18" width="2" height="2" fill="#A78BFA" />
              <rect x="184" y="20" width="2" height="2" fill="#FB7185" />
            </>
          )}
        </g>
        {/* Çiçekler */}
        {[60, 110, 160, 220, 270].map((x, i) => {
          const flowerColor = variant === "kids"
            ? ["#FB7185", "#A78BFA", "#FCD34D", "#7DD3FC", "#86EFAC"][i % 5]
            : ["#FFB7B2", "#FFE08A", "#A8E6CF"][i % 3];
          return (
            <g key={`flower-${x}`}>
              <rect x={x} y="32" width="2" height="2" fill={flowerColor} />
              <rect x={x + 2} y="30" width="2" height="2" fill={palette.sun} />
              <rect x={x - 2} y="32" width="2" height="2" fill={flowerColor} />
              <rect x={x} y="34" width="2" height="2" fill={flowerColor} />
            </g>
          );
        })}
      </svg>
    </div>
  );
}

function KidsChef() {
  // Mini şef karakteri - sol alt
  return (
    <div aria-hidden className="pointer-events-none absolute z-0" style={{ bottom: "10%", left: "6%" }}>
      <svg width="44" viewBox="0 0 12 16" shapeRendering="crispEdges">
        {/* Şef şapkası */}
        <rect x="3" y="0" width="6" height="1" fill="#FFFFFF" />
        <rect x="2" y="1" width="8" height="3" fill="#FFFFFF" />
        <rect x="3" y="4" width="6" height="1" fill="#FFFFFF" />
        <rect x="2" y="5" width="8" height="1" fill="#1a1a1a" />
        {/* Yüz */}
        <rect x="3" y="6" width="6" height="3" fill="#FCD7B0" />
        <rect x="4" y="7" width="1" height="1" fill="#1a1a1a" />
        <rect x="7" y="7" width="1" height="1" fill="#1a1a1a" />
        <rect x="5" y="8" width="2" height="1" fill="#FB7185" />
        {/* Beden */}
        <rect x="2" y="9" width="8" height="5" fill="#FFFFFF" />
        <rect x="5" y="10" width="2" height="1" fill="#1a1a1a" />
        <rect x="5" y="12" width="2" height="1" fill="#1a1a1a" />
        {/* Kollar */}
        <rect x="0" y="10" width="2" height="3" fill="#FFFFFF" />
        <rect x="10" y="10" width="2" height="3" fill="#FFFFFF" />
        {/* Bacaklar */}
        <rect x="3" y="14" width="2" height="2" fill="#1a1a1a" />
        <rect x="7" y="14" width="2" height="2" fill="#1a1a1a" />
      </svg>
    </div>
  );
}

function AdultChef() {
  return (
    <div aria-hidden className="pointer-events-none absolute z-0" style={{ bottom: "10%", left: "6%" }}>
      <svg width="38" viewBox="0 0 12 16" shapeRendering="crispEdges">
        {/* Şef şapkası daha sade */}
        <rect x="3" y="0" width="6" height="2" fill="#FFFFFF" />
        <rect x="2" y="2" width="8" height="3" fill="#FFFFFF" />
        <rect x="2" y="5" width="8" height="1" fill="#1a1a1a" />
        {/* Yüz */}
        <rect x="3" y="6" width="6" height="3" fill="#E8C9A0" />
        <rect x="4" y="7" width="1" height="1" fill="#1a1a1a" />
        <rect x="7" y="7" width="1" height="1" fill="#1a1a1a" />
        <rect x="5" y="8" width="2" height="1" fill="#1a1a1a" />
        {/* Önlük */}
        <rect x="2" y="9" width="8" height="5" fill="#FFFFFF" />
        <rect x="5" y="10" width="2" height="4" fill="#8b1e2c" />
        <rect x="3" y="14" width="2" height="2" fill="#1a1a1a" />
        <rect x="7" y="14" width="2" height="2" fill="#1a1a1a" />
      </svg>
    </div>
  );
}

function PixelStar({ color = "#1a1a1a" }: { color?: string }) {
  return (
    <svg width="12" height="12" viewBox="0 0 7 7" shapeRendering="crispEdges">
      <rect x="3" y="0" width="1" height="7" fill={color} />
      <rect x="0" y="3" width="7" height="1" fill={color} />
      <rect x="1" y="1" width="1" height="1" fill={color} />
      <rect x="5" y="1" width="1" height="1" fill={color} />
      <rect x="1" y="5" width="1" height="1" fill={color} />
      <rect x="5" y="5" width="1" height="1" fill={color} />
    </svg>
  );
}

function PixelBurger({ bunColor }: { bunColor: string }) {
  return (
    <svg width="38" height="30" viewBox="0 0 11 9" shapeRendering="crispEdges" aria-hidden>
      <rect x="1" y="0" width="9" height="1" fill={bunColor} />
      <rect x="0" y="1" width="11" height="2" fill={bunColor} />
      <rect x="2" y="0" width="1" height="1" fill="#fff" opacity="0.6" />
      <rect x="5" y="0" width="1" height="1" fill="#fff" opacity="0.6" />
      <rect x="0" y="3" width="11" height="1" fill="#5fa85a" />
      <rect x="0" y="4" width="11" height="2" fill="#6b3a1a" />
      <rect x="0" y="6" width="11" height="1" fill="#ffd97a" />
      <rect x="0" y="7" width="11" height="2" fill={bunColor} />
    </svg>
  );
}
