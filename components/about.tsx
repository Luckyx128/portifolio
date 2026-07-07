"use client";

import { usePrefs } from "@/components/prefs";

export function About() {
  const { t } = usePrefs();

  return (
    <section className="section">
      <div className="section-grid">
        <h2 className="section-label">{t.aboutTitle}</h2>
        <p className="about-body">{t.aboutBody}</p>
      </div>
    </section>
  );
}
