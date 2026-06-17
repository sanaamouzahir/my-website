import { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CircleDot,
  Sparkles,
  GraduationCap,
  BookOpen,
  Users,
  Briefcase,
  Brain,
  Sparkle,
  Video,
  Mail,
  Github,
  Linkedin,
  Instagram,
  Twitter,
  ExternalLink,
  MapPin,
  Target,
  Zap,
  Plane,
  Compass,
  Activity,
  Music,
} from "lucide-react";

/* ─────────────────────────────────────────────────────────────
   SANAA MOUZAHIR — personal website

   Palette: soft pink (primary) + baby blue (secondary).
   Type: JetBrains Mono for data/labels, Inter Tight for body.
   No flow-field background — clean gradient washes instead.

   Sections: Hero · Research · Poker · Pole · Travel · Content · Contact
   ───────────────────────────────────────────────────────────── */

export default function PersonalLanding() {
  return (
    <div className="relative min-h-screen bg-[#0F0A11] text-zinc-100 antialiased selection:bg-pink-300/40 selection:text-pink-50">
      <FontStyles />
      <Nav />
      <Hero />
      <Research />
      <PoleDancing />
      <Travel />
      <ContentCreation />
      <Poker />
      <Family />
      <Contact />
      <Footer />
    </div>
  );
}

/* ─── fonts + globals ─────────────────────────────────── */
function FontStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Inter+Tight:wght@300;400;500;600;700&display=swap');
      html { font-family: 'Inter Tight', system-ui, sans-serif; }
      .font-mono { font-family: 'JetBrains Mono', ui-monospace, monospace; font-feature-settings: 'tnum' 1, 'zero' 1; }
      .nums { font-variant-numeric: tabular-nums; }

      /* soft pink + baby blue gradient washes — replace the old flow field */
      .gradient-bg-pink {
        background:
          radial-gradient(ellipse 70% 50% at 20% 0%, rgba(249, 168, 212, 0.18), transparent 60%),
          radial-gradient(ellipse 70% 50% at 80% 100%, rgba(147, 197, 253, 0.14), transparent 60%);
      }
      .gradient-bg-blue {
        background:
          radial-gradient(ellipse 60% 50% at 80% 0%, rgba(147, 197, 253, 0.18), transparent 60%),
          radial-gradient(ellipse 60% 50% at 10% 100%, rgba(249, 168, 212, 0.14), transparent 60%);
      }

      .grid-bg-fine {
        background-image:
          linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px);
        background-size: 14px 14px;
      }

      @keyframes tape { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      .tape { animation: tape 80s linear infinite; }

      .corners > span {
        position: absolute; width: 8px; height: 8px;
        border-color: rgba(255,255,255,0.25);
      }
      .corners > span:nth-child(1) { top: -1px; left: -1px; border-top: 1px solid; border-left: 1px solid; }
      .corners > span:nth-child(2) { top: -1px; right: -1px; border-top: 1px solid; border-right: 1px solid; }
      .corners > span:nth-child(3) { bottom: -1px; left: -1px; border-bottom: 1px solid; border-left: 1px solid; }
      .corners > span:nth-child(4) { bottom: -1px; right: -1px; border-bottom: 1px solid; border-right: 1px solid; }

      @keyframes blink { 50% { opacity: 0.25; } }
      .blink { animation: blink 1.4s ease-in-out infinite; }

      /* casino-themed backdrop for content card #3 — gold + felt-green */
      .casino-bg {
        background:
          radial-gradient(circle at 30% 30%, rgba(255, 215, 0, 0.15), transparent 50%),
          radial-gradient(circle at 70% 70%, rgba(220, 20, 60, 0.2), transparent 50%),
          linear-gradient(135deg, #0d2a1f 0%, #1a1208 50%, #2a0a12 100%);
      }
      .casino-bg::before {
        content: "";
        position: absolute;
        inset: 0;
        background-image:
          repeating-linear-gradient(45deg, rgba(255,215,0,0.04) 0 2px, transparent 2px 14px),
          repeating-linear-gradient(-45deg, rgba(255,215,0,0.03) 0 2px, transparent 2px 14px);
        pointer-events: none;
      }

      @media (prefers-reduced-motion: reduce) {
        .tape, .blink { animation: none; }
      }
    `}</style>
  );
}

/* ─── nav ─────────────────────────────────────────────── */
function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-[#0F0A11]/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2.5">
          <Logo />
          <span className="font-mono text-[13px] font-semibold tracking-tight">SANAA MOUZAHIR</span>
        </a>
        <nav className="hidden items-center gap-7 font-mono text-[12px] text-zinc-300 md:flex">
          <a href="#research" className="hover:text-pink-300 transition">Research</a>
          <a href="#pole" className="hover:text-pink-300 transition">Pole</a>
          <a href="#travel" className="hover:text-pink-300 transition">Travel</a>
          <a href="#content" className="hover:text-pink-300 transition">Content</a>
          <a href="#poker" className="hover:text-pink-300 transition">Gambling</a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="group flex items-center gap-1.5 rounded-sm border border-pink-300/40 bg-pink-300/10 px-3 py-1.5 font-mono text-[12px] text-pink-100 transition hover:border-pink-300/70 hover:bg-pink-300/20"
          >
            Get in touch
            <ArrowRight className="h-3 w-3 transition group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </header>
  );
}

function Logo() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="7" stroke="#F9A8D4" strokeWidth="1.8" fill="none" />
      <circle cx="12" cy="12" r="2.5" fill="#93C5FD" />
    </svg>
  );
}

/* ─── hero ────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 gradient-bg-pink pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-24 md:pb-32 md:pt-28">
        <div className="grid items-center gap-12 md:grid-cols-[1.4fr_1fr]">
          {/* left: text */}
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-sm border border-white/15 bg-black/40 px-2.5 py-1 font-mono text-[11px] text-zinc-300 backdrop-blur-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-pink-300/60 blink" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-pink-300" />
              </span>
              <span>CAMBRIDGE, MA · PHD CANDIDATE @ MIT</span>
            </div>

            <h1 className="font-mono text-[44px] font-bold leading-[1.02] tracking-[-0.03em] text-zinc-50 md:text-[80px]">
              SANAA<br />
              <span className="text-pink-300">MOUZAHIR</span>
            </h1>

            <p className="font-mono mt-8 max-w-2xl text-[18px] leading-relaxed text-blue-200 md:text-[22px]">
              Researcher. Pole dancer. Absolute wannabe poker player.
            </p>

            <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-zinc-300 md:text-[16px]">
              I work on fluid dynamics simulations, physics-informed machine learning, and
              uncertainty quantification. Outside the lab, I play cards, I move, and I share
              what I learn.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="group flex items-center gap-2 rounded-sm border border-white/30 bg-black/30 px-5 py-3 font-mono text-[12px] text-zinc-100 backdrop-blur-sm transition hover:border-pink-300/60 hover:bg-pink-300/10"
              >
                Get in touch
                <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* right: hero photo */}
          <div className="order-first md:order-last">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-sm border border-pink-300/30 bg-gradient-to-br from-pink-300/[0.06] to-blue-300/[0.04]">
              <img
                src="/images/hero.jpg"
                alt="Sanaa Mouzahir"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="corners">
                <span /><span /><span /><span />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* scrolling tape */}
      <div className="relative overflow-hidden border-t border-white/5 bg-black/40 py-2.5 backdrop-blur-sm">
        <div className="tape flex w-max gap-8 whitespace-nowrap font-mono text-[11px] text-zinc-300">
          {Array.from({ length: 2 }).map((_, n) => (
            <div key={n} className="flex gap-8">
              {[
                "RESEARCH",
                "GAMBLING",
                "POLE",
                "TRAVEL",
                "CONTENT",
                "MIT PHD",
                "COMPUTATIONAL SCIENCE",
                "UNCERTAINTY QUANTIFICATION",
                "DECISION-MAKING UNDER UNCERTAINTY",
                "RESEARCH",
                "GAMBLING",
                "POLE",
                "TRAVEL",
                "CONTENT",
                "MIT PHD",
                "COMPUTATIONAL SCIENCE",
                "UNCERTAINTY QUANTIFICATION",
              ].map((t, i) => (
                <span key={i} className="flex items-center gap-3">
                  <CircleDot className="h-2.5 w-2.5 text-pink-300/50" />
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── section-specific interactive backgrounds ────────── */

/* Research background: blue ocean-current particle flow.
   Lightweight noise-field canvas, subtle, behind the section content. */
function OceanFlowBg() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    function resize() {
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    }
    resize();
    window.addEventListener("resize", resize);

    function noise(x, y, t) {
      return (
        Math.sin(x * 0.004 + t * 0.0008) * 0.55 +
        Math.cos(y * 0.005 - t * 0.001) * 0.35 +
        Math.sin((x + y) * 0.002 + t * 0.0005) * 0.1
      );
    }
    const W = () => canvas.offsetWidth;
    const H = () => canvas.offsetHeight;
    const PARTICLES = 320;
    const particles = Array.from({ length: PARTICLES }, () => ({
      x: Math.random() * W(),
      y: Math.random() * H(),
      life: Math.random() * 200,
    }));
    let t = 0;
    function frame() {
      t += 1;
      ctx.fillStyle = "rgba(15, 10, 17, 0.07)";
      ctx.fillRect(0, 0, W(), H());
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const angle = noise(p.x, p.y, t) * Math.PI * 2;
        p.x += Math.cos(angle) * 0.8;
        p.y += Math.sin(angle) * 0.8;
        p.life -= 1;
        if (p.life <= 0 || p.x < 0 || p.x > W() || p.y < 0 || p.y > H()) {
          p.x = Math.random() * W();
          p.y = Math.random() * H();
          p.life = 120 + Math.random() * 150;
        }
        // baby-blue palette
        const v = noise(p.x, p.y, t);
        const hue = 210 + v * 20;
        ctx.fillStyle = `hsla(${hue}, 75%, 70%, 0.4)`;
        ctx.fillRect(p.x, p.y, 1.1, 1.1);
      }
      if (!reduce) raf = requestAnimationFrame(frame);
    }
    frame();
    return () => {
      window.removeEventListener("resize", resize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />;
}

/* Pole background: floating pleaser-heel silhouettes.
   Inline SVG sprites randomized across the section. Static, no animation cost. */
function PleaserBg() {
  // generate stable random positions on mount only
  const items = Array.from({ length: 18 }).map((_, i) => ({
    left: ((i * 37) % 100),
    top: ((i * 53) % 100),
    rot: ((i * 73) % 360) - 180,
    scale: 0.6 + ((i * 31) % 100) / 100,
    opacity: 0.05 + ((i * 17) % 10) / 100,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden">
      {items.map((it, i) => (
        <svg
          key={i}
          viewBox="0 0 80 100"
          className="absolute"
          style={{
            left: `${it.left}%`,
            top: `${it.top}%`,
            transform: `translate(-50%, -50%) rotate(${it.rot}deg) scale(${it.scale})`,
            width: 56,
            height: 70,
            opacity: it.opacity,
          }}
          aria-hidden="true"
        >
          {/* stylized pleaser heel silhouette — high-arch platform, stiletto */}
          <path
            d="M 14 18 Q 12 14 18 12 L 56 12 Q 62 12 64 16 L 66 26 Q 58 28 50 28 L 40 28 Q 32 30 28 36 L 26 50 L 30 70 Q 32 86 26 90 L 14 90 Q 8 86 10 78 L 14 56 Q 14 38 14 18 Z"
            fill="#F9A8D4"
          />
          {/* platform stripe */}
          <rect x="12" y="86" width="20" height="6" fill="#F9A8D4" />
          {/* heel spike */}
          <path d="M 30 70 L 32 96 L 28 96 Z" fill="#F9A8D4" />
        </svg>
      ))}
    </div>
  );
}

/* Poker / casino background: floating playing-card silhouettes with suits */
function PlayingCardsBg() {
  const items = Array.from({ length: 14 }).map((_, i) => ({
    left: ((i * 41) % 100),
    top: ((i * 59) % 100),
    rot: ((i * 67) % 80) - 40,
    suit: i % 4, // heart, diamond, club, spade
    opacity: 0.04 + ((i * 13) % 7) / 100,
    size: 60 + ((i * 19) % 40),
  }));
  const suitPaths = [
    "M 20 8 C 12 8 6 14 6 22 C 6 30 14 34 20 44 C 26 34 34 30 34 22 C 34 14 28 8 20 8 Z", // heart
    "M 20 4 L 34 22 L 20 40 L 6 22 Z", // diamond
    "M 14 16 C 14 12 18 8 22 10 C 26 8 30 12 30 16 C 30 20 26 22 22 20 C 26 22 30 26 30 30 L 10 30 C 10 26 14 22 18 20 C 14 22 14 20 14 16 Z", // club
    "M 20 4 C 28 14 34 22 34 28 C 34 34 28 36 24 32 L 26 40 L 14 40 L 16 32 C 12 36 6 34 6 28 C 6 22 12 14 20 4 Z", // spade
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      {items.map((it, i) => (
        <div
          key={i}
          className="absolute rounded-md border border-white/15 bg-black/30 backdrop-blur-sm"
          style={{
            left: `${it.left}%`,
            top: `${it.top}%`,
            transform: `translate(-50%, -50%) rotate(${it.rot}deg)`,
            width: it.size * 0.7,
            height: it.size,
            opacity: it.opacity * 3,
          }}
          aria-hidden="true"
        >
          <svg viewBox="0 0 40 50" className="absolute inset-0 h-full w-full">
            <path d={suitPaths[it.suit]} fill={it.suit < 2 ? "#F9A8D4" : "#93C5FD"} />
          </svg>
        </div>
      ))}
    </div>
  );
}

/* Casino content background: layered playing cards + chip-edge marks */
function CasinoChipsBg() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <PlayingCardsBg />
      {/* a few "chip" rings as accents */}
      {Array.from({ length: 8 }).map((_, i) => {
        const left = (i * 47) % 100;
        const top = (i * 71) % 100;
        const size = 80 + ((i * 23) % 50);
        return (
          <div
            key={i}
            className="absolute rounded-full border-2 border-dashed"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              transform: "translate(-50%, -50%)",
              width: size,
              height: size,
              borderColor: i % 2 === 0 ? "rgba(249, 168, 212, 0.06)" : "rgba(147, 197, 253, 0.06)",
            }}
            aria-hidden="true"
          />
        );
      })}
    </div>
  );
}

/* Travel background: globe meridian lines + tiny location pins */
function GlobeLinesBg() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg viewBox="0 0 1200 800" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        {/* horizontal latitude lines */}
        {[150, 250, 350, 450, 550, 650].map((y, i) => (
          <ellipse
            key={`lat-${i}`}
            cx="600"
            cy={y}
            rx="600"
            ry={40 + (i % 3) * 6}
            fill="none"
            stroke="rgba(147, 197, 253, 0.06)"
            strokeWidth="1"
          />
        ))}
        {/* vertical meridian arcs */}
        {[0.2, 0.35, 0.5, 0.65, 0.8].map((x, i) => (
          <path
            key={`mer-${i}`}
            d={`M ${x * 1200} 0 Q ${x * 1200 + (0.5 - x) * 200} 400 ${x * 1200} 800`}
            fill="none"
            stroke="rgba(249, 168, 212, 0.05)"
            strokeWidth="1"
          />
        ))}
        {/* tiny pins */}
        {[[120, 180], [320, 380], [620, 220], [880, 480], [1040, 340], [240, 600], [780, 700]].map(
          ([x, y], i) => (
            <g key={`pin-${i}`} opacity="0.4">
              <circle cx={x} cy={y} r="3" fill="#F9A8D4" />
              <circle cx={x} cy={y} r="9" fill="none" stroke="#F9A8D4" strokeWidth="0.5" opacity="0.5" />
            </g>
          )
        )}
      </svg>
    </div>
  );
}

/* ─── research ────────────────────────────────────────── */
function Research() {
  return (
    <section id="research" className="relative border-b border-white/5 bg-[#0F0A11] py-24">
      <OceanFlowBg />
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <SectionLabel index="01" label="Research" />
            <h2 className="mt-4 text-4xl font-light leading-[1.05] tracking-[-0.02em] text-zinc-50 md:text-[56px]">
              The work.
            </h2>
          </div>
          <p className="text-[15px] leading-relaxed text-zinc-200 md:pt-14 md:text-[17px]">
            I work on fluid dynamics simulations, physics-informed machine learning, and
            uncertainty quantification. My research sits at the intersection of computational
            science, machine learning, and stochastic analysis.
          </p>
        </div>

        <EducationCredentials />
        <OngoingProjects />
        <PublicationsAwards />
        <Affiliations />
      </div>
    </section>
  );
}

function EducationCredentials() {
  const items = [
    {
      institution: "Massachusetts Institute of Technology",
      degree: "PhD, Computational Science & Engineering",
      period: "Sept 2023 — Ongoing",
      detail: (
        <>
          <a
            href="https://mseas.mit.edu/"
            target="_blank"
            rel="noreferrer"
            className="text-pink-300 underline-offset-2 hover:underline"
          >
            MSEAS Lab
          </a>{" "}
          · Advisor: Prof. Pierre Lermusiaux. Research in uncertainty quantification, machine
          learning, and numerics for ocean and engineering flows.
        </>
      ),
    },
    {
      institution: "Columbia University",
      degree: "MS, Computational Mechanics",
      period: "2021 — 2022",
      detail: (
        <>
          Research fellow in uncertainty quantification, optimization, and data-driven methods.
          Coursework: applied stochastic analysis, random processes in mechanics, computational
          math, multi-scale CSE, FEA.
        </>
      ),
    },
    {
      institution: "EPFL — École Polytechnique Fédérale de Lausanne",
      degree: "BS, Civil Engineering",
      period: "2018 — 2021",
      detail: (
        <>
          Coursework in computational thinking, optimization & OR, numerical analysis, probability
          & statistics, numerical modelling of solids, transportation systems, and applied
          econometrics of innovation.
        </>
      ),
    },
  ];

  return (
    <div className="mt-16">
      <SubsectionHeader icon={GraduationCap} label="Education & credentials" index="1.1" />
      <div className="mt-6 grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/5 md:grid-cols-3">
        {items.map((it, i) => (
          <div key={i} className="bg-[#0F0A11] p-7">
            <div className="font-mono text-[10px] uppercase tracking-wider text-pink-300">
              {it.period}
            </div>
            <div className="mt-4 text-[15px] font-medium leading-snug text-zinc-100">{it.degree}</div>
            <div className="mt-1 font-mono text-[12px] text-blue-200">{it.institution}</div>
            <p className="mt-4 text-[13px] leading-relaxed text-zinc-300">{it.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function OngoingProjects() {
  const projects = [
    {
      title: "Closure Modeling and Subgrid-Scale Closure of Fluid and Ocean Dynamical Systems",
      funder: "Navy-funded · ML-SCOPE",
      status: "Active",
      summary: (
        <>
          Developing uncertainty-aware subgrid-scale and step-resolution closure modeling methods
          for faster and more accurate fluid and weather forecasts. Under{" "}
          <span className="text-pink-300">Machine Learning for Submesoscale Characterization,
          Ocean Prediction, and Exploration (ML-SCOPE)</span>.
        </>
      ),
      tags: ["Closure modeling", "Subgrid scale", "UQ", "Ocean dynamics"],
    },
    {
      title: "A Hybrid Dynamically Orthogonal Scheme for Reduced-Cost Stochastic Forecasting",
      funder: "Navy-funded · ML-SCOPE",
      status: "Active",
      summary: (
        <>
          Reducing the cost of stochastic Navier–Stokes simulations by extending the Dynamically
          Orthogonal framework to evolve only a subset of modes while holding the remainder
          fixed. Re-deriving equations, cost, error equations & mode-selection optimization
          framework.
        </>
      ),
      tags: ["DO schemes", "Stochastic NS", "Error analysis", "Pareto optimization"],
    },
  ];

  return (
    <div className="mt-16">
      <SubsectionHeader icon={Briefcase} label="Ongoing projects" index="1.2" />
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-sm border border-white/10 bg-[#0F0A11] p-6 transition hover:border-pink-300/30"
          >
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-wider">
              <span className="text-pink-300">{p.funder}</span>
              <span className={`rounded-sm border px-1.5 py-0.5 ${
                p.status === "Active"
                  ? "border-pink-300/30 bg-pink-300/5 text-pink-200"
                  : "border-blue-300/30 bg-blue-300/5 text-blue-200"
              }`}>
                {p.status}
              </span>
            </div>
            <h4 className="mt-5 text-[17px] font-medium leading-snug text-zinc-50">{p.title}</h4>
            <p className="mt-3 text-[13px] leading-relaxed text-zinc-300">{p.summary}</p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-sm border border-white/10 bg-white/[0.02] px-2 py-0.5 font-mono text-[10px] text-zinc-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PublicationsAwards() {
  const publications = [
    {
      title: "Sparse and Deep Gaussian Process Closure Modeling for Non-Stationary β-Plane Flows Past Idealized Obstacles",
      authors: "Mouzahir, S., and Lermusiaux, P.F.J.",
      venue: "In preparation",
      type: "Conference paper",
    },
    {
      title: "Data-Driven Modeling for Under-Resolved Fluid Flows: Global and Local Gaussian Process Approaches",
      authors: "Mouzahir, S., and Lermusiaux, P.F.J.",
      venue: "In preparation",
      type: "Journal paper",
    },
    {
      title: "Probabilistic subgrid scale closure with analytical temporal correction",
      authors: "Mouzahir, S., and Lermusiaux, P.F.J.",
      venue: "In preparation",
      type: "Journal paper",
    },
    {
      title: "Sparse and Deep Gaussian Processes Closure for 2-D Fluids and Ocean Flows",
      authors: "Mouzahir, S., and Lermusiaux, P.F.J.",
      venue: "Ocean Sciences Meeting 2026 (OSM26), Glasgow, Scotland",
      type: "Conference talk",
    },
    {
      title: "Why you should care about Gaussian Processes",
      authors: "Mouzahir, S.",
      venue: "Simple Person's Applied Mathematics Seminar, Cambridge, MA, USA — 2025",
      type: "Invited talk",
    },
    {
      title: "Shape Optimization of Growth-Accommodating Heart Valve",
      authors: "Mouzahir, S.",
      venue: "Columbia Initiative for Pediatric Cardiac Innovation, New York, USA — 2022",
      type: "Project",
    },
  ];

  return (
    <div className="mt-16">
      <SubsectionHeader icon={BookOpen} label="Publications & talks" index="1.3" />
      <div className="mt-6 rounded-sm border border-white/10 bg-[#0F0A11] p-6">
        <div className="mb-5 flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-zinc-300">
          <span>Key publications & talks</span>
          <span className="text-pink-300">{publications.length} entries</span>
        </div>
        <ul className="space-y-5">
          {publications.map((p, i) => (
            <li key={i} className="border-b border-white/5 pb-5 last:border-0">
              <div className="font-mono text-[10px] uppercase tracking-wider text-pink-300">
                {p.type}
              </div>
              <h5 className="mt-2 text-[14px] font-medium leading-snug text-zinc-100">{p.title}</h5>
              <div className="mt-1 font-mono text-[11px] text-zinc-300">{p.authors}</div>
              <div className="mt-0.5 font-mono text-[11px] italic text-blue-200">{p.venue}</div>
            </li>
          ))}
        </ul>
        <div className="mt-5 rounded-sm border border-blue-300/20 bg-blue-300/[0.04] p-3 font-mono text-[11px] text-blue-200">
          Coming soon: IEEE OCEANS 2026, Monterey, USA.
        </div>
      </div>
    </div>
  );
}

function Affiliations() {
  const affiliations = [
    { name: "Computational Science & Engineering", org: "MIT", href: null },
    /* TODO: replace href with Varion Systems' real website URL when ready */
    { name: "Varion Systems", org: "Shareholder", href: "#" },
    /* TODO: confirm CVC URL if you'd like to link it */
    { name: "Columbia Venture Community", org: "Member", href: null },
    { name: "MIT Poker Club", org: "MIT", href: null },
  ];

  return (
    <div className="mt-16">
      <SubsectionHeader icon={Users} label="Affiliations" index="1.4" />
      <div className="mt-6 grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
        {affiliations.map((a, i) => {
          const inner = (
            <>
              <div className="font-mono text-[10px] uppercase tracking-wider text-pink-300">
                {a.org}
              </div>
              <div className="mt-3 flex items-center gap-1.5 text-[15px] font-medium text-zinc-100">
                {a.name}
                {a.href && <ExternalLink className="h-3 w-3 text-pink-300" />}
              </div>
            </>
          );
          return a.href ? (
            <a key={i} href={a.href} target="_blank" rel="noreferrer" className="bg-[#0F0A11] p-6 transition hover:bg-pink-300/[0.04]">
              {inner}
            </a>
          ) : (
            <div key={i} className="bg-[#0F0A11] p-6">{inner}</div>
          );
        })}
      </div>
    </div>
  );
}


/* ─── poker ───────────────────────────────────────────── */
function Poker() {
  return (
    <section id="poker" className="relative border-b border-white/5 bg-[#0F0A11] py-24">
      <PlayingCardsBg />
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      <div className="grid-bg-fine absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <SectionLabel index="05" label="Gambling" />
            <h2 className="mt-4 text-4xl font-light leading-[1.05] tracking-[-0.02em] text-zinc-50 md:text-[56px]">
              Decisions under uncertainty.
            </h2>
          </div>
          <p className="text-[15px] leading-relaxed text-zinc-200 md:pt-14 md:text-[17px]">
            Gambling is the closest thing I've found to a live laboratory for what I study in
            research — making good decisions with incomplete information, calibrating against
            your own uncertainty, and managing risk over the long run.
          </p>
        </div>

        <PokerStats />
        <PokerPhilosophy />
      </div>
    </section>
  );
}

function PokerStats() {
  const games = [
    { name: "Blackjack", level: "Main game", note: "Where I spend most of my table time." },
    { name: "Poker", level: "Recreational", note: "LHE." },
  ];

  return (
    <div>
      <SubsectionHeader icon={Activity} label="Games I play" index="5.1" />
      <div className="mt-6 grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/5 md:grid-cols-2">
        {games.map((g, i) => (
          <div key={i} className="bg-[#0F0A11] p-6">
            <div className="font-mono text-[10px] uppercase tracking-wider text-pink-300">{g.level}</div>
            <div className="mt-3 text-[22px] font-light text-zinc-50">{g.name}</div>
            <p className="mt-2 font-mono text-[12px] text-zinc-300">{g.note}</p>
          </div>
        ))}
      </div>

      {/* currently reading */}
      <div className="mt-6 flex flex-col items-start gap-3 rounded-sm border border-blue-300/20 bg-blue-300/[0.04] px-6 py-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <BookOpen className="h-4 w-4 text-blue-300" />
          <div>
            <div className="font-mono text-[10px] uppercase tracking-wider text-blue-300">
              Currently reading
            </div>
            <div className="mt-1 text-[14px] text-zinc-100">
              <span className="italic">Modern Poker Theory</span> — Michael Acevedo
            </div>
          </div>
        </div>
        <span className="font-mono text-[11px] text-zinc-300">GTO foundations · solver work</span>
      </div>
    </div>
  );
}

function PokerPhilosophy() {
  return (
    <div className="mt-16">
      <SubsectionHeader icon={Brain} label="What gambling taught me" index="5.2" />
      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {[
          {
            icon: Target,
            title: "Process over outcome",
            body:
              "The right decision can lose, the wrong decision can win. Just enjoy the process.",
          },
          {
            icon: Brain,
            title: "Calibrated confidence",
            body:
              "Confidently right and uncertainly wrong — hopefully not the other way around.",
          },
          {
            icon: Zap,
            title: "Bankroll over ego",
            body:
              "Knowing when to fold, when to walk away, and when to size down.",
          },
        ].map(({ icon: Icon, title, body }) => (
          <div key={title} className="relative rounded-sm border border-white/10 bg-[#0F0A11] p-7">
            <Icon className="h-4 w-4 text-pink-300" />
            <h4 className="mt-4 text-[17px] font-light leading-snug text-zinc-50">{title}</h4>
            <p className="mt-3 text-[13px] leading-relaxed text-zinc-200">{body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── pole dancing ────────────────────────────────────── */
function PoleDancing() {
  /* Real photo: /images/pole-dance.jpg
     Additional placeholder slots remain — replace with more pole photos when ready. */
  /* Three photos, all same aspect (3:4 portrait) and same span so they sit
     in a clean equal-size row. The training photo is taller than the others
     in its original — objectPosition shifts the visible crop to keep the
     pose in view (rather than the empty ceiling above). */
  const photos = [
    { src: "/images/pole-dance.jpg", aspect: "aspect-[3/4]", span: "", caption: null, objectPosition: "center" },
    { src: "/images/pole-pso-2.jpg", aspect: "aspect-[3/4]", span: "", caption: "PSO NE L3 Championship", objectPosition: "center" },
    { src: "/images/pole-training.jpg", aspect: "aspect-[3/4]", span: "", caption: null, objectPosition: "50% 38%" },
  ];

  return (
    <section id="pole" className="relative border-b border-white/5 bg-[#0F0A11] py-24">
      <PleaserBg />
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-14 grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <SectionLabel index="02" label="Pole" />
            <h2 className="mt-4 text-4xl font-light leading-[1.05] tracking-[-0.02em] text-zinc-50 md:text-[56px]">
              Pole dancing.
            </h2>
          </div>
          <div className="space-y-6 text-[15px] leading-relaxed text-zinc-200 md:pt-14 md:text-[17px]">
            <p>
              I started my pole journey at a time in my life when I wasn't taking any risks and
              I wasn't vibing with anything. I wanted to see what my body could do.
            </p>
            <p>
              I fell in love with the <span className="text-pink-300">grace</span>, the{" "}
              <span className="text-pink-300">sensuality</span>, and the{" "}
              <span className="text-pink-300">power</span> of the sport.
            </p>
            <p>
              After a little over a year of training, I competed at the{" "}
              <span className="text-pink-300">Pole Sport Organization North-East Regional Championship — Level 3 (Aerial Inverter)</span>{" "}
              and took home the <span className="text-pink-300">silver medal</span>.
            </p>
            <p>
              I truly hope I am able to compete again next year at{" "}
              <span className="text-pink-300">Level 4 (Advanced Amateur Pole)</span>. Fingers crossed!
            </p>
          </div>
        </div>

        <SubsectionHeader icon={Sparkle} label="Photos" index="2.1" />
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {photos.map((p, i) => (
            <div
              key={i}
              className={`relative ${p.span} ${p.aspect} overflow-hidden rounded-sm border border-white/10 bg-gradient-to-br from-pink-300/[0.06] to-blue-300/[0.04] transition hover:border-pink-300/30`}
            >
              {p.src ? (
                <img
                  src={p.src}
                  alt={`Pole photo ${i + 1}`}
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ objectPosition: p.objectPosition || "center" }}
                />
              ) : (
                <>
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center">
                    <Sparkle className="h-5 w-5 text-pink-300/60" />
                    <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-300">
                      TODO photo {i + 1}
                    </span>
                  </div>
                  <div className="corners">
                    <span /><span /><span /><span />
                  </div>
                </>
              )}
              {p.caption && (
                <div className="absolute bottom-2 left-2 right-2 rounded-sm border border-pink-300/40 bg-black/70 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-pink-100 backdrop-blur-sm">
                  {p.caption}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── travel ──────────────────────────────────────────── */
function Travel() {
  const countries = [
    "Spain", "France", "Belgium", "Canary Islands", "Italy", "Switzerland",
    "Germany", "Austria", "Netherlands", "Georgia", "Latvia", "Greece",
    "Turkey", "Portugal", "Morocco", "Algeria", "Tunisia", "Egypt",
    "Lebanon", "UAE", "England", "Scotland", "Wales", "Brazil",
    "Chile", "Puerto Rico", "Canada", "Qatar", "Senegal", "Luxembourg",
    "Croatia", "Bahamas", "Sweden",
  ];

  const recentStops = [
    { city: "Sicily", country: "Italy", note: "", img: "/images/sicily.jpg" },
    { city: "Tenerife", country: "Canary Islands", note: "", img: "/images/tenerife.jpg" },
    { city: "Las Vegas", country: "USA", note: "", img: "/images/vegas.jpg" },
    { city: "Rio de Janeiro", country: "Brazil", note: "", img: "/images/rio.jpg" },
  ];

  const lookingForwardTo = [
    { country: "South Korea", note: "" },
    { country: "Dominican Republic", note: "" },
  ];

  return (
    <section id="travel" className="relative border-b border-white/5 bg-[#0F0A11] py-24">
      <GlobeLinesBg />
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-14 grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <SectionLabel index="03" label="Travel" />
            <h2 className="mt-4 text-4xl font-light leading-[1.05] tracking-[-0.02em] text-zinc-50 md:text-[56px]">
              Places.
            </h2>
          </div>
          <p className="text-[15px] leading-relaxed text-zinc-200 md:pt-14 md:text-[17px]">
            I think all the time about how big of a privilege it is to be able to travel the
            world. I am beyond blessed to have found love and friendships with people who are
            just as curious and hungry for life as I am.
          </p>
        </div>

        {/* stat strip */}
        <div className="grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/5 md:grid-cols-3">
          {[
            { label: "Countries visited", value: String(countries.length), icon: Compass },
            { label: "Countries lived in", value: "3", icon: MapPin },
            { label: "Currently in", value: "Cambridge, MA", icon: Plane },
          ].map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="flex items-center gap-4 bg-[#0F0A11] p-6">
                <Icon className="h-5 w-5 text-pink-300" />
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-zinc-300">
                    {s.label}
                  </div>
                  <div className="mt-1 font-mono text-[20px] text-zinc-100 nums">{s.value}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* recent stops */}
        <div className="mt-12">
          <SubsectionHeader icon={MapPin} label="Recent stops" index="3.1" />
          <div className="mt-6 grid gap-5 md:grid-cols-4">
            {recentStops.map((p, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-sm border border-white/10 bg-[#0F0A11]"
              >
                <div className="relative aspect-[4/3] overflow-hidden border-b border-white/10 bg-gradient-to-br from-pink-300/[0.06] to-blue-300/[0.04]">
                  {p.img ? (
                    <img
                      src={p.img}
                      alt={`${p.city}, ${p.country}`}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Compass className="h-7 w-7 text-pink-300/60" />
                      </div>
                      <div className="pointer-events-none absolute right-2 top-2 rounded-sm border border-white/10 bg-black/70 px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-wider text-zinc-300 backdrop-blur-sm">
                        TODO photo
                      </div>
                    </>
                  )}
                </div>
                <div className="p-5">
                  <h4 className="text-[15px] font-medium text-zinc-50">{p.city}</h4>
                  <div className="font-mono text-[11px] text-blue-200">{p.country}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* looking forward to */}
        <div className="mt-12">
          <SubsectionHeader icon={Plane} label="Trips I'm looking forward to" index="3.2" />
          <div className="mt-6 grid gap-5 md:grid-cols-2 md:max-w-2xl">
            {lookingForwardTo.map((p, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-sm border border-pink-300/30 bg-pink-300/[0.04] p-6"
              >
                <div className="flex items-center gap-3">
                  <Plane className="h-5 w-5 text-pink-300" />
                  <h4 className="text-[16px] font-medium text-zinc-50">{p.country}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


/* ─── content creation ────────────────────────────────── */
function ContentCreation() {
  const videos = [
    {
      src: "/images/pool-cnt.jpg",
      caption: "Are you tired of not serving **** while playing pool?",
      category: "EVERYDAY PHYSICS · COMING SOON",
      hasCasinoBg: false,
    },
    {
      /* Swapped from /images/pole-dance.jpg to /images/pole-content.jpg
         to avoid repeating the gallery image */
      src: "/images/pole-content.jpg",
      caption: "Do Pole dancers defy gravity?",
      category: "POLE PHYSICS · COMING SOON",
      hasCasinoBg: false,
    },
    {
      src: "/images/simulation.jpg",
      caption: "Do we live in a simulation?",
      category: "PHILOSOPHY OF PHYSICS · COMING SOON",
      hasCasinoBg: false,
    },
    {
      src: "/images/roulette.jpg",
      caption: "Can you turn $100 into infinite money playing roulette?",
      category: "CASINO MATH · COMING SOON",
      hasCasinoBg: false,
    },
    {
      src: "/images/god-math.jpg",
      caption: "Can you prove the existence of god using math?",
      category: "MATH & PHILOSOPHY · COMING SOON",
      hasCasinoBg: false,
    },
  ];

  return (
    <section id="content" className="relative border-b border-white/5 bg-[#0F0A11] py-24">
      <CasinoChipsBg />
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      <div className="grid-bg-fine absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-14 grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <SectionLabel index="04" label="Content" />
            <h2 className="mt-4 text-4xl font-light leading-[1.05] tracking-[-0.02em] text-zinc-50 md:text-[56px]">
              Content creation.
            </h2>
          </div>
          <div className="space-y-5 md:pt-14">
            <p className="text-[15px] leading-relaxed text-zinc-200 md:text-[17px]">
              Find me on TikTok:{" "}
              <a
                href="https://www.tiktok.com/@hotgurlphysics"
                target="_blank"
                rel="noreferrer"
                className="font-mono font-medium text-pink-300 underline-offset-2 hover:underline"
              >
                @hotgurlphysics
              </a>
            </p>
            <p className="text-[15px] font-mono uppercase tracking-wider text-blue-200">
              Videos dropping soon! <span className="text-zinc-400 normal-case">(I promise)</span>
            </p>
            <p className="text-[13px] italic leading-relaxed text-zinc-300">
              I have been OH SO humbled by how hard making and editing videos actually is!
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {videos.map((v, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-sm border border-white/10 bg-[#0F0A11] transition hover:border-pink-300/40"
            >
              {/* TikTok-style portrait thumbnail */}
              <div className="relative aspect-[9/16] overflow-hidden bg-gradient-to-br from-pink-300/[0.08] to-blue-300/[0.06]">
                {v.src ? (
                  <img
                    src={v.src}
                    alt={v.caption}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-3 text-center">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-pink-300/40 bg-pink-300/10">
                        <Sparkles className="h-5 w-5 text-pink-300" />
                      </span>
                      <span className="font-mono text-[9px] uppercase tracking-wider text-pink-200/80">
                        TODO photo
                      </span>
                    </div>
                  </div>
                )}
                {/* darken-toward-bottom overlay for caption legibility */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20" />

                {/* caption overlay — TikTok-style centered text */}
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="font-mono text-[10px] uppercase tracking-wider text-pink-300 mb-2">
                    {v.category}
                  </div>
                  <p className="text-[18px] font-bold leading-tight text-white md:text-[20px]" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.7)" }}>
                    {v.caption}
                  </p>
                </div>

                {/* play-button affordance */}
                <div className="pointer-events-none absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/40 backdrop-blur-sm transition group-hover:bg-pink-300/30 group-hover:border-pink-300/60">
                  <Video className="h-4 w-4 text-white" />
                </div>

                {/* tiktok handle pill bottom-right */}
                <div className="absolute right-3 top-3 hidden md:block">
                  {/* spacer — kept empty so play icon stands alone */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* coming-soon banner */}
        <div className="mt-12 flex flex-col items-start justify-between gap-3 rounded-sm border border-pink-300/30 bg-pink-300/[0.04] px-6 py-4 font-mono text-[12px] text-zinc-200 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-pink-300/70 blink" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-pink-300" />
            </span>
            <span className="text-pink-300 uppercase tracking-wider">Many many more videos dropping soon</span>
            <span className="hidden text-zinc-300 md:inline">— follow @hotgurlphysics for the launch</span>
          </div>
          <a
            href="https://www.tiktok.com/@hotgurlphysics"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-pink-300 hover:text-pink-200"
          >
            Follow <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </section>
  );
}


/* ─── family / 'in case you wondered' ─────────────────── */
function Family() {
  return (
    <section className="relative border-b border-white/5 bg-[#0F0A11] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-400">
            <span className="text-pink-300">★</span>
            <span className="h-px w-8 bg-white/10" />
            <span>In case you wondered…</span>
          </div>
          <h2 className="mt-6 max-w-3xl text-[36px] font-extralight leading-[1.05] tracking-[-0.02em] text-zinc-50 md:text-[52px]">
            This is my personal hero!
          </h2>
        </div>

        <div className="grid items-center gap-10 md:grid-cols-[2fr_3fr]">
          {/* Photo column */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-white/10 bg-gradient-to-br from-pink-300/[0.06] to-blue-300/[0.04]">
              <img
                src="/images/mother.jpg"
                alt="My mother"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            {/* small caption tag */}
            <div className="mt-3 font-mono text-[10px] uppercase tracking-wider text-pink-300">
              ★ My mother
            </div>
          </div>

          {/* Prose column */}
          <div className="space-y-5 text-[15px] leading-relaxed text-zinc-200 md:text-[16px]">
            <p>
              I am endlessly amazed by my mother. Her{" "}
              <span className="italic">resilience</span>, her sense of duty, her
              selflessness, her capacity to fight and never give up — these are
              the qualities I quietly try to grow into. I am far from being
              there yet. I hope I get there one day.
            </p>
            <p>
              She also happens to be a fashion icon with insane taste, an even
              more insane cook, sharper than just about anyone I know, and the
              funniest person in any room she walks into.
            </p>
            <p className="font-mono text-[13px] text-pink-300">
              Forever grateful.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


/* ─── contact ─────────────────────────────────────────── */
function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative border-b border-white/5 bg-[#0F0A11] py-24">
      <div className="absolute inset-0 gradient-bg-blue pointer-events-none" />
      <div className="grid-bg-fine absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <SectionLabel index="06" label="Contact" />
            <h2 className="mt-4 text-4xl font-light leading-[1.05] tracking-[-0.02em] text-zinc-50 md:text-[56px]">
              Get in touch.
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-zinc-200">
              For research collaborations, speaking opportunities, content collabs, or just to
              say hi.
            </p>

            <div className="mt-10 space-y-4 font-mono text-[12px]">
              <div className="flex items-center gap-3 text-zinc-100">
                <Mail className="h-3.5 w-3.5 text-zinc-300" />
                <a href="mailto:sanaamz@mit.edu" className="hover:text-pink-300">
                  sanaamz@mit.edu
                </a>
              </div>
              <div className="flex items-center gap-3 text-zinc-100">
                <MapPin className="h-3.5 w-3.5 text-zinc-300" />
                <span>Cambridge, MA</span>
              </div>
            </div>

            <div className="mt-10 flex items-center gap-3">
              {[
                /* TODO: confirm exact LinkedIn URL — currently assumes the most common format */
                { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/sanaa-mouzahir/" },
                { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/mouzahirsanaa/" },
                { icon: Music, label: "TikTok", href: "https://www.tiktok.com/@hotgurlphysics" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={label}
                  title={label}
                  className="flex h-9 w-9 items-center justify-center rounded-sm border border-white/15 bg-[#0F0A11] text-zinc-200 transition hover:border-pink-300/50 hover:text-pink-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="rounded-sm border border-white/10 bg-[#0F0A11] p-7"
          >
            {!sent ? (
              <div className="space-y-5">
                <Field label="Name">
                  <input
                    required
                    type="text"
                    className="w-full rounded-sm border border-white/10 bg-transparent px-3 py-2.5 font-mono text-[13px] text-zinc-100 placeholder:text-zinc-400 focus:border-pink-300/50 focus:outline-none"
                  />
                </Field>
                <Field label="Email">
                  <input
                    required
                    type="email"
                    className="w-full rounded-sm border border-white/10 bg-transparent px-3 py-2.5 font-mono text-[13px] text-zinc-100 placeholder:text-zinc-400 focus:border-pink-300/50 focus:outline-none"
                  />
                </Field>
                <Field label="What's this about?">
                  <select className="w-full rounded-sm border border-white/10 bg-[#0F0A11] px-3 py-2.5 font-mono text-[13px] text-zinc-100 focus:border-pink-300/50 focus:outline-none">
                    <option>Research collaboration</option>
                    <option>Speaking / podcast</option>
                    <option>Content collab</option>
                    <option>Just saying hi</option>
                    <option>Other</option>
                  </select>
                </Field>
                <Field label="Message">
                  <textarea
                    rows={4}
                    placeholder="Say hi…"
                    className="w-full resize-none rounded-sm border border-white/10 bg-transparent px-3 py-2.5 font-mono text-[13px] text-zinc-100 placeholder:text-zinc-400 focus:border-pink-300/50 focus:outline-none"
                  />
                </Field>
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-sm bg-pink-300 px-4 py-3 font-mono text-[12px] font-medium text-[#0F0A11] transition hover:bg-pink-200"
                >
                  Send message
                  <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                </button>
              </div>
            ) : (
              <div className="flex h-full min-h-[400px] flex-col items-center justify-center text-center">
                <div className="rounded-sm border border-pink-300/40 bg-pink-300/10 p-3">
                  <Check className="h-5 w-5 text-pink-300" />
                </div>
                <div className="mt-4 text-[15px] text-zinc-100">Message received.</div>
                <div className="mt-1 font-mono text-[11px] text-zinc-300">
                  I'll be in touch soon.
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <div className="mb-1.5 font-mono text-[10px] uppercase tracking-wider text-zinc-300">
        {label}
      </div>
      {children}
    </label>
  );
}

/* ─── footer ──────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="bg-[#0F0A11] py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-2.5">
            <Logo />
            <span className="font-mono text-[13px] font-semibold tracking-tight">SANAA MOUZAHIR</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] text-zinc-300">
            <a href="#research" className="hover:text-pink-300">Research</a>
            <a href="#pole" className="hover:text-pink-300">Pole</a>
            <a href="#travel" className="hover:text-pink-300">Travel</a>
            <a href="#content" className="hover:text-pink-300">Content</a>
            <a href="#poker" className="hover:text-pink-300">Gambling</a>
            <a href="#contact" className="hover:text-pink-300">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── shared atoms ────────────────────────────────────── */
function SectionLabel({ index, label }) {
  return (
    <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-300">
      <span className="text-pink-300">{index}</span>
      <span className="h-px w-8 bg-white/10" />
      <span>{label}</span>
    </div>
  );
}

function SubsectionHeader({ icon: Icon, label, index }) {
  return (
    <div className="flex items-center gap-3 border-l-2 border-pink-300/50 pl-4">
      <Icon className="h-4 w-4 text-pink-300" />
      <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-100">{label}</span>
      <span className="font-mono text-[10px] text-blue-200">{index}</span>
    </div>
  );
}
