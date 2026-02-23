import { useState } from "react";

const skillSections = [
  {
    label: "Core Web",
    pills: ["HTML5", "CSS3", "Flexbox", "CSS Grid", "SASS"],
  },
  {
    label: "JavaScript",
    pills: ["ES6+", "TypeScript", "Async/Await", "DOM APIs"],
  },
  {
    label: "Frontend",
    pills: ["React", "Next.js", "Redux", "Tailwind CSS"],
  },
  {
    label: "Backend",
    pills: ["Node.js", "Express", "REST API", "MongoDB", "SQL"],
  },
  {
    label: "Tooling & Deploy",
    pills: ["Git & GitHub", "Vite", "Vercel", "Figma", "CI/CD"],
  },
];

const levelDots = 5;
const filledDots = 5;

export default function SkillCard() {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400;500&display=swap');

        .skill-card-wrap {
          font-family: 'Syne', sans-serif;
          min-height: 100vh;
          background-color: #0a0a0f;
          background-image:
            radial-gradient(ellipse at 20% 20%, rgba(167,139,250,0.06) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 80%, rgba(52,211,153,0.04) 0%, transparent 50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 60px 24px;
        }

        .mono { font-family: 'DM Mono', monospace; }

        .card {
          position: relative;
          background: #111118;
          border: 1px solid #1e1e2e;
          border-radius: 16px;
          padding: 32px;
          overflow: hidden;
          width: 100%;
          max-width: 520px;
          cursor: pointer;
          transition: transform 0.3s ease, border-color 0.3s ease;
          animation: fadeUp 0.6s ease both;
        }

        .card.hovered {
          transform: translateY(-6px);
          border-color: #a78bfa;
        }

        .card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #a78bfa, transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .card.hovered::before { opacity: 1; }

        .card::after {
          content: '';
          position: absolute;
          top: -60px; right: -60px;
          width: 160px; height: 160px;
          border-radius: 50%;
          background: radial-gradient(circle, #a78bfa 0%, transparent 70%);
          opacity: 0.06;
          transition: opacity 0.3s ease;
        }

        .card.hovered::after { opacity: 0.14; }

        .pill {
          font-family: 'DM Mono', monospace;
          font-size: 0.72rem;
          padding: 5px 12px;
          border-radius: 9999px;
          background: rgba(167,139,250,0.10);
          border: 1px solid rgba(167,139,250,0.20);
          color: rgba(167,139,250,0.95);
          letter-spacing: 0.05em;
          transition: background 0.2s ease, border-color 0.2s ease;
          white-space: nowrap;
        }

        .card.hovered .pill {
          background: rgba(167,139,250,0.18);
          border-color: rgba(167,139,250,0.35);
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .gradient-text {
          background: linear-gradient(135deg, #e8e8f0 0%, #5a5a7a 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      <div className="skill-card-wrap">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <h1
            className="gradient-text"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              marginBottom: "12px",
            }}
          >
            My Skills
          </h1>
          <p
            className="mono"
            style={{
              fontSize: "0.85rem",
              color: "#5a5a7a",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            // what I bring to the table
          </p>
        </div>

        {/* Card */}
        <div
          className={`card ${hovered ? "hovered" : ""}`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Level badge */}
          <div
            className="mono"
            style={{
              position: "absolute",
              top: 28,
              right: 28,
              fontSize: "0.68rem",
              color: "#5a5a7a",
              letterSpacing: "0.08em",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            Expert
            <div style={{ display: "flex", gap: 3 }}>
              {Array.from({ length: levelDots }).map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: i < filledDots ? "#a78bfa" : "#1e1e2e",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Icon */}
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.4rem",
              marginBottom: 22,
              background: "rgba(167,139,250,0.15)",
              border: "1px solid rgba(167,139,250,0.25)",
            }}
          >
            🌐
          </div>

          {/* Tag */}
          <span
            className="mono"
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#a78bfa",
              marginBottom: 10,
              display: "block",
            }}
          >
            Full Stack
          </span>

          {/* Title */}
          <div
            style={{
              fontSize: "1.35rem",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              marginBottom: 12,
              color: "#e8e8f0",
            }}
          >
            Web Development
          </div>

          {/* Description */}
          <p
            className="mono"
            style={{
              fontSize: "0.8rem",
              lineHeight: 1.75,
              color: "#5a5a7a",
              marginBottom: 24,
            }}
          >
            Building modern, responsive, and scalable web apps from frontend to
            backend — end to end.
          </p>

          {/* Skill Sections */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {skillSections.map((section) => (
              <div key={section.label}>
                <div
                  className="mono"
                  style={{
                    fontSize: "0.68rem",
                    color: "#5a5a7a",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: 8,
                  }}
                >
                  {section.label}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {section.pills.map((pill) => (
                    <span key={pill} className="pill">
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer hint */}
        <div
          className="mono"
          style={{
            marginTop: 48,
            fontSize: "0.78rem",
            color: "#5a5a7a",
            letterSpacing: "0.05em",
          }}
        >
          <span
            style={{
              display: "inline-block",
              padding: "6px 14px",
              border: "1px solid #1e1e2e",
              borderRadius: 8,
              background: "#111118",
            }}
          >
            ✏️ &nbsp;Edit skillSections[] to customise your skills
          </span>
        </div>
      </div>
    </>
  );
}
