"use client";

import { useEffect, useRef } from "react";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Mently Technologies",
    period: "Dec 2024 – Present",
    type: "Full-time",
    description:
      "Edtech startup building mentor-led learning platforms for professionals.",
    color: "var(--accent-violet)",
    colorBg: "rgba(167, 139, 250, 0.08)",
    colorBorder: "rgba(167, 139, 250, 0.2)",
    emoji: "🎓",
    achievements: [
      {
        text: "Led frontend development for the mentor-led platform; built course creation, curriculum editor, and in-app collaboration features",
        metric: "2k+ users",
      },
      {
        text: "Implemented Next.js + TypeScript with SSR/ISR and dynamic imports",
        metric: "TTI ↓20% · Bundle ↓25%",
      },
      {
        text: "Built real-time learning features; video conferencing, live group calls, screen sharing — integrated Pusher for signals",
        metric: "500+ concurrent sessions",
      },
      {
        text: "Designed and shipped WhatsApp-style in-app chat with group messaging, read receipts, media uploads, and offline sync",
        metric: "1k+ active users",
      },
      {
        text: "Authored component library and style system that reduced new page development time",
        metric: "Dev time ↓25%",
      },
    ],
  },
  {
    role: "Frontend Engineer",
    company: "Gurugeeks Royalty",
    period: "Jun 2024 – Nov 2024",
    type: "Full-time",
    description:
      "Solutions company providing IT services, Cloud AI, and SaaS products.",
    color: "var(--accent-cyan)",
    colorBg: "rgba(34, 211, 238, 0.08)",
    colorBorder: "rgba(34, 211, 238, 0.2)",
    emoji: "☁️",
    achievements: [
      {
        text: "Led a 3-person team to rebuild the company site and academy using Next.js",
        metric: "Lighthouse +30pts · Load ↓53%",
      },
      {
        text: "Architected LMS modules (auth, course management, analytics) as decoupled services; simplified testing and deployment",
        metric: "Rollbacks ↓60%",
      },
      {
        text: "Delivered client customizations on WordPress, handling multiple client requests monthly",
        metric: "Avg delivery: 3 days",
      },
      {
        text: "Coordinated with DevOps to resolve CI/CD and environment issues",
        metric: "Deployment downtime ↓",
      },
    ],
  },
  {
    role: "Mobile App Developer",
    company: "Dokta Health",
    period: "Feb 2024 – Jun 2024",
    type: "Full-time",
    description:
      "Health tech company transforming healthcare for patients and providers.",
    color: "#4ade80",
    colorBg: "rgba(74, 222, 128, 0.08)",
    colorBorder: "rgba(74, 222, 128, 0.2)",
    emoji: "🏥",
    achievements: [
      {
        text: "Optimized React Native app architecture for iOS & Android",
        metric: "Cold start ↓45%",
      },
      {
        text: "Integrated RESTful APIs and improved offline handling/caching strategies",
        metric: "API errors ↓ · Reliability ↑",
      },
      {
        text: "Implemented feature work; booking flows, push notifications, in-app ecommerce",
        metric: "Signups +30%",
      },
      {
        text: "Maintained compatibility across OS updates and device families; triaged high-priority crashes",
        metric: "Crash rate ↓",
      },
    ],
  },
  {
    role: "Frontend Developer",
    company: "MentorMeInTech",
    period: "Jan 2023 – Feb 2024",
    type: "Full-time",
    description: "EdTech company matching tech beginners to experienced mentors.",
    color: "var(--accent-gold)",
    colorBg: "rgba(245, 158, 11, 0.08)",
    colorBorder: "rgba(245, 158, 11, 0.2)",
    emoji: "🎯",
    achievements: [
      {
        text: "Designed and shipped scalable frontend for mentor matching and scheduling; launched calendar & session booking",
        metric: "Bookings +60%",
      },
      {
        text: "Built responsive UI components and optimized CSS/JS delivery with code-splitting",
        metric: "Core Web Vitals ↑",
      },
      {
        text: "Collaborated with backend to design APIs and reduce payload sizes",
        metric: "API response time ↓",
      },
      {
        text: "Introduced client-side form validation and UX improvements",
        metric: "Drop-off ↓ in booking flow",
      },
    ],
  },
  {
    role: "Web Developer Intern",
    company: "RadicalX",
    period: "Sep 2022 – Dec 2022",
    type: "Internship",
    description: "Tech company focused on accelerating developer careers.",
    color: "var(--text-secondary)",
    colorBg: "rgba(148, 163, 184, 0.06)",
    colorBorder: "rgba(148, 163, 184, 0.15)",
    emoji: "🚀",
    achievements: [
      {
        text: "Collaborated with a team to build a fully functional website using React.js and Node.js",
        metric: null,
      },
      {
        text: "Translated Figma designs into responsive components; implemented backend functionalities",
        metric: null,
      },
      {
        text: "Participated in Agile-based project management, sprint planning, and retrospective meetings",
        metric: null,
      },
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(".reveal")
              .forEach((el, i) => {
                setTimeout(() => el.classList.add("visible"), i * 120);
              });
          }
        });
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      style={{ padding: "80px 0 120px" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="reveal mb-16">
          <p className="section-label mb-3">Work history</p>
          <h2
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(30px, 5vw, 56px)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline vertical line */}
          <div
            className="absolute left-4 top-0 bottom-0 w-px timeline-line hidden lg:block"
            style={{ left: "28px" }}
          />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex gap-8">
                  {/* Timeline dot */}
                  <div className="hidden lg:flex flex-col items-center flex-shrink-0">
                    <div
                      className="timeline-dot"
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "50%",
                        background: "var(--bg-primary)",
                        border: `2px solid ${exp.color}`,
                        boxShadow: `0 0 16px ${exp.color}40`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "18px",
                        zIndex: 1,
                        flexShrink: 0,
                        marginTop: "4px",
                      }}
                    >
                      {exp.emoji}
                    </div>
                  </div>

                  {/* Card content */}
                  <div className="exp-card flex-1">
                    {/* Header */}
                    <div className="exp-card-header flex flex-wrap items-start justify-between gap-4 mb-5">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <span
                            className="text-2xl lg:hidden"
                          >
                            {exp.emoji}
                          </span>
                          <h3
                            style={{
                              fontFamily: "var(--font-syne)",
                              fontSize: "20px",
                              fontWeight: 700,
                              color: "var(--text-primary)",
                            }}
                          >
                            {exp.role}
                          </h3>
                        </div>
                        <div
                          style={{
                            fontSize: "14px",
                            color: exp.color,
                            fontWeight: 600,
                          }}
                        >
                          {exp.company}
                        </div>
                        <div
                          style={{
                            fontSize: "13px",
                            color: "var(--text-muted)",
                            marginTop: "4px",
                          }}
                        >
                          {exp.description}
                        </div>
                      </div>

                      <div
                        className="exp-card-header-meta"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-end",
                          gap: "6px",
                          flexShrink: 0,
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "var(--font-dm-mono)",
                            fontSize: "13px",
                            color: "var(--text-secondary)",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {exp.period}
                        </span>
                        <span
                          style={{
                            fontSize: "11px",
                            padding: "3px 10px",
                            borderRadius: "20px",
                            background: exp.colorBg,
                            border: `1px solid ${exp.colorBorder}`,
                            color: exp.color,
                            fontFamily: "var(--font-dm-mono)",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-4">
                      {exp.achievements.map((item, i) => (
                        <div
                          key={i}
                          className="achievement-row"
                          style={{
                            display: "flex",
                            gap: "12px",
                            alignItems: "flex-start",
                            flexWrap: "wrap",
                          }}
                        >
                          <div style={{ display: "flex", gap: "12px", alignItems: "flex-start", flex: 1, minWidth: 0 }}>
                            <div
                              style={{
                                width: "6px",
                                height: "6px",
                                borderRadius: "50%",
                                background: exp.color,
                                flexShrink: 0,
                                marginTop: "7px",
                                boxShadow: `0 0 6px ${exp.color}60`,
                              }}
                            />
                            <p
                              style={{
                                fontSize: "14px",
                                color: "var(--text-secondary)",
                                lineHeight: 1.6,
                                flex: 1,
                                minWidth: 0,
                              }}
                            >
                              {item.text}
                            </p>
                          </div>
                          {item.metric && (
                            <span
                              className="metric-badge"
                              style={{ flexShrink: 0, marginLeft: "18px" }}
                            >
                              {item.metric}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
