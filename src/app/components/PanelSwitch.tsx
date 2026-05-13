"use client";

type Mode = "adult" | "kids";

type Props = {
  mode: Mode;
  onChange: (mode: Mode) => void;
};

export function PanelSwitch({ mode, onChange }: Props) {
  return (
    <div className="sticky top-0 z-40 bg-transparent px-4 pb-3 pt-[max(1.25rem,env(safe-area-inset-top))] sm:pt-6 sm:pb-4">
      <div className="mx-auto flex w-fit max-w-full justify-center">
        <div className="flex items-center gap-2 border-4 border-pixel-ink bg-pixel-sun px-2 py-2 shadow-[6px_6px_0_var(--color-pixel-ink)]">
          <SwitchButton
            active={mode === "adult"}
            onClick={() => onChange("adult")}
            label="Yetişkin"
          />
          <SwitchButton
            active={mode === "kids"}
            onClick={() => onChange("kids")}
            label="Çocuk"
          />
        </div>
      </div>
    </div>
  );
}

function SwitchButton({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className="cursor-pointer px-3 py-2 text-[9px] sm:text-[10px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bordeaux"
      style={{
        fontFamily: "var(--font-pixel-display)",
        background: active ? "var(--color-pixel-ink)" : "#ffffff",
        color: active ? "var(--color-pixel-sun)" : "var(--color-pixel-ink)",
        border: "4px solid var(--color-pixel-ink)",
        letterSpacing: "0.05em",
      }}
    >
      {active ? "▶ " : ""}
      {label.toUpperCase()}
    </button>
  );
}
