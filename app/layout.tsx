import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SITE_URL } from "@/lib/site";

// Fonts are vendored in app/fonts (OFL, Latin subset) instead of next/font/google,
// so the build never depends on fetching Google Fonts (it broke Turbopack inside Docker).
const spaceGrotesk = localFont({
  src: "./fonts/space-grotesk-latin-wght.woff2",
  weight: "300 700",
  variable: "--font-sans",
  display: "swap",
});

const plexMono = localFont({
  src: [
    { path: "./fonts/ibm-plex-mono-latin-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/ibm-plex-mono-latin-500.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-mono",
  display: "swap",
});

const title = "Lucas de Amorim — Senior Fullstack Developer";
const description =
  "Fullstack developer shipping Flutter apps with Shorebird code push, Node.js backends with push notifications and React front ends.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    title,
    description,
    images: [{ url: "/foto.jpeg", alt: "Lucas de Amorim" }],
  },
  twitter: { card: "summary", title, description, images: ["/foto.jpeg"] },
};

// Applies the persisted theme before first paint to avoid a flash of the wrong theme.
const themeInitScript = `try{var t=localStorage.getItem("portfolio-theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${plexMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
