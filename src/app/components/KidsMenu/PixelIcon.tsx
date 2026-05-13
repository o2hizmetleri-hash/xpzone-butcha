import type { CSSProperties } from "react";

type Props = { id: string; size?: number };

// 16x16 pixel-grid SVG illustrations. Each row of `data` is a string of
// hex-color-keys mapped via `palette`. "." = transparent.
type Sprite = { palette: Record<string, string>; data: string[] };

const BURGER: Sprite = {
  palette: {
    B: "#1a1a1a",
    Y: "#f5b94a", // bun
    H: "#e09a2c", // bun shadow
    R: "#c8312a", // tomato
    G: "#5ec25a", // lettuce
    K: "#5a2a1a", // meat
    M: "#8b3a1a", // meat shadow
    C: "#f7e58f", // cheese
    W: "#fff7d6", // bg
  },
  data: [
    "................",
    "................",
    "....BBBBBBBB....",
    "...BYYYHYHYYHB..",
    "..BYYYYYYHYYHYB.",
    "..BYYYYHYYYYHYB.",
    "..BGGGGGGGGGGGB.",
    "..BCCCCCCCCCCCB.",
    "..BKMMKKKMKKMKB.",
    "..BKKMKKKMKKKKB.",
    "..BMKKKMMKKKKMB.",
    "..BYYYYYHYYYYYB.",
    "..BHYYHYYYYHYYB.",
    "..BYYYYYYHYYYHB.",
    "...BBBBBBBBBBB..",
    "................",
  ],
};

const NUGGET: Sprite = {
  palette: {
    B: "#1a1a1a",
    Y: "#f0b860",
    H: "#c87a2a",
    O: "#e89a3a",
    W: "#fff7d6",
  },
  data: [
    "................",
    "................",
    ".....BBBB.......",
    "....BHYYHB......",
    "...BYOYYYHB.....",
    "..BHYYOYYYHB....",
    "..BYYHYYHYYB....",
    "...BHYYYHYB.....",
    "....BBBBBB......",
    "......BBBB......",
    ".....BHYYHB.....",
    "....BYOYYYHB....",
    "...BHYYOYYYB....",
    "....BHYYYHB.....",
    ".....BBBB.......",
    "................",
  ],
};

const ICE: Sprite = {
  palette: {
    B: "#1a1a1a",
    P: "#ffb7b2", // strawberry
    C: "#7a4a2a", // chocolate
    V: "#fff2c8", // vanilla
    T: "#d9a86a", // cone
    H: "#a8742a", // cone shadow
    W: "#fff7d6",
  },
  data: [
    ".....BBBBB......",
    "....BPPPPPB.....",
    "...BPPPPPPPB....",
    "...BPPPPPPPB....",
    "....BBPPPBB.....",
    "...BCCCCCCCB....",
    "..BCCCCCCCCCB...",
    "..BCCCCCCCCCB...",
    "...BVVVVVVVB....",
    "..BVVVVVVVVVB...",
    "...BTTTTTTTB....",
    "....BTHTHTB.....",
    "....BTHTHTB.....",
    ".....BHTHB......",
    "......BTB.......",
    ".......B........",
  ],
};

const PASTA: Sprite = {
  palette: {
    B: "#1a1a1a",
    W: "#fff2c8", // noodle
    Y: "#f0d28a", // noodle highlight
    R: "#c8312a", // sauce
    P: "#e85a4a", // sauce light
    G: "#5ec25a", // basil
  },
  data: [
    "................",
    "...BBBBBBBBB....",
    "..BWYWWYWYWWB...",
    ".BWWYWWYWYWWYB..",
    ".BYWYWYWWYWYWB..",
    ".BWWRRPRRRPRRB..",
    ".BRPRPRRPRPRRB..",
    ".BRRPRGRRPRPRB..",
    ".BRPRRRPRRPRRB..",
    ".BPRRPRRRPGRPB..",
    "..BRRPRPRRPRB...",
    "...BBBBBBBBB....",
    "................",
    "....BBBBBBB.....",
    "...BBBBBBBBB....",
    "....BBBBBBB.....",
  ],
};

const SHAKE: Sprite = {
  palette: {
    B: "#1a1a1a",
    C: "#7a4a2a", // chocolate
    K: "#5a3a1a",
    W: "#fff7d6", // whip cream
    R: "#c8312a", // cherry
    S: "#3a8ad6", // straw
  },
  data: [
    ".......RR.......",
    "......RRRR......",
    ".....BBSSBB.....",
    "....BWWWWWWB....",
    "...BWWWWWWWWB...",
    "..BBBBBBBBBBBB..",
    "..BCCCCCCCCCB...",
    "..BCKCCCCKCCB...",
    "..BCCCCCKCCCB...",
    "..BCCKCCCCKCB...",
    "..BCCCCKCCCCB...",
    "..BCKCCCCCKCB...",
    "...BCCCCCCCB....",
    "....BCCCCCB.....",
    "....BCCCCCB.....",
    ".....BBBBB......",
  ],
};

const JUICE: Sprite = {
  palette: {
    B: "#1a1a1a",
    O: "#ff9a3c",
    Y: "#ffcb5c",
    G: "#5ec25a",
    S: "#3a8ad6", // straw
  },
  data: [
    "................",
    "......GGG.......",
    ".....GGGGG......",
    "....SBBBBBS.....",
    "....BOOOOOB.....",
    "....BOYOYOB.....",
    "....BOOOOOB.....",
    "....BYOOYOB.....",
    "....BOOOOOB.....",
    "....BOYOOOB.....",
    "....BOOOOOB.....",
    "....BOOOYOB.....",
    "....BYOOOOB.....",
    "....BOOYOOB.....",
    ".....BBBBB......",
    "................",
  ],
};

const HOTDOG: Sprite = {
  palette: {
    B: "#1a1a1a",
    Y: "#f5b94a",
    H: "#c8862a",
    R: "#c8312a",
    P: "#e85a4a",
    M: "#f0d28a",
  },
  data: [
    "................",
    "................",
    "..BBBBBBBBBBBB..",
    ".BYYYYYYYYYYYHB.",
    ".BYRRRRRRRRRPYB.",
    ".BYRPRPRRPRPRYB.",
    ".BYRRRRRRRRRRYB.",
    ".BHYYYYYYYYYYHB.",
    "..BBBBBBBBBBBB..",
    "................",
    "....BBBBBBB.....",
    "...BBBBBBBBB....",
    "...BBBBBBBBB....",
    "....BBBBBBB.....",
    "................",
    "................",
  ],
};

const BROWNIE: Sprite = {
  palette: {
    B: "#1a1a1a",
    C: "#5a2a1a",
    K: "#3a1a0a",
    W: "#fff2c8", // ice cream
    Y: "#f0d28a", // sauce
  },
  data: [
    "................",
    "................",
    "....BBBBBBBB....",
    "...BCCCCCCCCB...",
    "..BCKCCCKCCCKB..",
    "..BCCCCKCCCCCB..",
    "..BCKCCCCKCCCB..",
    "..BCCCCCKCCCKB..",
    "..BCCKCCCCCKCB..",
    "...BBYYYYYYBB...",
    "...BWWWWWWWWB...",
    "..BWWWWWWWWWWB..",
    "..BWWWWWWWWWWB..",
    "...BWWWWWWWWB...",
    "....BBBBBBBB....",
    "................",
  ],
};

const KOFTE: Sprite = {
  palette: {
    B: "#1a1a1a",
    K: "#5a2a1a", // köfte dark
    M: "#7a3a1a", // köfte med
    H: "#9a4a2a", // köfte highlight
    G: "#5ec25a", // parsley
    R: "#c8312a", // tomato
    Y: "#f5b94a", // fries
    W: "#fff7d6",
  },
  data: [
    "................",
    "................",
    "....BBB....BBB..",
    "...BKMKB..BKMKB.",
    "..BKMHHMKBKMHMK.",
    "..BMKHMKMBKHMKMB",
    "..BKMMHKBBKMMKHB",
    "...BKMKB..BKMKB.",
    "....BBB....BBB..",
    "................",
    "..GG..R...G..R..",
    ".GBBG.RR.GBBG.RR",
    ".G..G.R..G..G.R.",
    "..GG..R...GG..R.",
    "................",
    "................",
  ],
};

const FRIES: Sprite = {
  palette: {
    B: "#1a1a1a",
    Y: "#f5b94a",
    H: "#c87a2a",
    R: "#c8312a",
    W: "#fff7d6",
  },
  data: [
    "....Y.Y.YY......",
    "....Y.Y.YY......",
    "....Y.Y.YY......",
    "....Y.Y.YY......",
    "....YHYHYH......",
    "....YHYHYH......",
    "..BBYHYHYHBB....",
    ".BRRRRRRRRRRB...",
    ".BRWRWRWRWRWB...",
    ".BRWRWRWRWRWB...",
    ".BRRRRRRRRRRB...",
    ".BRWRWRWRWRWB...",
    ".BRRRRRRRRRRB...",
    "..BRRRRRRRRB....",
    "...BBBBBBBB.....",
    "................",
  ],
};

const sprites: Record<string, Sprite> = {
  miniburger: BURGER,
  burger_et: BURGER,
  burger_tavuk: NUGGET,
  butcha_burger: BURGER,
  butcha_kofte: KOFTE,
  fries: FRIES,
  nugget: NUGGET,
  minisignik: NUGGET,
  spaghetti: PASTA,
  macmini: PASTA,
  dondurma: ICE,
  browni: BROWNIE,
  kola: SHAKE,
  limonata: JUICE,
  milkshake: SHAKE,
  meyvesuyu: JUICE,
  hotdog: HOTDOG,
};

export function PixelIcon({ id, size = 96 }: Props) {
  const sprite = sprites[id] ?? BURGER;
  const cell = 1;
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
      aria-hidden
    >
      {sprite.data.map((row, y) =>
        Array.from(row).map((ch, x) => {
          if (ch === "." || !sprite.palette[ch]) return null;
          return (
            <rect
              key={`${x}-${y}`}
              x={x}
              y={y}
              width={cell}
              height={cell}
              fill={sprite.palette[ch]}
            />
          );
        }),
      )}
    </svg>
  );
}
