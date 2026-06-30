// Stylised map of Africa with 30 capital-city nodes connected by glowing lines.
// Pure SVG (equirectangular projection); animation is CSS so no client JS needed.

// Coarse continent coastline traced as [lng, lat] points (clockwise).
const BOUNDARY: [number, number][] = [
  [-5.9, 35.8], [-1.0, 35.7], [3.0, 36.9], [8.0, 37.1], [11.1, 37.1], [10.0, 34.0],
  [15.5, 31.7], [20.0, 31.0], [25.0, 32.0], [29.9, 31.2], [32.3, 31.2], [34.2, 28.0],
  [35.6, 23.9], [37.0, 21.0], [39.0, 15.0], [43.3, 11.5], [44.0, 10.4], [48.9, 11.3],
  [51.3, 11.8], [49.5, 7.0], [46.0, 2.5], [42.8, -1.0], [40.1, -3.0], [39.3, -6.8],
  [40.5, -10.5], [40.7, -14.5], [36.9, -17.8], [35.0, -20.0], [35.5, -23.9], [32.9, -25.9],
  [31.0, -29.0], [27.9, -33.0], [25.6, -33.9], [22.0, -34.0], [20.0, -34.8], [18.4, -34.3],
  [17.0, -32.0], [15.0, -26.6], [13.4, -22.7], [11.8, -17.9], [13.0, -12.5], [13.2, -8.8],
  [12.2, -6.0], [9.3, -0.7], [9.8, 2.0], [8.5, 4.5], [5.6, 4.3], [2.7, 6.4], [0.0, 5.8],
  [-3.0, 4.9], [-7.5, 4.4], [-11.5, 6.4], [-13.3, 8.5], [-16.0, 12.0], [-17.5, 14.7],
  [-16.5, 19.0], [-13.0, 21.0], [-9.0, 28.0], [-9.8, 31.0], [-7.6, 33.6],
];

type Cap = { n: string; lat: number; lng: number; host?: boolean };
const CAPITALS: Cap[] = [
  { n: "Algiers", lat: 36.75, lng: 3.04 },
  { n: "Tunis", lat: 36.8, lng: 10.18 },
  { n: "Tripoli", lat: 32.89, lng: 13.19 },
  { n: "Cairo", lat: 30.04, lng: 31.24 },
  { n: "Rabat", lat: 34.02, lng: -6.83 },
  { n: "Nouakchott", lat: 18.08, lng: -15.98 },
  { n: "Dakar", lat: 14.69, lng: -17.45 },
  { n: "Bamako", lat: 12.64, lng: -8.0 },
  { n: "Niamey", lat: 13.51, lng: 2.11 },
  { n: "Ouagadougou", lat: 12.37, lng: -1.53 },
  { n: "Conakry", lat: 9.64, lng: -13.58 },
  { n: "Accra", lat: 5.6, lng: -0.19 },
  { n: "Abuja", lat: 9.07, lng: 7.49, host: true },
  { n: "Yaoundé", lat: 3.85, lng: 11.5 },
  { n: "Libreville", lat: 0.42, lng: 9.47 },
  { n: "N'Djamena", lat: 12.13, lng: 15.06 },
  { n: "Khartoum", lat: 15.5, lng: 32.56 },
  { n: "Addis Ababa", lat: 9.03, lng: 38.74 },
  { n: "Mogadishu", lat: 2.04, lng: 45.34 },
  { n: "Kampala", lat: 0.35, lng: 32.58 },
  { n: "Nairobi", lat: -1.29, lng: 36.82 },
  { n: "Kigali", lat: -1.94, lng: 30.06 },
  { n: "Kinshasa", lat: -4.32, lng: 15.31 },
  { n: "Luanda", lat: -8.84, lng: 13.23 },
  { n: "Lusaka", lat: -15.42, lng: 28.28 },
  { n: "Harare", lat: -17.83, lng: 31.05 },
  { n: "Maputo", lat: -25.97, lng: 32.57 },
  { n: "Windhoek", lat: -22.56, lng: 17.08 },
  { n: "Pretoria", lat: -25.75, lng: 28.19 },
  { n: "Cape Town", lat: -33.92, lng: 18.42 },
];

// Equirectangular projection into the viewBox.
const VB = { w: 720, h: 760 };
const LON = { min: -19, max: 52 };
const LAT = { min: -36, max: 38 };
const px = (lng: number) => ((lng - LON.min) / (LON.max - LON.min)) * VB.w;
const py = (lat: number) => ((LAT.max - lat) / (LAT.max - LAT.min)) * VB.h;

const nodes = CAPITALS.map((c) => ({ ...c, x: px(c.lng), y: py(c.lat) }));
const outline = "M " + BOUNDARY.map(([lng, lat]) => `${px(lng).toFixed(1)} ${py(lat).toFixed(1)}`).join(" L ") + " Z";

// Edges: connect each capital to its 2 nearest, plus a few long-haul trunk routes.
const edgeSet = new Set<string>();
const edges: [number, number][] = [];
const addEdge = (a: number, b: number) => {
  if (a === b) return;
  const key = a < b ? `${a}-${b}` : `${b}-${a}`;
  if (edgeSet.has(key)) return;
  edgeSet.add(key);
  edges.push([a, b]);
};
nodes.forEach((a, i) => {
  nodes
    .map((b, j) => ({ j, d: (a.x - b.x) ** 2 + (a.y - b.y) ** 2 }))
    .filter((o) => o.j !== i)
    .sort((p, q) => p.d - q.d)
    .slice(0, 2)
    .forEach((o) => addEdge(i, o.j));
});
const idx = (name: string) => nodes.findIndex((n) => n.n === name);
([
  ["Abuja", "Cairo"], ["Abuja", "Nairobi"], ["Dakar", "Abuja"], ["Cairo", "Addis Ababa"],
  ["Nairobi", "Pretoria"], ["Kinshasa", "Nairobi"], ["Cairo", "Algiers"], ["Abuja", "Pretoria"],
] as [string, string][]).forEach(([a, b]) => addEdge(idx(a), idx(b)));

// Glowing data pulses that travel along each route (alternating direction).
const beams = edges.map(([a, b], i) => {
  const A = nodes[a], B = nodes[b];
  const len = Math.hypot(B.x - A.x, B.y - A.y);
  const dur = Math.min(4.5, Math.max(1.8, len / 80));
  const p1 = `${A.x.toFixed(1)} ${A.y.toFixed(1)}`;
  const p2 = `${B.x.toFixed(1)} ${B.y.toFixed(1)}`;
  return {
    path: i % 2 === 0 ? `M ${p1} L ${p2}` : `M ${p2} L ${p1}`,
    dur: `${dur.toFixed(2)}s`,
    begin: `${((i % 11) * 0.3).toFixed(2)}s`,
  };
});

export function AfricaNetwork() {
  return (
    <svg viewBox={`0 0 ${VB.w} ${VB.h}`} className="h-full w-full" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Map of Africa connecting 30 capital cities">
      <defs>
        <linearGradient id="afFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="rgba(46,123,255,0.10)" />
          <stop offset="1" stopColor="rgba(139,92,246,0.06)" />
        </linearGradient>
        <filter id="afGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="afBeam" x="-400%" y="-400%" width="900%" height="900%">
          <feGaussianBlur stdDeviation="2.4" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* continent */}
      <path d={outline} fill="url(#afFill)" stroke="rgba(46,123,255,0.45)" strokeWidth={1.5} strokeLinejoin="round" />

      {/* connecting routes */}
      <g stroke="rgba(46,123,255,0.28)" strokeWidth={1} fill="none">
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            strokeDasharray="3 9"
            style={{ animation: `mapdash 1.6s linear infinite`, animationDelay: `${(i % 7) * 0.18}s` }}
          />
        ))}
      </g>

      {/* glowing pulses travelling along the routes */}
      <g filter="url(#afBeam)">
        {beams.map((bm, i) => (
          <circle key={i} r={2.3} fill="#22d3ee">
            <animateMotion dur={bm.dur} begin={bm.begin} repeatCount="indefinite" path={bm.path} />
            <animate attributeName="opacity" dur={bm.dur} begin={bm.begin} repeatCount="indefinite" values="0;1;1;0" keyTimes="0;0.12;0.82;1" />
          </circle>
        ))}
      </g>

      {/* capital nodes + labels */}
      <g>
        {nodes.map((nd, i) => {
          const rightEdge = nd.x > VB.w * 0.66;
          return (
            <g key={nd.n}>
              <circle cx={nd.x} cy={nd.y} r={nd.host ? 9 : 6} fill={nd.host ? "rgba(139,92,246,0.35)" : "rgba(46,123,255,0.3)"} />
              <circle
                cx={nd.x}
                cy={nd.y}
                r={nd.host ? 3.4 : 2}
                fill={nd.host ? "#c4b5fd" : "#7fb0ff"}
                filter="url(#afGlow)"
                style={{ animation: `mappulse 3s ease-in-out infinite`, animationDelay: `${(i % 9) * 0.3}s` }}
              />
              <text
                x={rightEdge ? nd.x - 6 : nd.x + 6}
                y={nd.y + 3.2}
                textAnchor={rightEdge ? "end" : "start"}
                fontSize={nd.host ? 13 : 10.5}
                fontWeight={nd.host ? 700 : 500}
                fill={nd.host ? "#ddd6fe" : "rgba(200,214,255,0.62)"}
              >
                {nd.n}
              </text>
            </g>
          );
        })}
      </g>
    </svg>
  );
}
