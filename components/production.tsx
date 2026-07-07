"use client";

import { usePrefs } from "@/components/prefs";

export function Production() {
  const { t } = usePrefs();

  return (
    <section className="section">
      <div className="section-grid">
        <h2 className="section-label">{t.prodTitle}</h2>
        <div className="prod-card">
          <div className="prod-header">
            <h3 className="prod-name">SIGRAAPP</h3>
            <span className="prod-badge">{t.prodBadge}</span>
          </div>
          <p className="prod-body">{t.prodBody}</p>
          <ul className="prod-list">
            {t.prodBullets.map((bullet) => (
              <li key={bullet}>
                <span className="prod-marker">›</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          <div className="prod-note">{t.prodNote}</div>
        </div>
      </div>
    </section>
  );
}
