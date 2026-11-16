"use client";

import type { IconType } from "react-icons";
import {
  SiDart,
  SiDocker,
  SiFastify,
  SiFirebase,
  SiFlutter,
  SiKotlin,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
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
  { label: "Flutter", Icon: SiFlutter, color: "#54c5f8" },
  { label: "Dart", Icon: SiDart, color: "#0175c2" },
  { label: "Firebase / FCM", Icon: SiFirebase, color: "#ffca28" },
  { label: "React", Icon: SiReact, color: "#61dafb" },
  { label: "Next.js", Icon: SiNextdotjs, color: "#9aa2ad" },
  { label: "TypeScript", Icon: SiTypescript, color: "#3178c6" },
  { label: "Node.js", Icon: SiNodedotjs, color: "#5fa04e" },
  { label: "Fastify", Icon: SiFastify, color: "#9aa2ad" },
  { label: "Prisma", Icon: SiPrisma, color: "#5a67d8" },
  { label: "PostgreSQL", Icon: SiPostgresql, color: "#4169e1" },
  { label: "Swift", Icon: SiSwift, color: "#f05138" },
  { label: "Kotlin", Icon: SiKotlin, color: "#7f52ff" },
  { label: "Python", Icon: SiPython, color: "#3776ab" },
  { label: "Docker", Icon: SiDocker, color: "#2496ed" },
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
