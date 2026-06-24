"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
	{ href: "#about", label: "About" },
	{ href: "#experience", label: "Experience" },
	{ href: "#projects", label: "Projects" },
	{ href: "#contact", label: "Contact" },
];

export default function Navigation() {
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 40);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
			style={{
				background: scrolled ? "rgba(8, 12, 20, 0.85)" : "transparent",
				backdropFilter: scrolled ? "blur(20px)" : "none",
				borderBottom: scrolled
					? "1px solid rgba(255,255,255,0.06)"
					: "none",
			}}
		>
			<nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
				{/* Logo */}
				<a href="#" className="flex items-center gap-3 group">
					<div
						className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
						style={{
							background:
								"linear-gradient(135deg, #7c3aed, #4f46e5)",
							fontFamily: "var(--font-syne)",
							color: "white",
						}}
					>
						R
					</div>
					<span
						className="text-sm font-semibold tracking-wide hidden sm:block"
						style={{
							fontFamily: "var(--font-syne)",
							color: "var(--text-secondary)",
						}}
					>
						Ruqouyyah
					</span>
				</a>

				{/* Desktop Nav */}
				<ul className="hidden md:flex items-center gap-8">
					{navLinks.map((link) => (
						<li key={link.href}>
							<a href={link.href} className="nav-link">
								{link.label}
							</a>
						</li>
					))}
				</ul>

				{/* CTA + Hamburger */}
				<div className="flex items-center gap-4">
					<a
						href="https://linkedin.com/in/ruqouyyahmuhammad/"
						target="_blank"
						rel="noopener noreferrer"
						className="hidden md:inline-flex btn-primary"
						style={{ padding: "8px 20px", fontSize: "13px" }}
					>
						Connect on LinkedIn
						<svg
							width="14"
							height="14"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
						>
							<path d="M5 12h14M12 5l7 7-7 7" />
						</svg>
					</a>

					{/* Mobile hamburger */}
					<button
						className="md:hidden p-2"
						onClick={() => setMenuOpen(!menuOpen)}
						style={{ color: "var(--text-secondary)" }}
					>
						<svg
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
						>
							{menuOpen ? (
								<path d="M6 18L18 6M6 6l12 12" />
							) : (
								<>
									<path d="M3 12h18M3 6h18M3 18h18" />
								</>
							)}
						</svg>
					</button>
				</div>
			</nav>

			{/* Mobile Menu */}
			{menuOpen && (
				<div
					className="md:hidden border-t"
					style={{
						background: "rgba(8, 12, 20, 0.98)",
						borderColor: "var(--border)",
					}}
				>
					<ul className="px-6 py-4 flex flex-col gap-4">
						{navLinks.map((link) => (
							<li key={link.href}>
								<a
									href={link.href}
									className="block py-2 nav-link"
									onClick={() => setMenuOpen(false)}
								>
									{link.label}
								</a>
							</li>
						))}
						<li>
							<a
								href="https://linkedin.com/in/ruqouyyahmuhammad/"
								target="_blank"
								rel="noopener noreferrer"
								className="btn-primary inline-flex"
								style={{
									fontSize: "13px",
									padding: "10px 20px",
								}}
							>
								Connect on LinkedIn →
							</a>
						</li>
					</ul>
				</div>
			)}
		</header>
	);
}
