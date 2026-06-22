const SOCIAL_LINKS = [
  { label: "github", href: "https://github.com/logesh2496" },
  { label: "linkedin", href: "https://www.linkedin.com/in/logesh-rajappa" },
  { label: "twitter", href: "https://x.com/logesh_rajappa" },
  { label: "email", href: "mailto:logeshr.dev@gmail.com" },
];

const HIGHLIGHTS = [
  {
    name: "InfoFI",
    href: "https://app.songjam.space/",
    tagline: "Transcriptions & Participants",
    description:
      "Agentic CRM and AI-powered outreach for X Spaces. Download and transcribe spaces instantly.",
    tags: ["web", "ai", "scraper"],
    color: "#EC4899",
    accent: "rgba(236, 72, 153, 0.10)",
    border: "rgba(236, 72, 153, 0.30)",
  },
  {
    name: "X AutoDm Extension",
    href: "https://chromewebstore.google.com/detail/songjam/ikhimgpbclohoohnahnejbicegbkaole",
    tagline: "Chrome Extension",
    description:
      "Automate your direct messages on X (Twitter). Streamline engagement and outreach right from your browser.",
    tags: ["extension", "chrome", "automation"],
    color: "#3B82F6",
    accent: "rgba(59, 130, 246, 0.10)",
    border: "rgba(59, 130, 246, 0.30)",
  },
  {
    name: "Molt Spaces",
    href: "https://moltspaces-ui-draft.vercel.app/",
    tagline: "X Space for Open Claw Agents",
    description:
      "A modern web platform built for creative spaces and communities. Designed for open claw agents.",
    tags: ["web", "react", "ai"],
    color: "#10B981",
    accent: "rgba(16, 185, 129, 0.10)",
    border: "rgba(16, 185, 129, 0.30)",
  },
  {
    name: "Live Spaces",
    href: "https://my.songjam.space/",
    tagline: "Powered by Daily.co",
    description:
      "Host and manage live audio spaces with reliable, high-quality streaming using Daily.co infrastructure.",
    tags: ["web", "audio", "webrtc"],
    color: "#F59E0B",
    accent: "rgba(245, 158, 11, 0.10)",
    border: "rgba(245, 158, 11, 0.30)",
  },
  {
    name: "Tapster Club",
    href: "https://www.tapsterclub.vip/",
    tagline: "Where Networking Begins",
    description:
      "A platform for meaningful professional networking. Built end-to-end — from design to deployment.",
    tags: ["web", "react", "vercel"],
    color: "#7C3AED",
    accent: "rgba(124, 58, 237, 0.12)",
    border: "rgba(124, 58, 237, 0.35)",
  },
  {
    name: "Dealflow",
    href: "https://dealflow.songjam.space/",
    tagline: "Streamline Your Pipeline",
    description:
      "Manage and track deals seamlessly. Built to optimize your investment pipeline and networking.",
    tags: ["web", "finance", "tools"],
    color: "#8B5CF6",
    accent: "rgba(139, 92, 246, 0.10)",
    border: "rgba(139, 92, 246, 0.30)",
  },
  {
    name: "Pump.fun Auto Burner",
    href: "https://openburn.netlify.app",
    tagline: "Automated Token Burner",
    description:
      "Efficient and reliable automated token burning mechanism. Streamline your crypto operations securely.",
    tags: ["web3", "crypto", "automation"],
    color: "#F97316",
    accent: "rgba(249, 115, 22, 0.10)",
    border: "rgba(249, 115, 22, 0.30)",
  },
  {
    name: "Podpilot",
    href: "https://podpilotxyz.netlify.app/",
    tagline: "Podcast AI Assistant",
    description:
      "Your intelligent co-pilot for podcast creation, management, and audio processing.",
    tags: ["web", "ai", "audio"],
    color: "#06B6D4",
    accent: "rgba(6, 182, 212, 0.10)",
    border: "rgba(6, 182, 212, 0.30)",
  },
  {
    name: "Voice Vault",
    href: "https://voicevault.netlify.app/",
    tagline: "Secure Your Voice",
    description:
      "Secure your voice in the synthetic age. A vault to protect and verify your authentic voice identity.",
    tags: ["security", "ai", "audio"],
    color: "#14B8A6",
    accent: "rgba(20, 184, 166, 0.10)",
    border: "rgba(20, 184, 166, 0.30)",
  },
  {
    name: "Voice Emotions",
    href: "https://aivoiceagents.netlify.app/",
    tagline: "AI Voice Agents",
    description:
      "Emotionally intelligent AI voice agents that understand and respond with natural human-like emotion.",
    tags: ["ai", "voice", "emotions"],
    color: "#F43F5E",
    accent: "rgba(244, 63, 94, 0.10)",
    border: "rgba(244, 63, 94, 0.30)",
  },
  {
    name: "Music Stemming",
    href: "https://vox-dev.netlify.app/",
    tagline: "Audio Separation",
    description:
      "Advanced music stemming platform. Separate tracks and experiment with playback in entirely different voices.",
    tags: ["audio", "ai", "music"],
    color: "#6366F1",
    accent: "rgba(99, 102, 241, 0.10)",
    border: "rgba(99, 102, 241, 0.30)",
  },
  {
    name: "MarbleRace",
    href: "https://vox-dev.netlify.app/",
    tagline: "Interactive Racing",
    description:
      "An engaging and interactive marble racing experience built on the modern web.",
    tags: ["game", "web", "interactive"],
    color: "#EAB308",
    accent: "rgba(234, 179, 8, 0.10)",
    border: "rgba(234, 179, 8, 0.30)",
  },
  {
    name: "Vox Player",
    href: "https://vox-player.netlify.app/",
    tagline: "Next-Gen Audio",
    description:
      "A sleek, high-performance audio player designed for seamless playback and modern web standards.",
    tags: ["web", "audio", "player"],
    color: "#A855F7",
    accent: "rgba(168, 85, 247, 0.10)",
    border: "rgba(168, 85, 247, 0.30)",
  },
  {
    name: "Numix",
    href: "https://app.netlify.com/projects/numix/overview",
    tagline: "Project Overview",
    description:
      "Dashboard and project overview platform for managing infrastructure and deployments effectively.",
    tags: ["dashboard", "infrastructure"],
    color: "#64748B",
    accent: "rgba(100, 116, 139, 0.10)",
    border: "rgba(100, 116, 139, 0.30)",
  },
];

const SKILLS = [
  {
    group: "Languages & Frameworks",
    items: ["TypeScript", "JavaScript", "React", "Next.js", "Express", "NestJS", "Vite"],
  },
  {
    group: "AI & Architecture",
    items: ["LLM Integration", "Agent Orchestration", "Prompt Engineering", "Spec-Driven Dev", "Microservices"],
  },
  {
    group: "Infrastructure & Data",
    items: ["PostgreSQL", "MongoDB", "Docker", "Kubernetes", "Cloud Infra", "Edge Computing"],
  },
  {
    group: "Testing & Quality",
    items: ["Jest", "React Testing Library", "Cypress", "Code Review", "Performance Tuning"],
  },
];

const EXPERIENCE = [
  {
    company: "NUSIC / SONGJAM",
    role: "Full Stack Engineer → VP of Engineering",
    period: "Feb 2021 — Present",
    description:
      "Lead engineering across a portfolio of music-tech and Web3 products, owning architecture through delivery on high-concurrency, 24/7 systems.",
    bullets: [
      "Architected real-time data pipelines processing 100k+ live mindshare events with TypeScript & Express.",
      "Built reusable React leaderboard components backed by edge computing for low-latency, frequently-refreshing data.",
      "Engineered a voice-first social environment for OpenClaw AI agents using Daily.co and ElevenLabs.",
      "Built a Python pipeline to scrape & transcribe X Spaces with multi-model configs and automated summary distribution.",
      "Shipped an AI-covers backend for source separation, voice cloning, and audio mixing on open Hugging Face models.",
      "Deployed a high-performance indexing engine that processed 200k+ assets to index 50k+ Music NFTs.",
    ],
  },
  {
    company: "Infosys",
    role: "Web Developer (Walmart)",
    period: "Jul 2020 — Jan 2021",
    description:
      "Embedded with the Walmart client team, translating complex retail logic into production-ready React.",
    bullets: [
      "Engineered a RESTful pricing & inquiry system, delivered to production on an accelerated 3-month timeline.",
      "Partnered with cross-functional stakeholders to ship a scalable, responsive enterprise application.",
    ],
  },
  {
    company: "Syncfusion",
    role: "Web Developer",
    period: "Apr 2018 — Mar 2020",
    description:
      "Owned development and cross-framework support for the DataGrid, one of Syncfusion's most widely used UI controls.",
    bullets: [
      "Delivered DataGrid features across 5 frameworks — React, Angular, Vue, ASP.NET MVC & Blazor.",
      "Built reusable, modular UI components used by thousands of developers with a focus on maintainability.",
    ],
  },
];

const ACHIEVEMENTS = [
  {
    name: "NFT Music Bonds",
    description: "Royalty-bearing NFT music bonds powered by a streaming data oracle.",
  },
  {
    name: "Fractionalized Music",
    description: "A platform reshaping music consumption models for the creator economy.",
  },
  {
    name: "Layer 1 for Music",
    description: "An open audio-fingerprinting and creator-metadata layer for Web3.",
  },
];

const EDUCATION = [
  {
    school: "Hindustan University, Chennai",
    detail: "B.Tech",
    period: "2013 — 2017",
  },
  {
    school: "Pesto Tech",
    detail: "Remote Software Engineering Program",
    period: "2020 — 2021",
  },
];

const STATS = [
  { value: "8+", label: "years" },
  { value: "20+", label: "apps shipped" },
  { value: "100k+", label: "events / pipeline" },
  { value: "50k+", label: "NFTs indexed" },
  { value: "10+", label: "hackathon wins" },
];

export default function PersonalSite() {
  return (
    <div
      style={{
        maxWidth: 880,
        margin: "0 auto",
        padding: "80px 24px 120px",
        fontFamily: "'Roboto Mono', monospace",
      }}
    >
      {/* Header */}
      <header style={{ marginBottom: 80 }}>
        <p
          style={{
            color: "#10B981",
            fontSize: 12,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: 16,
            fontWeight: 500,
          }}
        >
          Senior Full Stack Engineer · 8+ Years
        </p>
        <h1
          style={{
            fontSize: "clamp(40px, 8vw, 60px)",
            fontWeight: 600,
            lineHeight: 1.05,
            marginBottom: 20,
            letterSpacing: "-0.03em",
            background: "linear-gradient(120deg, #ffffff 0%, #d4d4d4 40%, #99A1AF 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Logesh Rajappa
        </h1>
        <p
          style={{
            color: "#99A1AF",
            fontSize: 14,
            lineHeight: 1.85,
            maxWidth: 640,
            marginBottom: 32,
          }}
        >
          Senior full-stack engineer who takes products from{" "}
          <strong style={{ color: "#f5f5f5", fontWeight: 500 }}>zero to one</strong> — architecting
          high-scale, 24/7 systems in TypeScript, React, and Express. Recently shipped{" "}
          <strong style={{ color: "#f5f5f5", fontWeight: 500 }}>20+ apps</strong> spanning AI voice
          agents, LLM orchestration, WebRTC streaming, and Web3 — often learning a new stack and
          deploying complex full-stack apps end-to-end within{" "}
          <strong style={{ color: "#f5f5f5", fontWeight: 500 }}>two weeks</strong>.
        </p>

        {/* Stat row */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            marginBottom: 32,
          }}
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              style={{
                border: "1px solid #2a2a2a",
                borderRadius: 8,
                padding: "10px 16px",
                background: "rgba(255,255,255,0.015)",
              }}
            >
              <span
                style={{
                  color: "#f5f5f5",
                  fontSize: 18,
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                }}
              >
                {stat.value}
              </span>{" "}
              <span style={{ color: "#99A1AF", fontSize: 11 }}>{stat.label}</span>
            </div>
          ))}
        </div>

        <nav style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
          {SOCIAL_LINKS.map((link) => (
            <NavLink
              key={link.label}
              href={link.href}
              external={link.label !== "email"}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </header>

      {/* About + quick-glance timeline */}
      <section style={{ marginBottom: 64 }}>
        <SectionHeading>about</SectionHeading>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 40,
            alignItems: "flex-start",
          }}
        >
          <div style={{ flex: "1 1 340px", minWidth: 280 }}>
            <p
              style={{
                color: "#99A1AF",
                fontSize: 13,
                lineHeight: 1.85,
                marginBottom: 16,
              }}
            >
              I started out building widely-used UI components at Syncfusion,
              shipped enterprise React for Walmart at Infosys, and have spent the
              last several years architecting high-scale, AI-driven products across
              web, mobile, and Web3 at NUSIC/Songjam.
            </p>
            <p style={{ color: "#99A1AF", fontSize: 13, lineHeight: 1.85 }}>
              I move fast — learning new stacks and shipping complex full-stack apps
              end-to-end in weeks, while keeping a strong focus on scalable, secure,
              and user-centric software. Always open to interesting conversations.
            </p>
          </div>

          {/* Quick-glance timeline */}
          <div style={{ flex: "0 1 260px", minWidth: 240 }}>
            <p
              style={{
                color: "#99A1AF",
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: 18,
              }}
            >
              At a glance
            </p>
            <div style={{ position: "relative", paddingLeft: 18 }}>
              <div
                style={{
                  position: "absolute",
                  left: 3,
                  top: 4,
                  bottom: 4,
                  width: 1,
                  background: "#2a2a2a",
                }}
              />
              {EXPERIENCE.map((job) => (
                <div
                  key={job.company}
                  style={{ position: "relative", marginBottom: 20 }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: -18,
                      top: 4,
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: "#121212",
                      border: "1px solid #10B981",
                    }}
                  />
                  <p style={{ color: "#555", fontSize: 11, marginBottom: 2 }}>
                    {job.period}
                  </p>
                  <p style={{ color: "#d4d4d4", fontSize: 12.5, fontWeight: 500 }}>
                    {job.company}
                  </p>
                  <p style={{ color: "#99A1AF", fontSize: 11.5 }}>{job.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section style={{ marginBottom: 64 }}>
        <SectionHeading>skills</SectionHeading>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          {SKILLS.map((group) => (
            <div key={group.group}>
              <p
                style={{
                  color: "#99A1AF",
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: 10,
                }}
              >
                {group.group}
              </p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      color: "#d4d4d4",
                      fontSize: 12,
                      border: "1px solid #2a2a2a",
                      background: "rgba(255,255,255,0.015)",
                      padding: "5px 12px",
                      borderRadius: 6,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section style={{ marginBottom: 64 }}>
        <SectionHeading>highlights</SectionHeading>
        <div className="masonry">
          {HIGHLIGHTS.map((item) => (
            <a
               key={item.name}
               className="masonry-card"
               href={item.href}
               target="_blank"
               rel="noopener noreferrer"
               style={{
                 display: "block",
                 textDecoration: "none",
                 background: "rgba(255,255,255,0.015)",
                 border: "1px solid #2a2a2a",
                 borderRadius: 8,
                 padding: "20px 22px",
                 transition: "background 0.15s, border-color 0.15s, transform 0.15s",
                 position: "relative",
                 overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "rgba(255,255,255,0.03)";
                el.style.borderColor = "#3a3a3a";
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "rgba(255,255,255,0.015)";
                el.style.borderColor = "#2a2a2a";
                el.style.transform = "translateY(0)";
              }}
            >
              {/* color strip */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: 3,
                  height: "100%",
                  background: item.color,
                  borderRadius: "8px 0 0 8px",
                }}
              />
              <div style={{ paddingLeft: 4 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 4,
                    flexWrap: "wrap",
                    gap: 6,
                  }}
                >
                  <span
                    style={{
                      color: "#d4d4d4",
                      fontSize: 13,
                      fontWeight: 500,
                    }}
                  >
                    {item.name}
                  </span>
                  <span style={{ color: item.color, fontSize: 11, opacity: 0.9 }}>
                    {item.tagline} ↗
                  </span>
                </div>
                <p
                  style={{
                    color: "#99A1AF",
                    fontSize: 12,
                    lineHeight: 1.75,
                    marginBottom: 12,
                  }}
                >
                  {item.description}
                </p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        color: "#99A1AF",
                        fontSize: 10,
                        border: "1px solid #2a2a2a",
                        padding: "2px 7px",
                        borderRadius: 3,
                        letterSpacing: "0.03em",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section style={{ marginBottom: 64 }}>
        <SectionHeading>experience</SectionHeading>
        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
          {EXPERIENCE.map((job) => (
            <div key={job.company}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  flexWrap: "wrap",
                  gap: 4,
                  marginBottom: 4,
                }}
              >
                <span style={{ color: "#d4d4d4", fontSize: 13, fontWeight: 500 }}>
                  {job.company}
                </span>
                <span style={{ color: "#555", fontSize: 12 }}>{job.period}</span>
              </div>
              <p style={{ color: "#99A1AF", fontSize: 12, marginBottom: 8 }}>
                {job.role}
              </p>
              <p style={{ color: "#99A1AF", fontSize: 13, lineHeight: 1.8, marginBottom: 12 }}>
                {job.description}
              </p>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                {job.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    style={{
                      color: "#99A1AF",
                      fontSize: 12.5,
                      lineHeight: 1.7,
                      paddingLeft: 18,
                      position: "relative",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        color: "#10B981",
                      }}
                    >
                      ▹
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section style={{ marginBottom: 64 }}>
        <SectionHeading>achievements</SectionHeading>
        <p style={{ color: "#d4d4d4", fontSize: 13, marginBottom: 24 }}>
          <strong style={{ color: "#f5f5f5", fontWeight: 600 }}>10+</strong> international hackathon
          wins ·{" "}
          <strong style={{ color: "#f5f5f5", fontWeight: 600 }}>$50K+</strong> in prizes
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {ACHIEVEMENTS.map((item) => (
            <div key={item.name}>
              <p style={{ color: "#d4d4d4", fontSize: 13, fontWeight: 500, marginBottom: 4 }}>
                {item.name}
              </p>
              <p style={{ color: "#99A1AF", fontSize: 12.5, lineHeight: 1.7 }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section style={{ marginBottom: 64 }}>
        <SectionHeading>education</SectionHeading>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {EDUCATION.map((edu) => (
            <div
              key={edu.school}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                flexWrap: "wrap",
                gap: 4,
              }}
            >
              <div>
                <span style={{ color: "#d4d4d4", fontSize: 13, fontWeight: 500 }}>
                  {edu.school}
                </span>
                <p style={{ color: "#99A1AF", fontSize: 12, marginTop: 2 }}>{edu.detail}</p>
              </div>
              <span style={{ color: "#555", fontSize: 12 }}>{edu.period}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer>
        <Divider />
        <p style={{ color: "#555", fontSize: 12, marginTop: 24 }}>
          © {new Date().getFullYear()} Logesh Rajappa
        </p>
      </footer>
    </div>
  );
}

function NavLink({
  href,
  external,
  children,
}: {
  href: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel="noopener noreferrer"
      style={{
        color: "#99A1AF",
        fontSize: 13,
        textDecoration: "none",
        borderBottom: "1px solid #2a2a2a",
        paddingBottom: 1,
        transition: "color 0.15s, border-color 0.15s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.color = "#d4d4d4";
        (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "#d4d4d4";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.color = "#99A1AF";
        (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "#2a2a2a";
      }}
    >
      {children}
    </a>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        marginBottom: 28,
      }}
    >
      <span 
        style={{ 
          color: "#99A1AF", 
          fontSize: 12, 
          fontWeight: 600, 
          textTransform: "uppercase",
          letterSpacing: "0.1em" 
        }}
      >
        {children}
      </span>
      <div style={{ flex: 1, height: 1, backgroundColor: "#2a2a2a" }} />
    </div>
  );
}

function Divider() {
  return <div style={{ height: 1, backgroundColor: "#1e1e1e" }} />;
}
