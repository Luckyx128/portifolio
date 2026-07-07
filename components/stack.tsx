"use client";

import type { IconType } from "react-icons";
import {
  SiDart,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiGithub,
  SiNodedotjs,
  SiPuppeteer,
  SiReact,
  SiSwift,
  SiTypescript,
} from "react-icons/si";
import { usePrefs } from "@/components/prefs";

interface MarqueeIcon {
  label: string;
  Icon: IconType;
  color: string;
}

const MARQUEE_ICONS: MarqueeIcon[] = [
  { label: "TypeScript", Icon: SiTypescript, color: "#3178c6" },
  { label: "React", Icon: SiReact, color: "#61dafb" },
  { label: "Node.js", Icon: SiNodedotjs, color: "#5fa04e" },
  { label: "Flutter", Icon: SiFlutter, color: "#54c5f8" },
  { label: "Dart", Icon: SiDart, color: "#0175c2" },
  { label: "Swift", Icon: SiSwift, color: "#f05138" },
  { label: "Firebase / FCM", Icon: SiFirebase, color: "#ffca28" },
  { label: "Puppeteer", Icon: SiPuppeteer, color: "#40b5a4" },
  { label: "Git", Icon: SiGit, color: "#f05032" },
  { label: "GitHub", Icon: SiGithub, color: "#9aa2ad" },
];

function MarqueeRun({ hidden }: { hidden?: boolean }) {
  return (
    <div className="marquee-run" aria-hidden={hidden}>
      {MARQUEE_ICONS.map(({ label, Icon, color }) => (
        <div className="marquee-item" key={label}>
          <Icon size={30} color={color} />
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}

export function Stack() {
  const { t } = usePrefs();

  return (
    <section className="section">
      <div className="marquee">
        <div className="marquee-track">
          <MarqueeRun />
          <MarqueeRun hidden />
        </div>
      </div>
      <div className="section-grid">
        <h2 className="section-label">{t.stackTitle}</h2>
        <div className="stack-groups">
          {t.stackGroups.map((group) => (
            <div className="stack-group" key={group.label}>
              <div className="stack-group-label">{group.label}</div>
              <div className="chips">
                {group.items.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
