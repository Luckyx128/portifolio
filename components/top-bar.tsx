"use client";

import { usePrefs } from "@/components/prefs";

export function TopBar() {
  const { t, theme, toggleTheme, toggleLang } = usePrefs();

  return (
    <header className="topbar">
      <div className="brand">lucas.dev</div>
      <div className="topbar-actions">
        <button type="button" className="pill-btn" onClick={toggleLang}>
          {t.langBtn}
        </button>
        <button type="button" className="pill-btn" onClick={toggleTheme}>
          {t.themeBtn[theme]}
        </button>
      </div>
    </header>
  );
}
