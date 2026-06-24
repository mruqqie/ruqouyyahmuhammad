"use client";

import { useEffect, useRef } from "react";

const projects = [
  {
    title: "Mently",
    subtitle: "Mentor-Led Learning Platform",
    description:
      "An all-in-one platform for mentorships, programs, trainings, and building impactful communities. Features real-time video conferencing, live group calls, screen sharing, and WhatsApp-style chat.",
    impact: [
      "2k+ active users on platform",
      "500+ concurrent live sessions",
      "20% TTI improvement with SSR/ISR",
      "WhatsApp-style chat with offline sync",
    ],
    tags: ["Next.js", "TypeScript", "Pusher", "Agora", "TailwindCSS", "Zustand", "Firebase"],
    liveUrl: "https://mymently.com",
    featured: true,
    accent: "var(--accent-violet)",
    accentBg: "rgba(167, 139, 250, 0.06)",
    accentBorder: "rgba(167, 139, 250, 0.2)",
    type: "EdTech · SaaS",
    status: "Live Product",
    imageBg: "linear-gradient(135deg, #1a0a3d 0%, #0d1424 60%, #0a1628 100%)",
    previewContent: "LMS + Real-time Collaboration",
  },
  {
    title: "MentorMeInTech Platform",
    subtitle: "Career Mentorship Marketplace",
    description:
      "An online learning platform matching tech beginners with experienced mentors, featuring calendar scheduling, session booking, and mentor discovery.",
    impact: [
      "Booking conversion +60%",
      "Calendar & scheduling system",
      "Core Web Vitals improved",
      "Drop-off reduced in booking flow",
    ],
    tags: ["React", "Redux", "TailwindCSS", "Material UI", "Framer Motion", "JavaScript"],
    liveUrl: "https://mentormeintech.com",
    featured: false,
    accent: "var(--accent-gold)",
    accentBg: "rgba(245, 158, 11, 0.06)",
    accentBorder: "rgba(245, 158, 11, 0.2)",
    type: "EdTech · Marketplace",
    status: "Live Product",
    imageBg: "linear-gradient(135deg, #1a1000 0%, #0d1424 60%, #0a1628 100%)",
    previewContent: "Mentor Discovery + Booking",
  },
  {
    title: "Gurugeeks Academy",
    subtitle: "Tech Education Platform",
    description:
      "Online learning platform offering tech courses with user-friendly interface and efficient LMS. Rebuilt from scratch with decoupled service architecture.",
    impact: [
      "Lighthouse score +30 points",
      "Page load reduced by ~53%",
      "Deployment rollbacks ↓60%",
      "Decoupled LMS architecture",
    ],
    tags: ["Next.js", "Redux", "TailwindCSS", "WordPress"],
    liveUrl: "https://gurugeeksroyalty.biz",
    featured: false,
    accent: "var(--accent-cyan)",
    accentBg: "rgba(34, 211, 238, 0.06)",
    accentBorder: "rgba(34, 211, 238, 0.2)",
    type: "EdTech · LMS",
    status: "Live Product",
    imageBg: "linear-gradient(135deg, #001a1a 0%, #0d1424 60%, #0a1628 100%)",
    previewContent: "LMS + Course Management",
  },
  {
    title: "Dokta Health",
    subtitle: "Telemedicine Mobile App",
    description:
      "A telemedicine mobile application enabling users to consult with doctors remotely, offering free consultations and a seamless user experience across iOS & Android.",
    impact: [
      "Cold start time ↓45%",
      "User signups +30%",
      "Offline caching strategies",
      "Cross-platform iOS + Android",
    ],
    tags: ["React Native", "Firebase", "TailwindCSS", "REST APIs"],
    liveUrl: "https://www.doktahealth.com",
    featured: false,
    accent: "#4ade80",
    accentBg: "rgba(74, 222, 128, 0.06)",
    accentBorder: "rgba(74, 222, 128, 0.2)",
    type: "HealthTech · Mobile",
    status: "Google Play",
    imageBg: "linear-gradient(135deg, #001a0d 0%, #0d1424 60%, #0a1628 100%)",
    previewContent: "Telemedicine + Booking",
  },
  {
    title: "Hi-Llo Chat App",
    subtitle: "Real-time Chat Application",
    description:
      "Web-based platform that allows users to search and chat with friends in real-time. Built with modular and reusable components adhering to scalable system design.",
    impact: [
      "Real-time messaging",
      "User search & discovery",
      "Modular architecture",
      "Open source on GitHub",
    ],
    tags: ["React", "Redux", "Firebase", "SASS"],
    liveUrl: "#",
    githubUrl: "https://github.com/mruqqie",
    featured: false,
    accent: "var(--accent-violet)",
    accentBg: "rgba(167, 139, 250, 0.06)",
    accentBorder: "rgba(167, 139, 250, 0.2)",
    type: "Consumer · Chat",
    status: "Open Source",
    imageBg: "linear-gradient(135deg, #1a0a3d 0%, #0d1424 60%, #0a1628 100%)",
    previewContent: "Real-time Messaging",
  },
  {
    title: "Ecommerce Application",
    subtitle: "Next.js Shopping Platform",
    description:
      "Full-featured eCommerce web app with Atomic Design (atoms, molecules, organisms) for scalable UI, SSR/ISR, and global state management.",
    impact: [
      "Atomic design system",
      "SSR/ISR for performance",
      "Context API state management",
      "TypeScript strict mode",
    ],
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Context API"],
    liveUrl: "#",
    featured: false,
    accent: "var(--accent-gold)",
    accentBg: "rgba(245, 158, 11, 0.06)",
    accentBorder: "rgba(245, 158, 11, 0.2)",
    type: "Ecommerce",
    status: "Personal Project",
    imageBg: "linear-gradient(135deg, #1a1000 0%, #0d1424 60%, #0a1628 100%)",
    previewContent: "Shopping + Checkout Flow",
  },
];

function ProjectCard({ project, large = false }: { project: typeof projects[0]; large?: boolean }) {
  return (
    <div
      className="project-card h-full"
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Preview area */}
      <div
        style={{
          background: project.imageBg,
          padding: large ? "40px 32px 32px" : "28px 24px 24px",
          position: "relative",
          overflow: "hidden",
          minHeight: large ? "220px" : "160px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* Decorative grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        
        {/* Status badge */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <span
            style={{
              fontSize: "11px",
              padding: "4px 10px",
              borderRadius: "20px",
              background: project.accentBg,
              border: `1px solid ${project.accentBorder}`,
              color: project.accent,
              fontFamily: "var(--font-dm-mono)",
              zIndex: 1,
            }}
          >
            {project.type}
          </span>
          
          <div style={{ display: "flex", gap: "8px", zIndex: 1 }}>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "8px",
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--text-secondary)",
                  transition: "all 0.2s",
                  textDecoration: "none",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            )}
            {project.liveUrl !== "#" && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "8px",
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--text-secondary)",
                  transition: "all 0.2s",
                  textDecoration: "none",
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Preview label */}
        <div
          style={{
            fontFamily: "var(--font-syne)",
            fontSize: large ? "28px" : "18px",
            fontWeight: 700,
            color: "rgba(255,255,255,0.08)",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            lineHeight: 1,
            position: "absolute",
            bottom: "20px",
            left: "24px",
            right: "24px",
          }}
        >
          {project.previewContent}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: large ? "28px 32px" : "20px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ marginBottom: "12px" }}>
          <h3
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: large ? "22px" : "18px",
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: "4px",
            }}
          >
            {project.title}
          </h3>
          <p style={{ fontSize: "13px", color: project.accent, fontWeight: 600 }}>
            {project.subtitle}
          </p>
        </div>

        <p
          style={{
            fontSize: "14px",
            color: "var(--text-secondary)",
            lineHeight: 1.6,
            marginBottom: "16px",
            flex: 1,
          }}
        >
          {project.description}
        </p>

        {/* Impact metrics */}
        {large && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "8px",
              marginBottom: "16px",
            }}
          >
            {project.impact.map((item, i) => (
              <div
                key={i}
                style={{
                  fontSize: "12px",
                  color: "var(--text-secondary)",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <span style={{ color: project.accent, fontSize: "10px" }}>▸</span>
                {item}
              </div>
            ))}
          </div>
        )}

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "auto" }}>
          {project.tags.slice(0, large ? undefined : 4).map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: "11px",
                padding: "3px 10px",
                borderRadius: "4px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "var(--text-muted)",
                fontFamily: "var(--font-dm-mono)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
            });
          }
        });
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const [featuredProject, ...otherProjects] = projects;

  return (
    <section
      id="projects"
      ref={sectionRef}
      style={{
        padding: "80px 0 120px",
        background: "var(--bg-secondary)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="reveal mb-12">
          <p className="section-label mb-3">Selected work</p>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: "clamp(36px, 5vw, 56px)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              Projects
            </h2>
            <a
              href="https://github.com/mruqqie"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ fontSize: "13px", padding: "10px 20px" }}
            >
              View GitHub →
            </a>
          </div>
        </div>

        {/* Featured project */}
        <div className="reveal mb-6">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "12px",
            }}
          >
            <span className="section-label" style={{ fontSize: "10px" }}>
              Featured
            </span>
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#4ade80",
                display: "inline-block",
                boxShadow: "0 0 8px rgba(74, 222, 128, 0.6)",
              }}
            />
          </div>
          <ProjectCard project={featuredProject} large={true} />
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {otherProjects.map((project, i) => (
            <div key={project.title} className={`reveal reveal-delay-${Math.min(i + 1, 4)}`}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
