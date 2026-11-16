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
            <h3 className="prod-name">SIGRA</h3>
            <span className="prod-badge">{t.prodBadge}</span>
          </div>
          <p className="prod-body">{t.prodBody}</p>
          <div className="prod-tracks">
            {t.prodTracks.map((track) => (
              <div className="prod-track" key={track.label}>
                <div className="stack-group-label">{track.label}</div>
                <ul className="prod-list">
                  {track.items.map((item) => (
                    <li key={item}>
                      <span className="prod-marker">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="prod-note">{t.prodNote}</div>
        </div>
      </div>
    </section>
  );
}
