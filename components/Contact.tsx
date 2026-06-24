"use client";

import { useEffect, useRef, useState } from "react";

const socialLinks = [
	{
		label: "LinkedIn",
		href: "https://linkedin.com/in/ruqouyyahmuhammad/",
		icon: (
			<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
				<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
			</svg>
		),
		color: "#0077b5",
	},
	{
		label: "GitHub",
		href: "https://github.com/mruqqie",
		icon: (
			<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
				<path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
			</svg>
		),
		color: "#ffffff",
	},
	{
		label: "Email",
		href: "mailto:ruqouyyahmuhammad@gmail.com",
		icon: (
			<svg
				width="18"
				height="18"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
			>
				<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
				<polyline points="22,6 12,13 2,6" />
			</svg>
		),
		color: "var(--accent-violet)",
	},
];

type Status = "idle" | "loading" | "sent" | "error";

export default function Contact() {
	const sectionRef = useRef<HTMLElement>(null);
	const [status, setStatus] = useState<Status>("idle");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target
							.querySelectorAll(".reveal")
							.forEach((el, i) => {
								setTimeout(
									() => el.classList.add("visible"),
									i * 100,
								);
							});
					}
				});
			},
			{ threshold: 0.1 },
		);

		if (sectionRef.current) observer.observe(sectionRef.current);
		return () => observer.disconnect();
	}, []);

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		setStatus("loading");

		try {
			const res = await fetch(`https://formspree.io/f/meewpanl`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify({ name, email, message }),
			});

			if (res.ok) {
				setStatus("sent");
				setName("");
				setEmail("");
				setMessage("");
			} else {
				setStatus("error");
			}
		} catch {
			setStatus("error");
		}
	}

	return (
		<section
			id="contact"
			ref={sectionRef}
			style={{ padding: "100px 0 80px" }}
		>
			<div className="max-w-6xl mx-auto px-6">
				{/* Header */}
				<div className="reveal mb-16">
					<p className="section-label mb-3">Get in touch</p>
					<h2
						style={{
							fontFamily: "var(--font-syne)",
							fontSize: "clamp(36px, 5vw, 56px)",
							fontWeight: 800,
							letterSpacing: "-0.02em",
							lineHeight: 1.1,
							marginBottom: "16px",
						}}
					>
						Let's Work Together
					</h2>
					<p
						style={{
							fontSize: "17px",
							color: "var(--text-secondary)",
							maxWidth: "480px",
							lineHeight: 1.7,
						}}
					>
						I'm currently open to full-time roles, contract work,
						and exciting collaborations. If you have a project or
						opportunity, let's talk.
					</p>
				</div>

				<div className="grid lg:grid-cols-2 gap-16">
					{/* LEFT: Contact form */}
					<div className="reveal">
						<div
							style={{
								background: "var(--bg-card)",
								border: "1px solid var(--border)",
								borderRadius: "20px",
								padding: "32px",
							}}
							className="contact-form-wrapper"
						>
							{status === "sent" ? (
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										alignItems: "center",
										justifyContent: "center",
										minHeight: "300px",
										gap: "16px",
										textAlign: "center",
									}}
								>
									<div
										style={{
											width: "60px",
											height: "60px",
											borderRadius: "50%",
											background:
												"rgba(74, 222, 128, 0.1)",
											border: "1px solid rgba(74, 222, 128, 0.3)",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											fontSize: "24px",
										}}
									>
										✓
									</div>
									<h3
										style={{
											fontFamily: "var(--font-syne)",
											fontSize: "20px",
											fontWeight: 700,
											color: "#4ade80",
										}}
									>
										Message Sent!
									</h3>
									<p
										style={{
											color: "var(--text-secondary)",
											fontSize: "15px",
										}}
									>
										Thanks for reaching out — I'll get back
										to you shortly.
									</p>
									<button
										onClick={() => setStatus("idle")}
										className="btn-secondary inline-flex"
										style={{
											fontSize: "13px",
											padding: "10px 20px",
											marginTop: "8px",
										}}
									>
										Send another
									</button>
								</div>
							) : (
								<form
									onSubmit={handleSubmit}
									style={{
										display: "flex",
										flexDirection: "column",
										gap: "20px",
									}}
								>
									<div>
										<label
											style={{
												display: "block",
												fontSize: "13px",
												fontWeight: 600,
												color: "var(--text-secondary)",
												marginBottom: "8px",
												fontFamily:
													"var(--font-dm-mono)",
											}}
										>
											Your Name
										</label>
										<input
											type="text"
											required
											value={name}
											onChange={(e) =>
												setName(e.target.value)
											}
											className="form-input"
											placeholder="What's your name?"
											disabled={status === "loading"}
										/>
									</div>

									<div>
										<label
											style={{
												display: "block",
												fontSize: "13px",
												fontWeight: 600,
												color: "var(--text-secondary)",
												marginBottom: "8px",
												fontFamily:
													"var(--font-dm-mono)",
											}}
										>
											Email Address
										</label>
										<input
											type="email"
											required
											value={email}
											onChange={(e) =>
												setEmail(e.target.value)
											}
											className="form-input"
											placeholder="What's your email?"
											disabled={status === "loading"}
										/>
									</div>

									<div>
										<label
											style={{
												display: "block",
												fontSize: "13px",
												fontWeight: 600,
												color: "var(--text-secondary)",
												marginBottom: "8px",
												fontFamily:
													"var(--font-dm-mono)",
											}}
										>
											Message
										</label>
										<textarea
											required
											rows={5}
											value={message}
											onChange={(e) =>
												setMessage(e.target.value)
											}
											className="form-input"
											placeholder="Tell me about the opportunity..."
											disabled={status === "loading"}
										/>
									</div>
									{status === "error" && (
										<p
											style={{
												fontSize: "13px",
												color: "#f87171",
												background:
													"rgba(248, 113, 113, 0.08)",
												border: "1px solid rgba(248, 113, 113, 0.2)",
												borderRadius: "8px",
												padding: "10px 14px",
											}}
										>
											Something went wrong. Please try
											again or reach out directly via
											LinkedIn.
										</p>
									)}
									<button
										type="submit"
										className="btn-primary inline-flex"
										style={{
											width: "100%",
											justifyContent: "center",
										}}
									>
										{status === "loading" ? (
											<>
												Sending...
												<svg
													width="16"
													height="16"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth="2"
													style={{
														animation:
															"spin 1s linear infinite",
													}}
												>
													<path d="M21 12a9 9 0 11-6.219-8.56" />
												</svg>
											</>
										) : (
											<>
												Send Message
												<svg
													width="16"
													height="16"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth="2"
												>
													<line
														x1="22"
														y1="2"
														x2="11"
														y2="13"
													/>
													<polygon points="22 2 15 22 11 13 2 9 22 2" />
												</svg>
											</>
										)}
									</button>
								</form>
							)}
						</div>
					</div>

					{/* RIGHT: Contact info */}
					<div className="space-y-8">
						<div className="reveal reveal-delay-1">
							<p
								className="section-label mb-5"
								style={{ fontSize: "10px" }}
							>
								Direct Contact
							</p>
							<div className="space-y-3">
								{socialLinks.map((link) => (
									<a
										key={link.label}
										href={link.href}
										target={
											link.href.startsWith("http")
												? "_blank"
												: undefined
										}
										rel={
											link.href.startsWith("http")
												? "noopener noreferrer"
												: undefined
										}
										style={{
											display: "flex",
											alignItems: "center",
											gap: "14px",
											padding: "16px 20px",
											background: "var(--bg-card)",
											border: "1px solid var(--border)",
											borderRadius: "12px",
											textDecoration: "none",
											transition: "all 0.2s ease",
											color: "var(--text-secondary)",
										}}
										onMouseEnter={(e) => {
											(
												e.currentTarget as HTMLElement
											).style.borderColor =
												"rgba(167, 139, 250, 0.3)";
											(
												e.currentTarget as HTMLElement
											).style.color =
												"var(--text-primary)";
										}}
										onMouseLeave={(e) => {
											(
												e.currentTarget as HTMLElement
											).style.borderColor =
												"var(--border)";
											(
												e.currentTarget as HTMLElement
											).style.color =
												"var(--text-secondary)";
										}}
									>
										<span
											style={{
												color: link.color,
												flexShrink: 0,
											}}
										>
											{link.icon}
										</span>
										<span
											style={{
												fontSize: "15px",
												fontWeight: 500,
											}}
										>
											{link.label}
										</span>
										<span
											style={{
												marginLeft: "auto",
												opacity: 0.4,
											}}
										>
											→
										</span>
									</a>
								))}
							</div>
						</div>

						{/* Currently available */}
						<div
							className="reveal reveal-delay-2"
							style={{
								padding: "24px",
								background: "rgba(74, 222, 128, 0.04)",
								border: "1px solid rgba(74, 222, 128, 0.15)",
								borderRadius: "14px",
							}}
						>
							<div
								style={{
									display: "flex",
									alignItems: "center",
									gap: "10px",
									marginBottom: "10px",
								}}
							>
								<span
									style={{
										width: "8px",
										height: "8px",
										borderRadius: "50%",
										background: "#4ade80",
										boxShadow:
											"0 0 8px rgba(74, 222, 128, 0.6)",
										animation: "pulse 2s infinite",
										display: "inline-block",
									}}
								/>
								<span
									style={{
										fontFamily: "var(--font-syne)",
										fontWeight: 700,
										fontSize: "15px",
										color: "#4ade80",
									}}
								>
									Available for Work
								</span>
							</div>
							<p
								style={{
									fontSize: "14px",
									color: "var(--text-secondary)",
									lineHeight: 1.6,
								}}
							>
								Currently open to{" "}
								<strong
									style={{ color: "var(--text-primary)" }}
								>
									full-time positions
								</strong>{" "}
								and{" "}
								<strong
									style={{ color: "var(--text-primary)" }}
								>
									contract opportunities
								</strong>
								. Response time is usually within 24 hours.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
