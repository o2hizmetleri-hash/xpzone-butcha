import type { CSSProperties } from "react";

type AvatarKind = "man" | "woman";

type Props = { kind: AvatarKind; size?: number };

type Sprite = { palette: Record<string, string>; data: string[] };

// 16x16 pixel adult avatars. Both wear Butcha apron with bordeaux badge.
const MAN: Sprite = {
  palette: {
    B: "#1a1a1a",
    S: "#f0c8a0", // skin
    K: "#e8b890", // skin shadow
    H: "#3a2a1a", // hair dark
    C: "#5a3a2a", // hair light
    W: "#ffffff", // apron
    A: "#f1ece3", // apron light
    R: "#8b1e2c", // bordeaux
    E: "#1a1612", // eyes/shirt
  },
  data: [
    ".....BBBBBB.....",
    "....BHHHHHHB....",
    "...BHCCHCHHB....",
    "...BHCHHHCHB....",
    "...BSSSSSSSB....",
    "..BSSESSSEKB....",
    "..BSSSKSSSSB....",
    "...BSKKKKSB.....",
    "....BBBBBB......",
    "...BEEEEEEB.....",
    "..BWWWWWWWWB....",
    "..BWWWRWWWWB....",
    "..BWWWRWWWWB....",
    "..BAWWWWWWAB....",
    "..BAAAWWWAAB....",
    "..BB.....BB.....",
  ],
};

const WOMAN: Sprite = {
  palette: {
    B: "#1a1a1a",
    S: "#f7d4b0", // skin
    K: "#e8b890", // skin shadow
    H: "#5a2a1a", // hair dark
    C: "#7a3a1a", // hair mid
    P: "#ff8aa5", // lips
    W: "#ffffff", // apron
    A: "#f1ece3",
    R: "#8b1e2c", // bordeaux
    E: "#1a1612", // eyes
  },
  data: [
    "....BHHHHHHB....",
    "...BHCCHHCCHB...",
    "..BHCCSSSSCCHB..",
    "..BHCSSSSSSCHB..",
    "..BHSSEEESEESB..",
    "..BHSSSKSSSSSB..",
    "..BHSSPPPSSCB...",
    "...BHSKKKKSB....",
    "....BBBBBBB.....",
    "...BEEEEEEEB....",
    "..BWWWWWWWWWB...",
    "..BWWWWRWWWWB...",
    "..BWWWWRWWWWB...",
    "..BAWWWWWWWAB...",
    "..BAAWWWWWAAB...",
    "..BB.......BB...",
  ],
};

export function PixelAvatar({ kind, size = 96 }: Props) {
  const sprite = kind === "man" ? MAN : WOMAN;
  const style: CSSProperties = {
    width: size,
    height: size,
    imageRendering: "pixelated",
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      style={style}
      shapeRendering="crispEdges"
      role="img"
      aria-label={kind === "man" ? "Yetişkin erkek avatar" : "Yetişkin kadın avatar"}
    >
      {sprite.data.map((row, y) =>
        Array.from(row).map((ch, x) => {
          if (ch === "." || !sprite.palette[ch]) return null;
          return (
            <rect
              key={`${x}-${y}`}
              x={x}
              y={y}
              width={1}
              height={1}
              fill={sprite.palette[ch]}
            />
          );
        }),
      )}
    </svg>
  );
}
