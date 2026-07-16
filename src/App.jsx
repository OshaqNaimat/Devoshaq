import { useEffect, useRef, useState, useCallback } from "react";
import Skills from "./Skills";
import Projects from "./Projects";

/* ─────────────────────────────────────────────
   Antigravity canvas hook
───────────────────────────────────────────── */
function useAntigravity(canvasRef, mode) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });

    let W,
      H,
      t = 0,
      animId;
    const mouse = { x: -999, y: -999 };

    const COLORS = [
      "#7c6dff",
      "#a78bfa",
      "#818cf8",
      "#4fc3f7",
      "#38bdf8",
      "#67e8f9",
      "#e879f9",
      "#c084fc",
      "#f0abfc",
    ];
    const TRAIL_MAX = 10;
    const CELL = 80;

    function resize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }
    resize();

    const onResize = () => {
      resize();
      particles.forEach((p) => p.reset(true));
    };
    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onLeave = () => {
      mouse.x = -999;
      mouse.y = -999;
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);

    class Particle {
      constructor() {
        this.trail = [];
        this.reset(true);
      }
      reset(init) {
        this.x = Math.random() * W;
        this.y = init ? Math.random() * H : H + 10;
        this.r = Math.random() * 1.8 + 0.6;
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
        this.alpha = Math.random() * 0.5 + 0.28;
        this.vx = (Math.random() - 0.5) * 1.2;
        this.vy = -(Math.random() * 1.2 + 0.4);
        this.baseVy = this.vy;
        this.angle = Math.random() * Math.PI * 2;
        this.orbitR = Math.random() * 80 + 35;
        this.orbitSpeed = (Math.random() - 0.5) * 0.028;
        this.orbitAngle = Math.random() * Math.PI * 2;
        this.trail.length = 0;
      }
      update(currentMode) {
        this.trail.push(this.x, this.y);
        if (this.trail.length > TRAIL_MAX * 2) this.trail.splice(0, 2);

        if (currentMode === "float") {
          const dx = this.x - mouse.x,
            dy = this.y - mouse.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 12100) {
            const d = Math.sqrt(d2),
              f = (110 - d) / 110;
            this.vx += (dx / d) * f * 0.9;
            this.vy += (dy / d) * f * 0.9;
          }
          this.vx *= 0.93;
          this.vy = this.vy * 0.93 + this.baseVy * 0.07;
          this.x += this.vx;
          this.y += this.vy;
          if (this.y < -10) this.reset(false);
          if (this.x < -10) this.x = W + 10;
          if (this.x > W + 10) this.x = -10;
        }
        // else if (currentMode === "explode") {
        //   const dx = this.x - mouse.x,
        //     dy = this.y - mouse.y;
        //   const d2 = dx * dx + dy * dy;
        //   if (d2 < 16900 && mouse.x > 0) {
        //     const d = Math.sqrt(d2),
        //       f = (130 - d) / 130;
        //     this.vx += (dx / d) * f * 1.4;
        //     this.vy += (dy / d) * f * 1.4;
        //   }
        //   this.vy += 0.07;
        //   this.vx *= 0.97;
        //   this.vy *= 0.97;
        //   this.x += this.vx;
        //   this.y += this.vy;
        //   if (
        //     this.y > H + 20 ||
        //     this.y < -20 ||
        //     this.x < -20 ||
        //     this.x > W + 20
        //   )
        //     this.reset(false);
        // } else if (currentMode === "orbit") {
        //   this.orbitAngle += this.orbitSpeed;
        //   const cx = W / 2,
        //     cy = H / 2;
        //   const tx =
        //     cx +
        //     Math.cos(this.orbitAngle + t * 0.0004) *
        //       (this.orbitR + Math.sin(t * 0.001 + this.angle) * 36);
        //   const ty =
        //     cy + Math.sin(this.orbitAngle + t * 0.0004) * (this.orbitR * 0.52);
        //   if (mouse.x > 0) {
        //     const ddx = mouse.x - this.x,
        //       ddy = mouse.y - this.y;
        //     const md = Math.hypot(ddx, ddy);
        //     if (md < 160) {
        //       this.x += (ddx / md) * 1.2;
        //       this.y += (ddy / md) * 1.2;
        //     }
        //   }
        //   this.x += (tx - this.x) * 0.08;
        //   this.y += (ty - this.y) * 0.08;
        // } else if (currentMode === "vortex") {
        //   const cx = mouse.x > 0 ? mouse.x : W / 2;
        //   const cy = mouse.y > 0 ? mouse.y : H / 2;
        //   const dx = this.x - cx,
        //     dy = this.y - cy;
        //   const d = Math.hypot(dx, dy),
        //     angle = Math.atan2(dy, dx);
        //   const pull = Math.min(4.0, 700 / (d + 1));
        //   this.vx += -Math.sin(angle) * pull * 0.1 - dx * 0.003;
        //   this.vy += Math.cos(angle) * pull * 0.1 - dy * 0.003;
        //   this.vx *= 0.94;
        //   this.vy *= 0.94;
        //   this.x += this.vx;
        //   this.y += this.vy;
        // }
      }
      draw() {
        const tl = this.trail;
        if (tl.length >= 4) {
          ctx.beginPath();
          ctx.moveTo(tl[0], tl[1]);
          for (let i = 2; i < tl.length; i += 2) ctx.lineTo(tl[i], tl[i + 1]);
          ctx.strokeStyle = this.color;
          ctx.lineWidth = this.r * 0.4;
          ctx.globalAlpha = this.alpha * 0.18;
          ctx.stroke();
        }
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 6.2832);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.alpha;
        ctx.fill();
      }
    }

    let grid = {};
    function buildGrid() {
      grid = {};
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const key = Math.floor(p.x / CELL) + "_" + Math.floor(p.y / CELL);
        (grid[key] || (grid[key] = [])).push(i);
      }
    }
    function drawConnections() {
      const maxD2 = 6400;
      ctx.lineWidth = 0.35;
      buildGrid();
      for (const key in grid) {
        const [gx, gy] = key.split("_").map(Number);
        const cellA = grid[key];
        for (const nk of [
          key,
          gx + 1 + "_" + gy,
          gx + "_" + (gy + 1),
          gx - 1 + "_" + (gy + 1),
          gx + 1 + "_" + (gy + 1),
        ]) {
          const cellB = grid[nk];
          if (!cellB) continue;
          for (const i of cellA) {
            for (const j of cellB) {
              if (i >= j) continue;
              const pi = particles[i],
                pj = particles[j];
              const dx = pi.x - pj.x,
                dy = pi.y - pj.y,
                d2 = dx * dx + dy * dy;
              if (d2 < maxD2) {
                ctx.beginPath();
                ctx.moveTo(pi.x, pi.y);
                ctx.lineTo(pj.x, pj.y);
                ctx.strokeStyle = pi.color;
                ctx.globalAlpha = (1 - d2 / maxD2) * 0.09;
                ctx.stroke();
              }
            }
          }
        }
      }
      ctx.globalAlpha = 1;
    }

    const COUNT = window.innerWidth < 768 ? 70 : 110;
    const particles = Array.from({ length: COUNT }, () => new Particle());

    // expose particles for mode-change burst
    canvas._particles = particles;

    function loop() {
      const currentMode = canvas._mode || "float";
      ctx.fillStyle = "rgba(17,24,39,0.2)"; // matches bg-gray-900
      ctx.fillRect(0, 0, W, H);
      t++;
      drawConnections();
      ctx.globalAlpha = 1;
      for (const p of particles) {
        p.update(currentMode);
        p.draw();
      }
      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(loop);
    }
    loop();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, [canvasRef]);
}

/* ─────────────────────────────────────────────
   Mode Switcher Component
───────────────────────────────────────────── */
// const MODES = ["float", "explode", "orbit", "vortex"];

// function ModeSwitcher({ mode, onChange }) {
//   return (
//     <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex gap-2 bg-black/50 backdrop-blur-md border border-white/10 rounded-full px-2 py-1.5">
//       {MODES.map((m) => (
//         <button
//           key={m}
//           onClick={() => onChange(m)}
//           className={`text-[10px] tracking-widest uppercase px-4 py-1.5 rounded-full transition-all duration-200 font-mono
//             ${
//               mode === m
//                 ? "bg-purple-600/40 text-purple-300 border border-purple-500/50"
//                 : "text-white/40 hover:text-white/75"
//             }`}
//         >
//           {m}
//         </button>
//       ))}
//     </div>
//   );
// }

/* ─────────────────────────────────────────────
   Main App
───────────────────────────────────────────── */
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [Open, setOpen] = useState(false);
  const [mode, setMode] = useState("float");
  const revealRef = useRef([]);
  const formRef = useRef(null);
  const msgRef = useRef(null);
  const canvasRef = useRef(null);

  // Start canvas animation
  useAntigravity(canvasRef, mode);

  // Sync mode to canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas._mode = mode;
    // burst on explode switch
    // if (mode === "explode" && canvas._particles) {
    //   canvas._particles.forEach((p) => {
    //     p.vx = (Math.random() - 0.5) * 14;
    //     p.vy = (Math.random() - 0.5) * 14 - 5;
    //   });
    // }
  }, [mode]);

  // Scroll Reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    revealRef.current.forEach((el) => el && observer.observe(el));
  }, []);

  // Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const msg = msgRef.current;
    msg.classList.add("hidden");
    const data = new FormData(formRef.current);
    try {
      const res = await fetch("https://formspree.io/f/xwpdveyj", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        msg.textContent = "✅ Message sent successfully!";
        msg.className = "mt-4 text-center font-semibold text-green-400";
        msg.classList.remove("hidden");
        formRef.current.reset();
      } else throw new Error();
    } catch {
      msg.textContent = "❌ Failed to send message.";
      msg.className = "mt-4 text-center font-semibold text-red-400";
      msg.classList.remove("hidden");
    }
  };

  return (
    <div className="bg-gray-900 select-none text-gray-200 relative scroll-smooth">
      {/* ── Antigravity Canvas (full page, behind everything) ── */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full"
        style={{ zIndex: 0 }}
      />

      {/* ── Subtle dark overlay so text stays readable ── */}
      <div className="fixed inset-0 bg-gray-900/50" style={{ zIndex: 1 }} />

      {/* Header */}
      <header
        className="bg-slate-900/50 backdrop-blur-sm fixed top-0 w-full"
        style={{ zIndex: 50 }}
      >
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a
            href="#hero"
            className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 animate-pulse"
          >
            My Portfolio
          </a>

          <div className="hidden md:flex space-x-8 text-lg">
            {["about", "skills", "projects", "contact"].map((s) => (
              <a
                key={s}
                href={`#${s}`}
                className="hover:text-blue-400 capitalize"
              >
                {s}
              </a>
            ))}
          </div>

          <button
            className="md:hidden text-gray-200"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </nav>

        {menuOpen && (
          <div className="md:hidden bg-slate-800/90 text-center shadow-lg">
            <div className="flex flex-col space-y-4 py-4 text-xl">
              {["about", "projects", "contact"].map((s) => (
                <a
                  key={s}
                  href={`#${s}`}
                  className="capitalize"
                  onClick={() => setMenuOpen(false)}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="py-24 relative" style={{ zIndex: 10 }}>
        {/* ── Hero ── */}
        <section
          id="hero"
          className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden"
        >
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-center text-center md:text-left space-y-8 md:space-x-12 relative z-10">
            <div className="fade-in-down">
              <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
                Hello, I'm <span className="text-blue-400">Oshaq Naimat</span>.
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                A passionate{" "}
                <span className="font-bold text-purple-400">
                  Web and App Developer
                </span>
              </p>
              <div className="flex gap-2 justify-center md:justify-start">
                <a
                  href="#contact"
                  className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-full font-bold transition-colors"
                >
                  Get in Touch
                </a>
                <a
                  href="/OshaqNaimat_CV.pdf"
                  download="My-CV.pdf"
                  className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-full font-bold transition-colors"
                >
                  Download CV
                </a>
              </div>
            </div>

            <div className="float">
              <div className="profile-img w-64 h-64 md:w-80 md:h-80 rounded-full bg-slate-700 overflow-hidden shadow-2xl flex items-center justify-center">
                <img src="/profile.jpg" alt="profile" />
              </div>
            </div>
          </div>
        </section>

        {/* ── About ── */}
        <section
          id="about"
          ref={(el) => (revealRef.current[0] = el)}
          className="py-20 reveal"
        >
          <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">
            About Me
          </h2>
          <div className="max-w-4xl mx-auto text-lg text-gray-300 text-center space-y-4">
            <p>
              I am a Full Stack Web and App Developer skilled in Laravel and the
              MERN stack (MongoDB, Express, React, Node.js), with experience in
              React Native for cross-platform mobile apps. I build scalable,
              efficient, and user-friendly web and mobile applications,
              combining clean code with modern best practices to deliver
              seamless experiences.
            </p>
          </div>
        </section>

        {/* ── Skills ── */}
        <div id="skills">
          <Skills />
        </div>

        {/* ── Projects ── */}
        <Projects setOpen={setOpen} Open={Open} />

        {/* ── Contact ── */}
        <section
          id="contact"
          className="py-20 reveal"
          ref={(el) => (revealRef.current[1] = el)}
        >
          <h2 className="text-4xl font-bold text-center text-blue-400 mb-8">
            Contact Me
          </h2>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto bg-gray-800/70 p-6 rounded-lg shadow-lg"
          >
            <input
              name="name"
              required
              placeholder="Name"
              className="w-full mb-4 p-2 rounded bg-gray-900 border border-gray-600"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              className="w-full mb-4 p-2 rounded bg-gray-900 border border-gray-600"
            />
            <textarea
              name="message"
              rows="5"
              required
              placeholder="Message"
              className="w-full mb-4 p-2 rounded bg-gray-900 border border-gray-600"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 py-2 rounded font-bold transition-colors"
            >
              Send Message
            </button>
            <div
              ref={msgRef}
              className="hidden mt-4 text-center font-semibold"
            />
          </form>
        </section>
      </main>

      <footer
        className="bg-gray-900/50 py-8 text-center text-gray-400 text-sm relative"
        style={{ zIndex: 10 }}
      >
        © 2026 Oshaq Naimat. All rights reserved.
      </footer>

      {/* ── Mode Switcher ── */}
    </div>
  );
}

export default App;
