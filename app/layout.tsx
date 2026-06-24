import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ruqouyyah Muhammad — Frontend Developer",
  description:
    "Product-focused Software Developer with 3+ years building scalable web & mobile experiences using React, Next.js, TypeScript, and React Native.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "React Native",
    "Mobile Developer",
  ],
  authors: [{ name: "Ruqouyyah Muhammad" }],
  openGraph: {
    title: "Ruqouyyah Muhammad — Frontend Developer",
    description:
      "Building scalable web & mobile experiences. React, Next.js, TypeScript, React Native.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&family=DM+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
