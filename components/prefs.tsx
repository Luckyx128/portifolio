"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { dictionaries, type Dictionary, type Lang, type Theme } from "@/lib/i18n";

const THEME_KEY = "portfolio-theme";
const LANG_KEY = "portfolio-lang";

interface Prefs {
  theme: Theme;
  lang: Lang;
  t: Dictionary;
  toggleTheme: () => void;
  toggleLang: () => void;
}

const PrefsContext = createContext<Prefs | null>(null);

export function PrefsProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [lang, setLang] = useState<Lang>("en");

  // Sync with what the inline <head> script / a previous visit persisted.
  useEffect(() => {
    const storedTheme = localStorage.getItem(THEME_KEY);
    if (storedTheme === "dark" || storedTheme === "light") setTheme(storedTheme);
    const storedLang = localStorage.getItem(LANG_KEY);
    if (storedLang === "en" || storedLang === "pt") setLang(storedLang);
  }, []);

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {}
  };

  const toggleLang = () => {
    const next: Lang = lang === "en" ? "pt" : "en";
    setLang(next);
    document.documentElement.lang = next === "pt" ? "pt-BR" : "en";
    try {
      localStorage.setItem(LANG_KEY, next);
    } catch {}
  };

  return (
    <PrefsContext.Provider
      value={{ theme, lang, t: dictionaries[lang], toggleTheme, toggleLang }}
    >
      {children}
    </PrefsContext.Provider>
  );
}

export function usePrefs(): Prefs {
  const ctx = useContext(PrefsContext);
  if (!ctx) throw new Error("usePrefs must be used within PrefsProvider");
  return ctx;
}
