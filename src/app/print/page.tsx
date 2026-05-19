import type { Metadata } from "next";
import { pixelAdultMenu, pixelKidsMenu } from "@/data/pixel-menu";
import { PrintActions } from "./PrintActions";
import { PrintMenuPage } from "./PrintMenuPage";

export const metadata: Metadata = {
  title: "Butcha × XPZone — A5 Yazdırma",
  description: "A5 çift-taraflı menü çıktısı: bir yüz yetişkin, bir yüz çocuk.",
};

export default function PrintRoute() {
  return (
    <main className="min-h-dvh bg-pixel-sky px-4 py-6">
      <PrintActions />

      <div className="mx-auto flex max-w-[140mm] flex-col gap-6">
        <PrintMenuPage
          title="YETİŞKİN MENÜ"
          subtitle="XPZONE × BUTCHA STEAKHOUSE"
          categories={pixelAdultMenu}
          accent="adult"
        />
        <PrintMenuPage
          title="ÇOCUK MENÜ"
          subtitle="MİNİ ŞEFLER İÇİN"
          categories={pixelKidsMenu}
          accent="kids"
        />
      </div>

      <p
        data-print-hide
        className="mx-auto mt-6 max-w-[140mm] text-center text-xs leading-snug text-pixel-ink"
        style={{ fontFamily: "var(--font-pixel-body)" }}
      >
        Yazdır ekranında <strong>A5</strong> boyut ve <strong>çift-taraflı (kısa kenardan çevir)</strong> seçilirse
        ön yüz yetişkin, arka yüz çocuk menü olur.
      </p>
    </main>
  );
}
