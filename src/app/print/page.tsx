import type { Metadata } from "next";
import { pixelAdultMenu, pixelKidsMenu } from "@/data/pixel-menu";
import { PrintActions } from "./PrintActions";
import { PrintMenuPage } from "./PrintMenuPage";

export const metadata: Metadata = {
  title: "Butcha × XPZone — Çift Taraflı Broşür (A4 yatay)",
  description:
    "Tek A4 yatay kağıt, çift taraflı baskı. Ortadan dikey kesince 2 adet broşür: bir yüz yetişkin, diğer yüz çocuk.",
};

export default function PrintRoute() {
  return (
    <main className="min-h-dvh bg-pixel-sky px-4 py-6">
      <PrintActions />

      <PdfInstructions />

      {/* SPREAD 1 — ÖN YÜZ: solda yetişkin / sağda yetişkin */}
      <SpreadLabel label="ÖN YÜZ · YETİŞKİN × 2" />
      <div
        data-print-spread
        className="mx-auto mb-8 grid w-full max-w-[297mm] grid-cols-2 gap-0"
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

      {/* SPREAD 2 — ARKA YÜZ: solda çocuk / sağda çocuk */}
      <SpreadLabel label="ARKA YÜZ · ÇOCUK × 2" />
      <div
        data-print-spread
        className="mx-auto grid w-full max-w-[297mm] grid-cols-2 gap-0"
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

function PdfInstructions() {
  return (
    <div
      data-print-hide
      className="mx-auto mb-6 max-w-3xl border-4 border-pixel-ink bg-cream p-4 shadow-[4px_4px_0_var(--color-pixel-ink)]"
    >
      <h2
        className="text-sm tracking-wider text-pixel-ink"
        style={{ fontFamily: "var(--font-pixel-display)" }}
      >
        ★ TAŞMASIZ PDF / BASKI — KESİN AYARLAR
      </h2>

      <p
        className="mt-2 text-[13px] leading-snug text-pixel-ink"
        style={{ fontFamily: "var(--font-pixel-body)" }}
      >
        Aşağıdaki ayarların <strong>hepsi</strong> doğru olduğunda 2 sayfalık (ön/arka) tek bir A4
        çıkar, taşma olmaz.
      </p>

      <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
        <div className="border-2 border-pixel-ink bg-white p-2">
          <p
            className="text-[10px] tracking-wider text-pixel-ink"
            style={{ fontFamily: "var(--font-pixel-display)" }}
          >
            CHROME / EDGE — PDF KAYDET
          </p>
          <ol
            className="mt-1 list-decimal space-y-0.5 pl-4 text-[12px] leading-tight text-pixel-ink"
            style={{ fontFamily: "var(--font-pixel-body)" }}
          >
            <li>Cmd/Ctrl + P</li>
            <li>Hedef: <strong>PDF olarak kaydet</strong></li>
            <li>Sayfa boyutu: <strong>A4</strong> (Letter DEĞİL)</li>
            <li>Düzen: <strong>Yatay / Landscape</strong></li>
            <li>Kenar boşlukları: <strong>Yok / None</strong></li>
            <li>Ölçek: <strong>Varsayılan (100)</strong></li>
            <li>Seçenekler → <strong>Arka plan grafikleri: AÇIK</strong></li>
            <li>Üst bilgi / alt bilgi: <strong>KAPALI</strong></li>
            <li>Kaydet → 2 sayfalı PDF</li>
          </ol>
        </div>

        <div className="border-2 border-pixel-ink bg-white p-2">
          <p
            className="text-[10px] tracking-wider text-pixel-ink"
            style={{ fontFamily: "var(--font-pixel-display)" }}
          >
            SAFARI — PDF KAYDET
          </p>
          <ol
            className="mt-1 list-decimal space-y-0.5 pl-4 text-[12px] leading-tight text-pixel-ink"
            style={{ fontFamily: "var(--font-pixel-body)" }}
          >
            <li>Cmd + P</li>
            <li>Kağıt boyutu: <strong>A4</strong></li>
            <li>Yön: <strong>Yatay</strong></li>
            <li>“Arka planı yazdır” seçeneğini <strong>AÇ</strong></li>
            <li>Alt sol köşe: <strong>PDF ▸ PDF Olarak Kaydet</strong></li>
          </ol>
        </div>
      </div>

      <div className="mt-3 border-2 border-pixel-ink bg-pixel-sun p-2">
        <p
          className="text-[10px] tracking-wider text-pixel-ink"
          style={{ fontFamily: "var(--font-pixel-display)" }}
        >
          ★ YAZICIDAN DOĞRUDAN ÇIKARMAK İÇİN
        </p>
        <ol
          className="mt-1 list-decimal space-y-0.5 pl-4 text-[12px] leading-tight text-pixel-ink"
          style={{ fontFamily: "var(--font-pixel-body)" }}
        >
          <li>Yazıcı seç (PDF değil)</li>
          <li>A4 · Yatay · Arka plan grafikleri AÇIK · Kenar Yok</li>
          <li>
            <strong>Çift taraflı / Two-sided</strong> ·
            <strong> Kısa kenardan çevir (Flip on short edge)</strong>
          </li>
          <li>1 adet A4 çıkar → <strong>ortadan dikey kes</strong> → 2 adet broşür</li>
        </ol>
      </div>

      <p
        className="mt-3 text-[11px] leading-snug text-warm-slate"
        style={{ fontFamily: "var(--font-pixel-body)" }}
      >
        <strong>Hâlâ taşıyor mu?</strong> Yazdır penceresinde “<em>Ölçeği sığdır / Fit to page</em>”
        AÇIK olmalı (genelde varsayılan). Letter seçili kalırsa Avrupa A4’ten farklı boyut olduğu
        için kırpılır.
      </p>
    </div>
  );
}
