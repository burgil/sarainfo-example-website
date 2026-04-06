interface EarthInfoPanelProps {
  onClose: () => void;
}

const stats = [
  { label: 'Density',  value: '5.51 g/cm³' },
  { label: 'Air',      value: '78% Nitrogen, 21% Oxygen' },
  { label: 'Surface',  value: '71% Water, 29% Land' },
  { label: 'Gravity',  value: '9.8 m/s²' },
  { label: 'Temp',     value: '-89°C to 57°C' },
  { label: 'Day',      value: '24 hours' },
  { label: 'Year',     value: '365.25 days' },
  { label: 'Tilt',     value: '23.5° (causes seasons)' },
];

export function EarthInfoPanel({ onClose }: EarthInfoPanelProps) {
  return (
    <div
      className="fixed right-5 top-1/2 -translate-y-1/2 z-50 w-72 select-none"
      style={{ pointerEvents: 'auto' }}
    >
      {/* Outer glow ring */}
      <div
        className="rounded-2xl p-px"
        style={{
          background: 'linear-gradient(135deg, #00ff6688 0%, #00cc4488 50%, #006622aa 100%)',
          boxShadow: '0 0 32px #00ff6644, 0 0 8px #00ff6622',
        }}
      >
        {/* Card body */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background: 'linear-gradient(160deg, rgba(0,12,4,0.92) 0%, rgba(0,6,18,0.95) 100%)',
            backdropFilter: 'blur(16px)',
          }}
        >
          {/* Header */}
          <div
            className="relative px-5 pt-5 pb-3 flex items-center gap-3"
            style={{
              borderBottom: '1px solid rgba(0,255,102,0.18)',
            }}
          >
            {/* Planet dot */}
            <div
              className="w-8 h-8 rounded-full flex-shrink-0"
              style={{
                background: 'radial-gradient(circle at 38% 38%, #6ab4ff 0%, #2060c0 55%, #0a1a40 100%)',
                boxShadow: '0 0 12px #4488ff66',
              }}
            />
            <div>
              <div className="text-xs uppercase tracking-widest text-green-400/70 font-medium">
                Planet
              </div>
              <div
                className="text-xl font-bold tracking-wide"
                style={{ color: '#a8ffcc' }}
              >
                Earth
              </div>
            </div>
            {/* Close button */}
            <button
              onClick={onClose}
              className="ml-auto w-7 h-7 rounded-full flex items-center justify-center text-green-400/60 hover:text-green-300 hover:bg-green-400/10 transition-colors text-lg leading-none"
              aria-label="Close"
            >
              ×
            </button>
          </div>

          {/* Stats list */}
          <ul className="px-5 py-4 space-y-2.5">
            {stats.map(({ label, value }) => (
              <li key={label} className="flex items-start gap-2 text-sm">
                <span
                  className="mt-0.5 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                  style={{ background: '#00ff66', boxShadow: '0 0 6px #00ff66' }}
                />
                <span>
                  <span className="text-green-300/70 font-medium">{label}:&nbsp;</span>
                  <span className="text-gray-200">{value}</span>
                </span>
              </li>
            ))}
          </ul>

          {/* Footer hint */}
          <div
            className="px-5 pb-4 text-xs text-green-400/40 text-center tracking-wide"
          >
            Camera locked on Earth
          </div>
        </div>
      </div>
    </div>
  );
}
