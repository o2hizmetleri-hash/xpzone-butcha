"use client";

export function PrintActions() {
  return (
    <div
      data-print-hide
      className="sticky top-2 z-10 mx-auto mb-4 flex max-w-[140mm] items-center justify-between gap-2 border-4 border-pixel-ink bg-pixel-sun px-3 py-2 shadow-[4px_4px_0_var(--color-pixel-ink)]"
    >
      <p
        className="text-xs leading-tight text-pixel-ink"
        style={{ fontFamily: "var(--font-pixel-display)" }}
      >
        ★ A5 ÇİFT-TARAFLI ÖNİZLEME
      </p>
      <button
        type="button"
        onClick={() => window.print()}
        className="pixel-btn bg-pixel-mint px-3 py-1 text-xs text-pixel-ink"
      >
        ▸ YAZDIR
      </button>
    </div>
  );
}
