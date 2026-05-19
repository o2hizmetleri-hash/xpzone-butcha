import { QRCodeSVG } from "qrcode.react";
import type { PixelCategory } from "@/data/pixel-menu";

type Props = {
  title: string;
  subtitle: string;
  categories: PixelCategory[];
  accent: "adult" | "kids";
};

const QR_URL = "https://butchash.qrlim.com/";

export function PrintMenuPage({ title, subtitle, categories, accent }: Props) {
  const accentBg = accent === "adult" ? "#a8e6cf" : "#ffb7b2";
  const accentBand = accent === "adult" ? "#1a1a1a" : "#8b1e2c";

  return (
    <article
      data-print-page
      className="relative mx-auto flex w-[132mm] flex-col border-4 border-pixel-ink bg-cream"
      style={{ minHeight: "194mm" }}
    >
      {/* Üst başlık şeridi */}
      <header
        className="flex items-center justify-between border-b-4 border-pixel-ink px-4 py-2"
        style={{ background: accentBand, color: "#ffe08a", fontFamily: "var(--font-pixel-display)" }}
      >
        <span className="text-[10px] tracking-wider">★ XPZONE × BUTCHA</span>
        <span className="text-[10px] tracking-wider">EMAAR · TERAS</span>
      </header>

      {/* Hero başlık */}
      <div
        className="border-b-4 border-pixel-ink px-5 py-4 text-center"
        style={{ background: accentBg }}
      >
        <p
          className="text-[10px] tracking-[0.3em] text-pixel-ink"
          style={{ fontFamily: "var(--font-pixel-display)" }}
        >
          {subtitle}
        </p>
        <h1
          className="mt-1 text-2xl leading-none text-pixel-ink"
          style={{ fontFamily: "var(--font-pixel-display)" }}
        >
          {title}
        </h1>
      </div>

      {/* Kategoriler */}
      <div className="flex-1 px-5 py-4">
        {categories.map((cat) => (
          <section key={cat.id} className="mb-5 last:mb-0">
            <h2
              className="mb-2 inline-block border-2 border-pixel-ink bg-pixel-sun px-2 py-0.5 text-sm uppercase tracking-wider text-pixel-ink"
              style={{ fontFamily: "var(--font-pixel-display)" }}
            >
              {cat.label}
            </h2>
            <ul className="space-y-2.5">
              {cat.items.map((item) => (
                <li key={item.id} className="border-l-4 border-pixel-ink pl-2">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3
                      className="text-base leading-tight text-pixel-ink"
                      style={{ fontFamily: "var(--font-pixel-display)" }}
                    >
                      {item.name}
                    </h3>
                    {item.tag ? (
                      <span
                        className="shrink-0 border-2 border-pixel-ink bg-pixel-mint px-1.5 py-0.5 text-[8px] uppercase tracking-wider text-pixel-ink"
                        style={{ fontFamily: "var(--font-pixel-display)" }}
                      >
                        {item.tag}
                      </span>
                    ) : null}
                  </div>
                  <p
                    className="mt-0.5 text-[13px] leading-tight text-pixel-ink"
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

      {/* Alt: QR + konum */}
      <footer className="grid grid-cols-[auto_1fr] gap-3 border-t-4 border-pixel-ink bg-pixel-sky p-3">
        <div className="border-2 border-pixel-ink bg-white p-1">
          <QRCodeSVG
            value={QR_URL}
            size={60}
            level="H"
            bgColor="#ffffff"
            fgColor="#1a1a1a"
            marginSize={0}
            style={{ display: "block", imageRendering: "pixelated" }}
          />
        </div>
        <div className="flex flex-col justify-center">
          <p
            className="text-[10px] tracking-wider text-pixel-ink"
            style={{ fontFamily: "var(--font-pixel-display)" }}
          >
            ★ ONLINE MENÜ
          </p>
          <p
            className="text-[12px] leading-tight text-pixel-ink"
            style={{ fontFamily: "var(--font-pixel-body)" }}
          >
            butchash.qrlim.com
          </p>
          <p
            className="mt-1 text-[10px] tracking-wider text-pixel-ink"
            style={{ fontFamily: "var(--font-pixel-display)" }}
          >
            5 NO. GİRİŞ SOLU · TERAS KAT
          </p>
        </div>
      </footer>
    </article>
  );
}
