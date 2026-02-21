import { useThemeContext } from "./ThemeProvider";

interface ThemeToggleProps {
  size?: number;
}

export function ThemeToggle({ size = 48 }: ThemeToggleProps) {
  const { resolvedMode, toggle } = useThemeContext();
  const isDark = resolvedMode === "dark";

  return (
    <>
      <style>{`
        @keyframes vt-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes vt-twinkle {
          0%   { opacity: 0.2; transform: scale(0.6); }
          100% { opacity: 1;   transform: scale(1.2); }
        }
        @keyframes vt-glow-sun {
          0%   { box-shadow: 0 0 10px 2px #FCD34D66; }
          100% { box-shadow: 0 0 22px 6px #FCD34DAA; }
        }
        @keyframes vt-glow-moon {
          0%   { box-shadow: 0 0 10px 2px #A78BFA55; }
          100% { box-shadow: 0 0 22px 6px #A78BFA99; }
        }
      `}</style>

      <button
        onClick={toggle}
        aria-label="Toggle theme"
        style={{
          width: size,
          height: size,
          borderRadius: "50%",
          border: "none",
          cursor: "pointer",
          position: "relative",
          background: isDark
            ? "radial-gradient(circle, #1E293B, #0F172A)"
            : "radial-gradient(circle, #FEF3C7, #FDE68A)",
          animation: isDark ? "vt-glow-moon 2s infinite alternate" : "vt-glow-sun 2s infinite alternate",
          transition: "background 0.5s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "visible",
        }}
      >
        {/* Sun Mode */}
        {!isDark && (
          <>
            {/* Center circle */}
            <div style={{
              width: size * 0.38,
              height: size * 0.38,
              borderRadius: "50%",
              background: "#F59E0B",
              boxShadow: "0 0 8px #FCD34D",
              zIndex: 2,
            }} />

            {/* Rays */}
            {[0,45,90,135,180,225,270,315].map((deg, i) => (
              <div key={i} style={{
                position: "absolute",
                width: 3,
                height: size * 0.18,
                borderRadius: 4,
                background: "#FCD34D",
                top: "50%",
                left: "50%",
                transformOrigin: "50% 0%",
                transform: `translateX(-50%) rotate(${deg}deg) translateY(-${size * 0.54}px)`,
                animation: "vt-spin 8s linear infinite",
                animationDelay: `${i * 0.05}s`,
                opacity: 0.9,
              }} />
            ))}
          </>
        )}

        {/* Moon Mode */}
        {isDark && (
          <>
            {/* Crescent using two circles */}
            <div style={{
              width: size * 0.45,
              height: size * 0.45,
              borderRadius: "50%",
              background: "#E2E8F0",
              boxShadow: "0 0 8px #A78BFA",
              position: "relative",
              zIndex: 2,
              overflow: "hidden",
            }}>
              {/* Inner circle to create crescent */}
              <div style={{
                position: "absolute",
                width: size * 0.38,
                height: size * 0.38,
                borderRadius: "50%",
                background: "#0F172A",
                top: -size * 0.08,
                right: -size * 0.08,
              }} />
            </div>

            {/* Stars */}
            {[
              { top: -6, right: -4, s: 4, delay: "0s" },
              { top: 4,  right: -10, s: 3, delay: "0.5s" },
              { bottom: 2, right: -8, s: 2, delay: "1s" },
              { top: -4, left: 2, s: 2, delay: "1.5s" },
            ].map((star, i) => (
              <div key={i} style={{
                position: "absolute",
                width: star.s,
                height: star.s,
                borderRadius: "50%",
                background: "#E2E8F0",
                top: star.top,
                right: (star as any).right,
                left: (star as any).left,
                bottom: (star as any).bottom,
                animation: `vt-twinkle 1.5s infinite alternate`,
                animationDelay: star.delay,
              }} />
            ))}
          </>
        )}
      </button>
    </>
  );
}