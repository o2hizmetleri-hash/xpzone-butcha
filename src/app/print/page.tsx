import type { Metadata } from "next";
import { pixelAdultMenu, pixelKidsMenu } from "@/data/pixel-menu";
import { PrintActions } from "./PrintActions";
import { PrintMenuPage } from "./PrintMenuPage";

export const metadata: Metadata = {
  title: "Butcha × XPZone — Broşür (A4 yatay, ortadan kat)",
  description: "A4 yatay tek kağıt, ortadan katlanır broşür: sol yetişkin, sağ çocuk menü.",
};

export default function PrintRoute() {
  return (
    <main className="min-h-dvh bg-pixel-sky px-4 py-6">
      <PrintActions />

      {/* Broşür: A4 yatay tek sayfa, iki A5 sütun yan yana, ortadan katla */}
      <div
        data-print-brochure
        className="mx-auto grid w-full max-w-[297mm] grid-cols-1 gap-4 md:grid-cols-2 md:gap-0"
      >
        <div className="bg-pixel-sky">
          <PrintMenuPage
            title="YETİŞKİN MENÜ"
            subtitle="XPZONE × BUTCHA STEAKHOUSE"
            categories={pixelAdultMenu}
            accent="adult"
          />
        </div>
        <div data-print-fold className="bg-pixel-sky">
          <PrintMenuPage
            title="ÇOCUK MENÜ"
            subtitle="MİNİ ŞEFLER İÇİN"
            categories={pixelKidsMenu}
            accent="kids"
          />
        </div>
      </div>

      <div
        data-print-hide
        className="mx-auto mt-6 max-w-3xl border-4 border-pixel-ink bg-cream p-4 shadow-[4px_4px_0_var(--color-pixel-ink)]"
      >
        <h2
          className="text-sm tracking-wider text-pixel-ink"
          style={{ fontFamily: "var(--font-pixel-display)" }}
        >
          ★ YAZDIRMA TALİMATI
        </h2>
        <ol
          className="mt-2 list-decimal space-y-1 pl-5 text-sm leading-snug text-pixel-ink"
          style={{ fontFamily: "var(--font-pixel-body)" }}
        >
          <li>
            <strong>Cmd/Ctrl + P</strong> ile yazdır menüsünü aç.
          </li>
          <li>
            <strong>“Sistem iletişim penceresini kullanarak yazdır” / “More settings”</strong> tıkla
            (gerekirse).
          </li>
          <li>
            Kağıt boyutu: <strong>A4</strong> · Yön: <strong>Yatay (Landscape)</strong>.
          </li>
          <li>
            “Arka plan grafikleri / Background graphics” seçeneğini <strong>açık</strong> bırak.
          </li>
          <li>
            Tek A4 kağıt çıkar → <strong>ortadan ikiye katla</strong> → sol yetişkin, sağ çocuk
            broşürün hazır.
          </li>
        </ol>
        <p
          className="mt-3 text-xs leading-snug text-warm-slate"
          style={{ fontFamily: "var(--font-pixel-body)" }}
        >
          A5 ayrı kağıda baskı istersen aynı dosyayı PDF’e kaydet, matbaa A5 olarak ortadan
          kesebilir.
        </p>
      </div>
    </main>
  );
}
