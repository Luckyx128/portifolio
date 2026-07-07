"use client";

import { usePrefs } from "@/components/prefs";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { LINKS } from "@/lib/i18n";

export function Contact() {
  const { t } = usePrefs();

  return (
    <section className="contact">
      <h2 className="contact-title">{t.contactTitle}</h2>
      <p className="contact-body">{t.contactBody}</p>
      <div className="contact-cta">
        <a
          href={LINKS.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-solid btn-lg"
        >
          <LinkedInIcon />
          LinkedIn
        </a>
        <a
          href={LINKS.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline btn-lg"
        >
          <GitHubIcon />
          <span className="type-anim">{LINKS.githubLabel}</span>
        </a>
      </div>
      <footer className="footer">© 2026 Lucas de Amorim — {t.footer}</footer>
    </section>
  );
}
