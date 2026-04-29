const SOCIAL_LINKS = [
  { label: "github", href: "https://github.com" },
  { label: "linkedin", href: "https://linkedin.com" },
  { label: "twitter", href: "https://twitter.com" },
  { label: "email", href: "mailto:logesh@example.com" },
];

const HIGHLIGHTS = [
  {
    name: "Tapster Club",
    href: "https://tapsterclub.vercel.app/",
    tagline: "Where Networking Begins",
    description:
      "A platform for meaningful professional networking. Built end-to-end — from design to deployment.",
    tags: ["web", "react", "vercel"],
    color: "#7C3AED",
    accent: "rgba(124, 58, 237, 0.12)",
    border: "rgba(124, 58, 237, 0.35)",
  },
  {
    name: "Moltspaces",
    href: "https://www.moltspaces.com/",
    tagline: "moltspaces.com",
    description:
      "A modern web platform built for creative spaces and communities. Designed and shipped from the ground up.",
    tags: ["web", "react"],
    color: "#10B981",
    accent: "rgba(16, 185, 129, 0.10)",
    border: "rgba(16, 185, 129, 0.30)",
  },
  {
    name: "Songjam",
    href: "https://my.songjam.space/",
    tagline: "X Spaces Archiving",
    description:
      "Download and transcribe X (Twitter) Spaces instantly. Search transcripts, create threads, and save recordings as MP3.",
    tags: ["web", "ai", "x spaces"],
    color: "#F59E0B",
    accent: "rgba(245, 158, 11, 0.10)",
    border: "rgba(245, 158, 11, 0.30)",
  },
  {
    name: "Infofi",
    href: "https://app.songjam.space/",
    tagline: "The Future of Engagement",
    description:
      "Agentic CRM and AI-powered outreach for X Spaces. Supercharge engagement and grow your audience with verifiable human connection.",
    tags: ["web", "ai", "crm", "x spaces"],
    color: "#EC4899",
    accent: "rgba(236, 72, 153, 0.10)",
    border: "rgba(236, 72, 153, 0.30)",
  },
];

const EXPERIENCE = [
  {
    company: "NUSIC / Songham & others",
    role: "VP of Engineering",
    period: "6+ years",
    description:
      "Led engineering across multiple products — building web apps, mobile apps, and trusted web activities (TWAs). Worked across the full stack from architecture to shipping, spanning music-tech and e-commerce domains.",
  },
  {
    company: "Syncfusion Software",
    role: "Software Engineer",
    period: "2 years",
    description:
      "Worked on the DataGrid component — one of Syncfusion's most widely used UI controls. Focused on performance, feature development, and cross-browser compatibility.",
  },
  {
    company: "Infosys",
    role: "Associate Business Analyst",
    period: "6 months",
    description:
      "Embedded with the Walmart client team as a business analyst. Bridged technical and product requirements, translating business needs into engineering deliverables.",
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
          VP of Engineering
        </p>
        <p
          style={{
            color: "#99A1AF",
            fontSize: 13,
            lineHeight: 1.85,
            maxWidth: 520,
            marginBottom: 28,
          }}
        >
          Engineer turned engineering leader. 8+ years building web apps,
          mobile apps, and UI components — now focused on the teams and systems
          that make great software possible.
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
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {HIGHLIGHTS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
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
          Syncfusion, doing business analysis at Infosys, then spending 6+
          years shipping products across web, mobile, and TWA at companies like
          NUSIC and Songham.
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
      <span style={{ color: "#555", fontSize: 11, letterSpacing: "0.1em" }}>
        {children}
      </span>
      <div style={{ flex: 1, height: 1, backgroundColor: "#1e1e1e" }} />
    </div>
  );
}

function Divider() {
  return <div style={{ height: 1, backgroundColor: "#1e1e1e" }} />;
}
