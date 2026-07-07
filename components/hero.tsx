"use client";

import Image from "next/image";
import { usePrefs } from "@/components/prefs";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { LINKS } from "@/lib/i18n";

export function Hero() {
  const { t } = usePrefs();

  return (
    <section className="hero">
      <div className="hero-left">
        <div className="kicker">{t.heroKicker}</div>
        <h1 className="hero-title">Lucas de Amorim</h1>
        <p className="hero-sub">{t.heroSub}</p>
        <div className="hero-techline">
          <span>TypeScript</span>
          <span className="dot">·</span>
          <span>React</span>
          <span className="dot">·</span>
          <span>Node.js</span>
          <span className="dot">·</span>
          <span>Flutter</span>
        </div>
        <div className="hero-cta">
          <a
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-solid"
          >
            <GitHubIcon />
            GitHub
          </a>
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <LinkedInIcon />
            LinkedIn
          </a>
        </div>
      </div>
      <div className="avatar">
        <Image
          src="/foto.jpeg"
          alt="Lucas de Amorim"
          width={208}
          height={208}
          priority
        />
      </div>
    </section>
  );
}
