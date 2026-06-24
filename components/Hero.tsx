"use client";

import { useEffect, useState } from "react";

const stats = [
	{ value: "500+", label: "Concurrent Sessions", accent: "cyan" },
	{ value: "45%", label: "Cold Start Reduction", accent: "gold" },
	{ value: "2k+", label: "Active Users", accent: "violet" },
	{ value: "3+", label: "Years Experience", accent: "gold" },
];

export default function Hero() {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setVisible(true), 100);
		return () => clearTimeout(timer);
	}, []);

	return (
		<section
			className="hero-section mesh-bg grid-bg"
			style={{
				paddingTop: "80px",
				position: "relative",
				overflow: "hidden",
			}}
		>
			{/* Ambient orbs */}
			<div
				style={{
					position: "absolute",
					top: "20%",
					left: "10%",
					width: "400px",
					height: "400px",
					background:
						"radial-gradient(circle, rgba(124, 58, 237, 0.12) 0%, transparent 70%)",
					filter: "blur(40px)",
					pointerEvents: "none",
				}}
			/>
			<div
				style={{
					position: "absolute",
					bottom: "20%",
					right: "20%",
					width: "300px",
					height: "300px",
					background:
						"radial-gradient(circle, rgba(34, 211, 238, 0.08) 0%, transparent 70%)",
					filter: "blur(40px)",
					pointerEvents: "none",
				}}
			/>

			<div
				className="max-w-6xl mx-auto px-6 w-full"
				style={{
					paddingTop: "clamp(40px, 8vw, 80px)",
					paddingBottom: "clamp(40px, 8vw, 80px)",
				}}
			>
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* LEFT: Content */}
					<div
						style={{
							opacity: visible ? 1 : 0,
							transform: visible
								? "translateY(0)"
								: "translateY(30px)",
							transition:
								"all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
						}}
					>
						{/* Eyebrow label */}
						<div
							className="section-label mb-6 flex items-center gap-3"
							style={{ animationDelay: "0.1s" }}
						>
							<span
								style={{
									display: "inline-block",
									width: "32px",
									height: "1px",
									background: "var(--accent-violet)",
								}}
							/>
							Available for opportunities
							<span
								style={{
									display: "inline-block",
									width: "8px",
									height: "8px",
									borderRadius: "50%",
									background: "#4ade80",
									boxShadow:
										"0 0 8px rgba(74, 222, 128, 0.6)",
									animation: "pulse 2s infinite",
								}}
							/>
						</div>

						{/* Main heading */}
						<h1
							style={{
								fontFamily: "var(--font-syne)",
								fontSize: "clamp(26px, 7vw, 80px)",
								fontWeight: 800,
								lineHeight: 1.0,
								letterSpacing: "-0.03em",
								marginBottom: "24px",
							}}
						>
							<span style={{ color: "var(--text-primary)" }}>
								Hi, I'm
							</span>
							<br />
							<span className="gradient-text">Ruqouyyah</span>
							<br />
							<span
								className="text-outline"
								style={{
									fontFamily: "var(--font-syne)",
									WebkitTextStroke:
										"2px rgba(167, 139, 250, 0.4)",
									color: "transparent",
								}}
							>
								Muhammad.
							</span>
						</h1>

						{/* Role tag */}
						<div className="flex flex-wrap gap-2 mb-6">
							{[
								"Frontend Developer",
								"Mobile Developer",
								"React / Next.js",
							].map((tag) => (
								<span
									key={tag}
									className="skill-tag"
									style={{ fontSize: "12px" }}
								>
									{tag}
								</span>
							))}
						</div>

						{/* Description */}
						<p
							style={{
								fontSize: "17px",
								lineHeight: 1.7,
								color: "var(--text-secondary)",
								maxWidth: "480px",
								marginBottom: "40px",
							}}
						>
							I craft{" "}
							<span className="highlight-violet">
								scalable web & mobile
							</span>{" "}
							experiences, turning complex product requirements
							into{" "}
							<span className="highlight-cyan">
								performant, accessible
							</span>{" "}
							interfaces that users love and businesses depend on.
						</p>

						{/* CTA Buttons */}
						<div className="flex flex-wrap gap-4 mb-12">
							<a
								href="#projects"
								className="inline-flex btn-primary"
							>
								View My Work
								<svg
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
								>
									<path d="M5 12h14M12 5l7 7-7 7" />
								</svg>
							</a>
							<a
								href="#contact"
								className="inline-flex btn-secondary"
							>
								Get in Touch
							</a>
						</div>

						{/* Quick stats row */}
						<div
							className="hero-stats-row flex flex-wrap gap-6 pt-8"
							style={{ borderTop: "1px solid var(--border)" }}
						>
							{stats.map((stat) => (
								<div key={stat.label}>
									<div
										style={{
											fontFamily: "var(--font-syne)",
											fontSize: "26px",
											fontWeight: 800,
											color:
												stat.accent === "cyan"
													? "var(--accent-cyan)"
													: stat.accent === "gold"
														? "var(--accent-gold)"
														: "var(--accent-violet)",
											lineHeight: 1,
											marginBottom: "4px",
										}}
									>
										{stat.value}
									</div>
									<div
										style={{
											fontSize: "12px",
											color: "var(--text-muted)",
										}}
									>
										{stat.label}
									</div>
								</div>
							))}
						</div>
					</div>

					{/* RIGHT: Floating Metric Cards */}
					<div
						className="relative hidden lg:block"
						style={{
							height: "600px",
							opacity: visible ? 1 : 0,
							transition: "opacity 0.8s ease 0.3s",
							overflow: "hidden",
						}}
					>
						{/* Central visual */}
						<div
							style={{
								position: "absolute",
								top: "50%",
								left: "50%",
								transform: "translate(-50%, -50%)",
								width: "220px",
								height: "220px",
								borderRadius: "50%",
								background:
									"radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, transparent 70%)",
								border: "1px solid rgba(167, 139, 250, 0.15)",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<div
								style={{
									width: "140px",
									height: "140px",
									borderRadius: "50%",
									background:
										"radial-gradient(circle, rgba(124, 58, 237, 0.25) 0%, transparent 70%)",
									border: "1px solid rgba(167, 139, 250, 0.25)",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<div
									style={{
										width: "70px",
										height: "70px",
										borderRadius: "50%",
										background:
											"linear-gradient(135deg, #7c3aed, #4f46e5)",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										fontSize: "28px",
										fontFamily: "var(--font-syne)",
										fontWeight: 800,
										color: "white",
										boxShadow:
											"0 0 40px rgba(124, 58, 237, 0.4)",
									}}
								>
									R
								</div>
							</div>
						</div>

						{/* All metric cards — positioned only within the right column */}
						{[
							{
								icon: "⚡",
								label: "TTI Improved",
								value: "20%",
								color: "var(--accent-gold)",
								bg: "rgba(245,158,11,0.08)",
								border: "rgba(245,158,11,0.2)",
								top: "4%",
								right: "4%",
								delay: "0s",
							},
							{
								icon: "📦",
								label: "Bundle Size",
								value: "↓25%",
								color: "var(--accent-cyan)",
								bg: "rgba(34,211,238,0.08)",
								border: "rgba(34,211,238,0.2)",
								top: "22%",
								right: "2%",
								delay: "-2s",
							},
							{
								icon: "🚀",
								label: "Page Load",
								value: "↓53%",
								color: "var(--accent-violet)",
								bg: "rgba(167,139,250,0.08)",
								border: "rgba(167,139,250,0.2)",
								top: "42%",
								right: "4%",
								delay: "-4s",
							},
							{
								icon: "📈",
								label: "Booking Rate",
								value: "+60%",
								color: "#4ade80",
								bg: "rgba(74,222,128,0.08)",
								border: "rgba(74,222,128,0.2)",
								top: "62%",
								right: "2%",
								delay: "-1s",
							},
							{
								icon: "👥",
								label: "Users Served",
								value: "2k+",
								color: "#4ade80",
								bg: "rgba(74,222,128,0.08)",
								border: "rgba(74,222,128,0.2)",
								top: "50%",
								right: "60%",
								delay: "-3s",
							},
							{
								icon: "📱",
								label: "Mobile Expert",
								value: "iOS+Android",
								color: "var(--accent-cyan)",
								bg: "rgba(34,211,238,0.08)",
								border: "rgba(34,211,238,0.2)",
								top: "78%",
								right: "30%",
								delay: "-5s",
							},
						].map((card, i) => (
							<div
								key={i}
								className="float-badge"
								style={{
									position: "absolute",
									top: card.top,
									right: card.right,
									animationDelay: card.delay,
									background: card.bg,
									border: `1px solid ${card.border}`,
									borderRadius: "12px",
									padding: "10px 16px",
									display: "flex",
									alignItems: "center",
									gap: "10px",
									backdropFilter: "blur(10px)",
								}}
							>
								<span style={{ fontSize: "18px" }}>
									{card.icon}
								</span>
								<div>
									<div
										style={{
											fontFamily: "var(--font-syne)",
											fontSize:
												card.value.length > 4
													? "13px"
													: "17px",
											fontWeight: 800,
											color: card.color,
											lineHeight: 1,
										}}
									>
										{card.value}
									</div>
									<div
										style={{
											fontSize: "11px",
											color: "var(--text-muted)",
											marginTop: "2px",
										}}
									>
										{card.label}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Scroll indicator */}
			<div
				style={{
					position: "absolute",
					bottom: "40px",
					left: "50%",
					transform: "translateX(-50%)",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: "8px",
					opacity: 0.4,
				}}
			>
				<span
					style={{
						fontSize: "11px",
						letterSpacing: "0.1em",
						textTransform: "uppercase",
						color: "var(--text-muted)",
						fontFamily: "var(--font-dm-mono)",
					}}
				>
					scroll
				</span>
				<div
					style={{
						width: "1px",
						height: "40px",
						background:
							"linear-gradient(180deg, var(--accent-violet), transparent)",
						animation: "float 2s ease-in-out infinite",
					}}
				/>
			</div>
		</section>
	);
}
