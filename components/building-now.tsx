"use client";

import { usePrefs } from "@/components/prefs";
import { GitHubIcon } from "@/components/icons";

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
              <div className="project-foot">
                <div className="project-stack">{project.stack}</div>
                {project.links && (
                  <div className="project-links">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <GitHubIcon size={14} />
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
