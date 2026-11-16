"use client";

import {
  createContext,
  useContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { dictionaries, type Dictionary, type Lang, type Theme } from "@/lib/i18n";

const THEME_KEY = "portfolio-theme";
const LANG_KEY = "portfolio-lang";

// Tiny external store over localStorage. The in-memory map keeps the toggles
// working when storage is unavailable (private mode, blocked site data).
const memory = new Map<string, string>();
const listeners = new Set<() => void>();

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  window.addEventListener("storage", onChange);
  return () => {
    listeners.delete(onChange);
    window.removeEventListener("storage", onChange);
  };
}

function read(key: string): string | null {
  try {
    const value = localStorage.getItem(key);
    if (value !== null) return value;
  } catch {}
  return memory.get(key) ?? null;
}

function write(key: string, value: string) {
  memory.set(key, value);
  try {
    localStorage.setItem(key, value);
  } catch {}
  listeners.forEach((listener) => listener());
}

function useStored(key: string): string | null {
  return useSyncExternalStore(
    subscribe,
    () => read(key),
    () => null,
  );
}

interface Prefs {
  theme: Theme;
  lang: Lang;
  t: Dictionary;
  toggleTheme: () => void;
  toggleLang: () => void;
}

const PrefsContext = createContext<Prefs | null>(null);

export function PrefsProvider({ children }: { children: ReactNode }) {
  const storedTheme = useStored(THEME_KEY);
  const storedLang = useStored(LANG_KEY);
  const theme: Theme = storedTheme === "light" ? "light" : "dark";
  const lang: Lang = storedLang === "pt" ? "pt" : "en";

  // Skip while the value is null: that is the server snapshot during hydration,
  // and the inline <head> script has already applied the persisted theme.
  useEffect(() => {
    if (storedTheme) document.documentElement.dataset.theme = theme;
  }, [storedTheme, theme]);

  useEffect(() => {
    if (storedLang) document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [storedLang, lang]);

  const toggleTheme = () => write(THEME_KEY, theme === "dark" ? "light" : "dark");
  const toggleLang = () => write(LANG_KEY, lang === "en" ? "pt" : "en");

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
