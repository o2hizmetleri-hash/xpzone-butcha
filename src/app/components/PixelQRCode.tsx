"use client";

import { QRCodeSVG } from "qrcode.react";

const QR_URL = "https://butchash.qrlim.com/";

export function PixelQRCode() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-3 bg-pixel-sun p-4 sm:p-5">
      <p
        className="pixel-blink text-center text-sm leading-none text-pixel-ink sm:text-base"
        style={{ fontFamily: "var(--font-pixel-display)" }}
      >
        ★ ONLINE MENÜ ★
      </p>

      <a
        href={QR_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Butcha online menü QR kodu"
        className="block border-4 border-pixel-ink bg-white p-2 shadow-[4px_4px_0_var(--color-pixel-ink)] transition-transform duration-100 hover:-translate-x-0.5 hover:-translate-y-0.5"
      >
        <QRCodeSVG
          value={QR_URL}
          size={140}
          level="H"
          bgColor="#ffffff"
          fgColor="#1a1a1a"
          marginSize={0}
          style={{ imageRendering: "pixelated", display: "block" }}
        />
      </a>

      <p
        className="text-center text-base leading-tight text-pixel-ink sm:text-lg"
        style={{ fontFamily: "var(--font-pixel-body)" }}
      >
        TELEFONLA TARA →
      </p>
    </div>
  );
}
