"use client";

import { useEffect, useRef } from "react";

const techStack = [
  { name: "JavaScript", color: "#f7df1e" },
  { name: "TypeScript", color: "#3178c6" },
  { name: "React", color: "#61dafb" },
  { name: "Next.js", color: "#ffffff" },
  { name: "React Native", color: "#61dafb" },
  { name: "Node.js", color: "#8cc84b" },
  { name: "TailwindCSS", color: "#38bdf8" },
  { name: "Redux", color: "#764abc" },
  { name: "Firebase", color: "#ffca28" },
  { name: "MongoDB", color: "#47a248" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "Git", color: "#f05032" },
  { name: "Figma", color: "#f24e1e" },
  { name: "REST APIs", color: "#a78bfa" },
];

const highlights = [
  {
    icon: "🎓",
    label: "Biomedical Engineering",
    sub: "University of Ilorin",
  },
  {
    icon: "🔐",
    label: "ALX Cybersecurity",
    sub: "2025 – 2026",
  },
  {
    icon: "🏅",
    label: "Udacity Full-Stack",
    sub: "Nanodegree 2022",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(".reveal")
              .forEach((el, i) => {
                setTimeout(() => el.classList.add("visible"), i * 100);
              });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="about-section"
      style={{ padding: "120px 0 80px" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="reveal mb-16">
          <p className="section-label mb-3">About me</p>
          <h2
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            Overview
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left: Bio text (takes 2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="reveal">
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: 1.8,
                  color: "var(--text-secondary)",
                }}
              >
                I'm a software developer specializing in{" "}
                <span className="highlight-violet">
                  frontend and mobile engineering
                </span>
                , focused on building clean, scalable, and user-centered
                digital experiences. I've worked with startups where I
                contributed to production-level platforms across{" "}
                <span className="highlight-cyan">
                  health tech, edtech, and automation
                </span>
                .
              </p>
            </div>

            <div className="reveal reveal-delay-1">
              <p
                style={{
                  fontSize: "17px",
                  lineHeight: 1.8,
                  color: "var(--text-secondary)",
                }}
              >
                With a background in{" "}
                <span className="highlight-gold">Biomedical Engineering</span>,
                I bring a systems-thinking mindset to every codebase, known
                for turning complex ideas into intuitive interfaces and
                bringing clarity and structure to challenging or legacy
                systems. I'm driven to build meaningful products end-to-end
                while exploring new industries and technologies.
              </p>
            </div>

            {/* What I do cards */}
            <div className="reveal reveal-delay-2 grid sm:grid-cols-2 gap-4 mt-8">
              <div className="exp-card">
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: "rgba(167, 139, 250, 0.1)",
                    border: "1px solid rgba(167, 139, 250, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "18px",
                    marginBottom: "16px",
                  }}
                >
                  🌐
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontSize: "17px",
                    fontWeight: 700,
                    marginBottom: "8px",
                    color: "var(--text-primary)",
                  }}
                >
                  Frontend Developer
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                  }}
                >
                  React, Next.js, TypeScript, building performant, accessible
                  web experiences with real-time features and polished UIs.
                </p>
              </div>

              <div className="exp-card">
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: "rgba(34, 211, 238, 0.1)",
                    border: "1px solid rgba(34, 211, 238, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "18px",
                    marginBottom: "16px",
                  }}
                >
                  📱
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontSize: "17px",
                    fontWeight: 700,
                    marginBottom: "8px",
                    color: "var(--text-primary)",
                  }}
                >
                  Mobile Developer
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                  }}
                >
                  React Native for iOS & Android, shipping cross-platform
                  apps with optimized performance, offline support, and native
                  feel.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Quick info + highlights */}
          <div className="space-y-6">
            {/* Education & creds */}
            <div className="reveal reveal-delay-2">
              <p
                className="section-label mb-4"
                style={{ fontSize: "10px" }}
              >
                Background
              </p>
              <div className="space-y-3">
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "12px 16px",
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid var(--border)",
                      borderRadius: "10px",
                    }}
                  >
                    <span style={{ fontSize: "18px" }}>{item.icon}</span>
                    <div>
                      <div
                        style={{
                          fontSize: "13px",
                          fontWeight: 600,
                          color: "var(--text-primary)",
                        }}
                      >
                        {item.label}
                      </div>
                      <div
                        style={{
                          fontSize: "12px",
                          color: "var(--text-muted)",
                        }}
                      >
                        {item.sub}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div className="reveal reveal-delay-3">
              <p
                className="section-label mb-4"
                style={{ fontSize: "10px" }}
              >
                Find me at
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="https://linkedin.com/in/ruqouyyahmuhammad/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ padding: "10px 16px", fontSize: "13px" }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="https://github.com/mruqqie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ padding: "10px 16px", fontSize: "13px" }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="reveal reveal-delay-3 mt-16">
          <p className="section-label mb-6">Tech Stack</p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech.name}
                className="skill-tag"
                style={{ display: "flex", alignItems: "center", gap: "6px" }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: tech.color,
                    flexShrink: 0,
                  }}
                />
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
