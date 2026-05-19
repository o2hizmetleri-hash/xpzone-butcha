import { PixelQRCode } from "./PixelQRCode";

const EMAAR_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Butcha+Steakhouse+Emaar+Square+Mall+Istanbul";

export function PixelLocationCard() {
  return (
    <section className="px-4 pb-6 pt-2 sm:px-8" aria-label="Konum ve QR">
      <div className="mx-auto max-w-4xl">
        <div className="border-4 border-pixel-ink bg-cream shadow-[6px_6px_0_var(--color-pixel-ink)]">
          {/* Üst başlık şeridi */}
          <div
            className="flex items-center justify-between border-b-4 border-pixel-ink bg-pixel-ink px-3 py-1.5"
            style={{ fontFamily: "var(--font-pixel-display)" }}
          >
            <span className="text-[10px] tracking-wider text-pixel-sun sm:text-xs">
              ★ KONUM
            </span>
            <span className="text-[10px] tracking-wider text-pixel-sun sm:text-xs">
              EMAAR · TERAS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr]">
            {/* Sol: Mini-map */}
            <div className="border-b-4 border-pixel-ink p-4 sm:p-5 md:border-b-0 md:border-r-4">
              <PixelMiniMap />
              <a
                href={EMAAR_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1 border-2 border-pixel-ink bg-pixel-mint px-2 py-1 text-xs text-pixel-ink shadow-[2px_2px_0_var(--color-pixel-ink)] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5"
                style={{ fontFamily: "var(--font-pixel-display)" }}
              >
                ▸ HARİTADA AÇ
              </a>
              <p
                className="mt-2 text-base leading-snug text-pixel-ink sm:text-lg"
                style={{ fontFamily: "var(--font-pixel-body)" }}
              >
                5 NUMARALI GİRİŞİN SOLU · TERAS KAT
              </p>
            </div>

            {/* Sağ: QR */}
            <PixelQRCode />
          </div>
        </div>
      </div>
    </section>
  );
}

function PixelMiniMap() {
  return (
    <div className="relative w-full">
      <svg
        viewBox="0 0 200 130"
        role="img"
        aria-label="Butcha konum haritası: Emaar Square Mall teras katı, 5 numaralı girişin solunda"
        className="block h-auto w-full"
        shapeRendering="crispEdges"
        style={{ imageRendering: "pixelated" }}
      >
        {/* Zemin pikseli (dama deseni hissi) */}
        <rect x="0" y="0" width="200" height="130" fill="#b5deff" />
        {Array.from({ length: 13 }).map((_, row) =>
          Array.from({ length: 20 }).map((_, col) =>
            (row + col) % 2 === 0 ? (
              <rect
                key={`bg-${row}-${col}`}
                x={col * 10}
                y={row * 10}
                width="10"
                height="10"
                fill="#a8d4f5"
              />
            ) : null,
          ),
        )}

        {/* Yol pikselleri alt kenar boyunca */}
        <rect x="0" y="110" width="200" height="20" fill="#5c544a" />
        {/* Yol şerit pikselleri */}
        {[10, 50, 90, 130, 170].map((x) => (
          <rect key={`stripe-${x}`} x={x} y={119} width="20" height="4" fill="#ffe08a" />
        ))}

        {/* Emaar binası dış hatları */}
        <rect x="20" y="22" width="160" height="84" fill="#ece4d6" stroke="#1a1a1a" strokeWidth="3" />

        {/* Teras katı (üst bant) - vurgulu */}
        <rect x="22" y="24" width="156" height="22" fill="#a8e6cf" />
        <rect x="22" y="44" width="156" height="2" fill="#1a1a1a" />

        {/* Teras "ağaçları" / dekoratif pikseller */}
        {[34, 58, 82, 106, 130, 154].map((x) => (
          <g key={`tree-${x}`}>
            <rect x={x} y="28" width="6" height="6" fill="#2e8b57" />
            <rect x={x + 2} y="34" width="2" height="4" fill="#5c4a2e" />
          </g>
        ))}

        {/* TERAS etiketi */}
        <text
          x="100"
          y="58"
          textAnchor="middle"
          fontSize="8"
          fontFamily="var(--font-pixel-display), monospace"
          fill="#1a1a1a"
        >
          TERAS KAT
        </text>

        {/* Alt katlar - basit pencere şeritleri */}
        {[68, 80, 92].map((y) => (
          <g key={`floor-${y}`}>
            {[28, 44, 60, 76, 92, 108, 124, 140, 156].map((x) => (
              <rect key={`win-${y}-${x}`} x={x} y={y} width="8" height="6" fill="#b5deff" stroke="#1a1a1a" strokeWidth="1" />
            ))}
          </g>
        ))}

        {/* 5 numaralı kapılar (alt kenar) */}
        {[
          { num: 1, x: 32 },
          { num: 2, x: 60 },
          { num: 3, x: 88 },
          { num: 4, x: 116 },
          { num: 5, x: 152 },
        ].map((door) => (
          <g key={`door-${door.num}`}>
            <rect
              x={door.x}
              y={100}
              width="12"
              height="10"
              fill={door.num === 5 ? "#ffb7b2" : "#faf7f2"}
              stroke="#1a1a1a"
              strokeWidth="2"
            />
            <text
              x={door.x + 6}
              y={108}
              textAnchor="middle"
              fontSize="7"
              fontFamily="var(--font-pixel-display), monospace"
              fill="#1a1a1a"
            >
              {door.num}
            </text>
          </g>
        ))}

        {/* Butcha marker - 5. kapının solunda, teras katında */}
        {/* 5. kapı x=152, sol = ~136 civarı, teras y=30 */}
        <g>
          {/* Bağlantı çizgisi (kapı 5'ten Butcha'ya doğru ok) */}
          <rect x="138" y="48" width="2" height="50" fill="#8b1e2c" />
          <rect x="138" y="48" width="14" height="2" fill="#8b1e2c" />

          {/* Pin gölgesi */}
          <rect x="124" y="34" width="18" height="14" fill="#1a1a1a" opacity="0.25" />
          {/* Pin gövdesi (yanıp sönen) */}
          <g className="pixel-blink">
            <rect x="122" y="30" width="18" height="14" fill="#8b1e2c" stroke="#1a1a1a" strokeWidth="2" />
            <text
              x="131"
              y="40"
              textAnchor="middle"
              fontSize="7"
              fontFamily="var(--font-pixel-display), monospace"
              fill="#ffe08a"
            >
              BUTCHA
            </text>
            {/* Pin ucu */}
            <rect x="128" y="44" width="6" height="3" fill="#8b1e2c" stroke="#1a1a1a" strokeWidth="1" />
          </g>
        </g>

        {/* "SEN BURADASIN" küçük oyuncu pikseli (5. kapının önünde) */}
        <g className="pixel-bounce">
          <rect x="156" y="113" width="4" height="6" fill="#1a1a1a" />
          <rect x="155" y="116" width="6" height="2" fill="#1a1a1a" />
        </g>

        {/* Pusula (sağ üst köşe) */}
        <g>
          <rect x="180" y="4" width="14" height="14" fill="#faf7f2" stroke="#1a1a1a" strokeWidth="1" />
          <text
            x="187"
            y="14"
            textAnchor="middle"
            fontSize="8"
            fontFamily="var(--font-pixel-display), monospace"
            fill="#1a1a1a"
          >
            N↑
          </text>
        </g>
      </svg>
    </div>
  );
}
