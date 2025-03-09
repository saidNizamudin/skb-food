"use client";

import { createContext, useContext, useState, useCallback } from "react";
import { LANG } from "@/app/lang";

// Helper function to get translations safely
const get = (json: Record<string, any>, key: string) =>
  json?.[key] ?? undefined;

interface TranslationContextType {
  lang: string;
  setLang: (lang: string) => void;
  getTranslation: (key: string) => string;
}

// Create context with default values
const TranslationContext = createContext<TranslationContextType | undefined>(
  undefined
);

// Translation Provider component
export function TranslationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lang, setLang] = useState("id");

  const getTranslation = useCallback(
    (key: string) => {
      try {
        return key
          ? get(get(LANG, key), lang) ?? get(get(LANG, key), "en") ?? key
          : "<value.error>";
      } catch {
        return key;
      }
    },
    [lang]
  );

  return (
    <TranslationContext.Provider value={{ lang, setLang, getTranslation }}>
      {children}
    </TranslationContext.Provider>
  );
}

// Hook to use translation
export function useTranslate() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslate must be used within a TranslationProvider");
  }
  return context;
}
