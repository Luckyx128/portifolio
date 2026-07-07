"use client";

import { usePrefs } from "@/components/prefs";

export function BuildingNow() {
  const { t } = usePrefs();

  return (
    <section className="section">
      <div className="section-grid">
        <div className="road-head">
          <h2 className="section-label">{t.roadTitle}</h2>
          <div className="road-sub">{t.roadSub}</div>
        </div>
        <div className="project-list">
          {t.projects.map((project) => (
            <div className="project-card" key={project.name}>
              <div className="project-head">
                <h3 className="project-name">{project.name}</h3>
                <span className="project-status">{project.status}</span>
              </div>
              <p className="project-desc">{project.desc}</p>
              <div className="project-stack">{project.stack}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
