interface StatRow {
  label: string;
  value: string;
}

interface PlanetInfo {
  stats: StatRow[];
  color: string; // CSS color for the planet dot
  glow: string;  // CSS color for the glow/border
}

const PLANET_DATA: Record<string, PlanetInfo> = {
  Mercury: {
    color: 'radial-gradient(circle at 38% 38%, #b0b0b0 0%, #707070 60%, #303030 100%)',
    glow: '#aaaaaa',
    stats: [
      { label: 'Density',  value: '5.43 g/cm³' },
      { label: 'Air',      value: 'Virtually none (trace Na, O₂)' },
      { label: 'Surface',  value: 'Rocky, heavily cratered' },
      { label: 'Gravity',  value: '3.7 m/s²' },
      { label: 'Temp',     value: '-180°C to 430°C' },
      { label: 'Day',      value: '1,407.6 hours' },
      { label: 'Year',     value: '88 Earth days' },
      { label: 'Tilt',     value: '0.03° (no seasons)' },
    ],
  },
  Venus: {
    color: 'radial-gradient(circle at 38% 38%, #f5dfa0 0%, #c8a030 60%, #6b4800 100%)',
    glow: '#e6c27a',
    stats: [
      { label: 'Density',  value: '5.24 g/cm³' },
      { label: 'Air',      value: '96.5% CO₂, 3.5% N₂' },
      { label: 'Surface',  value: 'Volcanic plains & highlands' },
      { label: 'Gravity',  value: '8.87 m/s²' },
      { label: 'Temp',     value: '~462°C (hottest planet)' },
      { label: 'Day',      value: '5,832 hours (retrograde)' },
      { label: 'Year',     value: '224.7 Earth days' },
      { label: 'Tilt',     value: '177.4° (spins upside-down)' },
    ],
  },
  Earth: {
    color: 'radial-gradient(circle at 38% 38%, #6ab4ff 0%, #2060c0 55%, #0a1a40 100%)',
    glow: '#4488ff',
    stats: [
      { label: 'Density',  value: '5.51 g/cm³' },
      { label: 'Air',      value: '78% Nitrogen, 21% Oxygen' },
      { label: 'Surface',  value: '71% Water, 29% Land' },
      { label: 'Gravity',  value: '9.8 m/s²' },
      { label: 'Temp',     value: '-89°C to 57°C' },
      { label: 'Day',      value: '24 hours' },
      { label: 'Year',     value: '365.25 days' },
      { label: 'Tilt',     value: '23.5° (causes seasons)' },
    ],
  },
  Mars: {
    color: 'radial-gradient(circle at 38% 38%, #e87050 0%, #c1440e 60%, #5a1a00 100%)',
    glow: '#c1440e',
    stats: [
      { label: 'Density',  value: '3.93 g/cm³' },
      { label: 'Air',      value: '95% CO₂, 2.6% N₂, 1.9% Ar' },
      { label: 'Surface',  value: 'Red iron-oxide deserts & canyons' },
      { label: 'Gravity',  value: '3.72 m/s²' },
      { label: 'Temp',     value: '-125°C to 20°C' },
      { label: 'Day',      value: '24.6 hours' },
      { label: 'Year',     value: '687 Earth days' },
      { label: 'Tilt',     value: '25.2° (seasons like Earth)' },
    ],
  },
  Jupiter: {
    color: 'radial-gradient(circle at 38% 38%, #f0e0b0 0%, #c8a870 55%, #806030 100%)',
    glow: '#d8ca9d',
    stats: [
      { label: 'Density',  value: '1.33 g/cm³' },
      { label: 'Air',      value: '89% H₂, 10% He, trace CH₄/NH₃' },
      { label: 'Surface',  value: 'No solid surface (gas giant)' },
      { label: 'Gravity',  value: '24.79 m/s²' },
      { label: 'Temp',     value: '-145°C (cloud tops)' },
      { label: 'Day',      value: '9.9 hours (fastest rotation)' },
      { label: 'Year',     value: '11.86 Earth years' },
      { label: 'Tilt',     value: '3.1°' },
    ],
  },
  Saturn: {
    color: 'radial-gradient(circle at 38% 38%, #f0dcc0 0%, #c8a870 55%, #806848 100%)',
    glow: '#ead6b8',
    stats: [
      { label: 'Density',  value: '0.69 g/cm³ (floats on water!)' },
      { label: 'Air',      value: '96% H₂, 3% He' },
      { label: 'Surface',  value: 'No solid surface (gas giant)' },
      { label: 'Gravity',  value: '10.44 m/s²' },
      { label: 'Temp',     value: '-178°C (cloud tops)' },
      { label: 'Day',      value: '10.7 hours' },
      { label: 'Year',     value: '29.46 Earth years' },
      { label: 'Tilt',     value: '26.7° (iconic ring tilt)' },
    ],
  },
  Uranus: {
    color: 'radial-gradient(circle at 38% 38%, #c0e8e8 0%, #80c0c0 55%, #306060 100%)',
    glow: '#d1e7e7',
    stats: [
      { label: 'Density',  value: '1.27 g/cm³' },
      { label: 'Air',      value: '83% H₂, 15% He, 2% CH₄' },
      { label: 'Surface',  value: 'No solid surface (ice giant)' },
      { label: 'Gravity',  value: '8.87 m/s²' },
      { label: 'Temp',     value: '-224°C (coldest planet)' },
      { label: 'Day',      value: '17.2 hours (retrograde)' },
      { label: 'Year',     value: '84 Earth years' },
      { label: 'Tilt',     value: '97.8° (rolls on its side)' },
    ],
  },
  Neptune: {
    color: 'radial-gradient(circle at 38% 38%, #7090f0 0%, #3040c0 55%, #101060 100%)',
    glow: '#5b5ddf',
    stats: [
      { label: 'Density',  value: '1.64 g/cm³' },
      { label: 'Air',      value: '80% H₂, 19% He, 1% CH₄' },
      { label: 'Surface',  value: 'No solid surface (ice giant)' },
      { label: 'Gravity',  value: '11.15 m/s²' },
      { label: 'Temp',     value: '-218°C' },
      { label: 'Day',      value: '16.1 hours' },
      { label: 'Year',     value: '164.8 Earth years' },
      { label: 'Tilt',     value: '28.3°' },
    ],
  },
  Pluto: {
    color: 'radial-gradient(circle at 38% 38%, #e0d8c8 0%, #a09080 55%, #504030 100%)',
    glow: '#d4c4b0',
    stats: [
      { label: 'Density',  value: '1.87 g/cm³' },
      { label: 'Air',      value: 'Thin N₂, CH₄, CO (seasonal)' },
      { label: 'Surface',  value: 'Ice plains, mountains of H₂O ice' },
      { label: 'Gravity',  value: '0.62 m/s²' },
      { label: 'Temp',     value: '-233°C to -223°C' },
      { label: 'Day',      value: '153.3 hours (retrograde)' },
      { label: 'Year',     value: '248 Earth years' },
      { label: 'Tilt',     value: '122.5°' },
    ],
  },
  Eris: {
    color: 'radial-gradient(circle at 38% 38%, #f0f0f0 0%, #b0b0b0 55%, #606060 100%)',
    glow: '#eeeeee',
    stats: [
      { label: 'Density',  value: '~2.52 g/cm³' },
      { label: 'Air',      value: 'Trace methane (frozen)' },
      { label: 'Surface',  value: 'Bright methane ice' },
      { label: 'Gravity',  value: '~0.82 m/s²' },
      { label: 'Temp',     value: '~-243°C' },
      { label: 'Day',      value: '~25.9 hours' },
      { label: 'Year',     value: '558 Earth years' },
      { label: 'Tilt',     value: '~78°' },
    ],
  },
  Makemake: {
    color: 'radial-gradient(circle at 38% 38%, #e0b090 0%, #a07040 55%, #503010 100%)',
    glow: '#d4a574',
    stats: [
      { label: 'Density',  value: '~1.7 g/cm³' },
      { label: 'Air',      value: 'Virtually none' },
      { label: 'Surface',  value: 'Methane & ethane ices' },
      { label: 'Gravity',  value: '~0.5 m/s²' },
      { label: 'Temp',     value: '~-239°C' },
      { label: 'Day',      value: '~22.5 hours' },
      { label: 'Year',     value: '310 Earth years' },
      { label: 'Tilt',     value: 'Unknown' },
    ],
  },
  Haumea: {
    color: 'radial-gradient(circle at 38% 38%, #ffffff 0%, #cccccc 55%, #888888 100%)',
    glow: '#ffffff',
    stats: [
      { label: 'Density',  value: '~2.02 g/cm³' },
      { label: 'Air',      value: 'Virtually none' },
      { label: 'Surface',  value: 'Crystalline water ice' },
      { label: 'Gravity',  value: '~0.44 m/s²' },
      { label: 'Temp',     value: '~-241°C' },
      { label: 'Day',      value: '3.9 hours (egg-shaped from spin!)' },
      { label: 'Year',     value: '284 Earth years' },
      { label: 'Tilt',     value: '~126°' },
    ],
  },
};

interface PlanetInfoPanelProps {
  planetName: string;
  onClose: () => void;
}

export function PlanetInfoPanel({ planetName, onClose }: PlanetInfoPanelProps) {
  const info = PLANET_DATA[planetName];
  if (!info) return null;

  const borderColor = info.glow + '99';
  const glowColor = info.glow + '55';

  return (
    <div
      className="fixed right-5 top-1/2 -translate-y-1/2 z-50 w-72 select-none"
      style={{ pointerEvents: 'auto' }}
    >
      {/* Outer glow border */}
      <div
        className="rounded-2xl p-px"
        style={{
          background: `linear-gradient(135deg, ${borderColor} 0%, ${glowColor} 100%)`,
          boxShadow: `0 0 32px ${glowColor}, 0 0 8px ${glowColor}`,
        }}
      >
        {/* Card body */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background: 'linear-gradient(160deg, rgba(0,4,12,0.93) 0%, rgba(2,2,10,0.96) 100%)',
            backdropFilter: 'blur(16px)',
          }}
        >
          {/* Header */}
          <div
            className="relative px-5 pt-5 pb-3 flex items-center gap-3"
            style={{ borderBottom: `1px solid ${borderColor}` }}
          >
            {/* Planet icon */}
            <div
              className="w-8 h-8 rounded-full flex-shrink-0"
              style={{
                background: info.color,
                boxShadow: `0 0 12px ${glowColor}`,
              }}
            />
            <div>
              <div className="text-xs uppercase tracking-widest font-medium" style={{ color: info.glow + 'aa' }}>
                Planet
              </div>
              <div className="text-xl font-bold tracking-wide" style={{ color: info.glow }}>
                {planetName}
              </div>
            </div>
            {/* Close button */}
            <button
              onClick={onClose}
              className="ml-auto w-7 h-7 rounded-full flex items-center justify-center transition-colors text-lg leading-none"
              style={{ color: info.glow + '99' }}
              onMouseEnter={e => (e.currentTarget.style.color = info.glow)}
              onMouseLeave={e => (e.currentTarget.style.color = info.glow + '99')}
              aria-label="Close"
            >
              ×
            </button>
          </div>

          {/* Stats */}
          <ul className="px-5 py-4 space-y-2.5">
            {info.stats.map(({ label, value }) => (
              <li key={label} className="flex items-start gap-2 text-sm">
                <span
                  className="mt-0.5 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                  style={{ background: info.glow, boxShadow: `0 0 6px ${info.glow}` }}
                />
                <span>
                  <span className="font-medium" style={{ color: info.glow + 'bb' }}>{label}:&nbsp;</span>
                  <span className="text-gray-200">{value}</span>
                </span>
              </li>
            ))}
          </ul>

          {/* Footer */}
          <div className="px-5 pb-4 text-xs text-center tracking-wide" style={{ color: info.glow + '55' }}>
            Camera locked on {planetName}
          </div>
        </div>
      </div>
    </div>
  );
}
