"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ padding: "40px 0", borderTop: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="footer-inner flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left: name + role */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "8px",
                background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-syne)",
                fontWeight: 800,
                fontSize: "14px",
                color: "white",
              }}
            >
              R
            </div>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-syne)",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  lineHeight: 1,
                }}
              >
                Ruqouyyah Muhammad
              </p>
              <p
                style={{
                  fontSize: "12px",
                  color: "var(--text-muted)",
                  marginTop: "2px",
                }}
              >
                Frontend & Mobile Developer
              </p>
            </div>
          </div>

          {/* Center: copyright */}
          <p
            style={{
              fontSize: "13px",
              color: "var(--text-muted)",
              fontFamily: "var(--font-dm-mono)",
            }}
          >
            © {year} · Built with Next.js
          </p>

          {/* Right: quick links */}
          <div style={{ display: "flex", gap: "20px" }}>
            {["#about", "#experience", "#projects", "#contact"].map((href) => (
              <a
                key={href}
                href={href}
                style={{
                  fontSize: "13px",
                  color: "var(--text-muted)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                  textTransform: "capitalize",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--accent-violet)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--text-muted)")
                }
              >
                {href.replace("#", "")}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
