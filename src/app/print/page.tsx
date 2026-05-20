import type { Metadata } from "next";
import { pixelAdultMenu, pixelKidsMenu } from "@/data/pixel-menu";
import { PrintActions } from "./PrintActions";
import { PrintMenuPage } from "./PrintMenuPage";

export const metadata: Metadata = {
  title: "Butcha × XPZone — Çift Taraflı Broşür (A4 yatay)",
  description:
    "Tek A4 yatay kağıt, çift taraflı baskı. Ortadan dikey kesince 2 adet broşür: ön yüz yetişkin, arka yüz çocuk.",
};

export default function PrintRoute() {
  return (
    <main className="min-h-dvh bg-pixel-sky px-4 py-6">
      <PrintActions />

      {/* SPREAD 1 — ÖN YÜZ: solda yetişkin / sağda yetişkin (iki kopya) */}
      <SpreadLabel label="ÖN YÜZ · YETİŞKİN × 2" />
      <div
        data-print-spread
        className="mx-auto mb-8 grid w-full max-w-[297mm] grid-cols-1 gap-4 md:grid-cols-2 md:gap-0"
      >
        <PrintMenuPage
          title="YETİŞKİN MENÜ"
          subtitle="XPZONE × BUTCHA STEAKHOUSE"
          categories={pixelAdultMenu}
          accent="adult"
        />
        <div data-print-fold>
          <PrintMenuPage
            title="YETİŞKİN MENÜ"
            subtitle="XPZONE × BUTCHA STEAKHOUSE"
            categories={pixelAdultMenu}
            accent="adult"
          />
        </div>
      </div>

      {/* SPREAD 2 — ARKA YÜZ: solda çocuk / sağda çocuk (iki kopya) */}
      <SpreadLabel label="ARKA YÜZ · ÇOCUK × 2" />
      <div
        data-print-spread
        className="mx-auto grid w-full max-w-[297mm] grid-cols-1 gap-4 md:grid-cols-2 md:gap-0"
      >
        <PrintMenuPage
          title="ÇOCUK MENÜ"
          subtitle="MİNİ ŞEFLER İÇİN"
          categories={pixelKidsMenu}
          accent="kids"
        />
        <div data-print-fold>
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
        className="mx-auto mt-8 max-w-3xl border-4 border-pixel-ink bg-cream p-4 shadow-[4px_4px_0_var(--color-pixel-ink)]"
      >
        <h2
          className="text-sm tracking-wider text-pixel-ink"
          style={{ fontFamily: "var(--font-pixel-display)" }}
        >
          ★ ÇİFT TARAFLI BASKI TALİMATI
        </h2>
        <ol
          className="mt-2 list-decimal space-y-1 pl-5 text-sm leading-snug text-pixel-ink"
          style={{ fontFamily: "var(--font-pixel-body)" }}
        >
          <li>
            <strong>Cmd/Ctrl + P</strong> → yazıcı seç (PDF değil) ya da{" "}
            <strong>“sistem iletişim penceresini kullanarak yazdır”</strong>.
          </li>
          <li>
            Kağıt: <strong>A4</strong> · Yön: <strong>Yatay (Landscape)</strong>.
          </li>
          <li>
            <strong>Çift taraflı / Two-sided</strong> seç ·{" "}
            <strong>“Kısa kenardan çevir / Flip on short edge”</strong>.
          </li>
          <li>
            <strong>Arka plan grafikleri (Background graphics): Açık</strong> — renkler ve bulutlar
            için zorunlu.
          </li>
          <li>
            Tek A4 kağıt çıkacak: ön yüz yetişkin × 2, arka yüz çocuk × 2.
          </li>
          <li>
            <strong>Ortadan dikey kes</strong> → elinde <strong>2 adet broşür</strong>: her birinin
            bir yüzü yetişkin, diğer yüzü çocuk.
          </li>
        </ol>
        <p
          className="mt-3 text-xs leading-snug text-warm-slate"
          style={{ fontFamily: "var(--font-pixel-body)" }}
        >
          Matbaaya götürüyorsan: bu sayfayı PDF olarak kaydet (yazdır → PDF olarak kaydet → A4
          yatay) ve “çift taraflı, kısa kenardan çevir, ortadan dikey kes” notuyla ver.
        </p>
      </div>
    </main>
  );
}

function SpreadLabel({ label }: { label: string }) {
  return (
    <p
      data-print-hide
      className="mx-auto mb-2 max-w-[297mm] text-xs tracking-[0.3em] text-pixel-ink"
      style={{ fontFamily: "var(--font-pixel-display)" }}
    >
      ▸ {label}
    </p>
  );
}
