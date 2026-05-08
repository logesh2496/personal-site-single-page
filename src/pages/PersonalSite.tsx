const SOCIAL_LINKS = [
  { label: "github", href: "https://github.com" },
  { label: "linkedin", href: "https://linkedin.com" },
  { label: "twitter", href: "https://twitter.com" },
  { label: "email", href: "mailto:logesh@example.com" },
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

const EXPERIENCE = [
  {
    company: "NUSIC / SONGJAM",
    role: "VP of Engineering",
    period: "6+ years",
    description:
      "Led engineering across multiple products — building web apps, mobile apps, and trusted web activities (TWAs). Worked across the full stack from architecture to shipping, spanning music-tech and e-commerce domains.",
  },
  {
    company: "Infosys",
    role: "Associate Business Analyst",
    period: "6 months",
    description:
      "Embedded with the Walmart client team as a business analyst. Bridged technical and product requirements, translating business needs into engineering deliverables.",
  },
  {
    company: "Syncfusion Software",
    role: "Software Engineer",
    period: "2 years",
    description:
      "Worked on the DataGrid component — one of Syncfusion's most widely used UI controls. Focused on performance, feature development, and cross-browser compatibility.",
  },
];

export default function PersonalSite() {
  return (
    <div
      style={{
        maxWidth: 680,
        margin: "0 auto",
        padding: "80px 24px 120px",
        fontFamily: "'Roboto Mono', monospace",
      }}
    >
      {/* Header */}
      <header style={{ marginBottom: 72 }}>
        <h1
          style={{
            fontSize: 28,
            fontWeight: 500,
            color: "#d4d4d4",
            lineHeight: 1.2,
            marginBottom: 8,
            letterSpacing: "-0.01em",
          }}
        >
          Logesh Rajappa
        </h1>
        <p style={{ color: "#99A1AF", fontSize: 13, marginBottom: 20 }}>
          Full Stack Engineer
        </p>
        <p
          style={{
            color: "#99A1AF",
            fontSize: 13,
            lineHeight: 1.85,
            maxWidth: 600,
            marginBottom: 28,
          }}
        >
          Engineer turned engineering leader with{" "}
          <strong style={{ color: "#d4d4d4", fontWeight: 500 }}>8+ years</strong>{" "}
          of experience. Obsessed with rapid iteration and zero-to-one building—recently shipped{" "}
          <strong style={{ color: "#d4d4d4", fontWeight: 500 }}>20+ diverse apps</strong>{" "}
          spanning AI voice agents, WebRTC streaming, and Web3. Passionate about exploring new tech, often learning a new stack and deploying complex full-stack apps end-to-end within a span of{" "}
          <strong style={{ color: "#d4d4d4", fontWeight: 500 }}>2 weeks</strong>.
        </p>
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

      {/* Highlights */}
      <section style={{ marginBottom: 64 }}>
        <SectionHeading>highlights</SectionHeading>
        <div 
          className="custom-scrollbar"
          style={{ 
            display: "flex", 
            flexDirection: "column", 
            gap: 16,
            maxHeight: 600,
            overflowY: "auto",
            paddingRight: 8
          }}
        >
          {HIGHLIGHTS.map((item) => (
            <a
               key={item.name}
               href={item.href}
               target="_blank"
               rel="noopener noreferrer"
               style={{
                 flexShrink: 0,
                 display: "block",
                 textDecoration: "none",
                 background: item.accent,
                 border: `1px solid ${item.border}`,
                 borderRadius: 6,
                 padding: "20px 22px",
                 transition: "background 0.15s, border-color 0.15s",
                 position: "relative",
                 overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background =
                  item.accent.replace("0.10", "0.18").replace("0.12", "0.20");
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  item.color;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = item.accent;
                (e.currentTarget as HTMLAnchorElement).style.borderColor = item.border;
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
                  borderRadius: "6px 0 0 6px",
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
                        color: item.color,
                        fontSize: 10,
                        border: `1px solid ${item.border}`,
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
              <p style={{ color: "#99A1AF", fontSize: 13, lineHeight: 1.8 }}>
                {job.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section style={{ marginBottom: 64 }}>
        <SectionHeading>about</SectionHeading>
        <p
          style={{
            color: "#99A1AF",
            fontSize: 13,
            lineHeight: 1.85,
            marginBottom: 16,
          }}
        >
          I started as a software engineer — building UI components at
          Syncfusion, doing frontend developement at Infosys, then spending 6+
          years shipping products across web, mobile, and TWA at
          NUSIC.
        </p>
        <p style={{ color: "#99A1AF", fontSize: 13, lineHeight: 1.85 }}>
          Today I focus on engineering leadership — building teams, defining
          technical direction, and creating the conditions for engineers to do
          their best work. Always open to interesting conversations.
        </p>
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
