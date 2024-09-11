import { create } from "zustand";

const useStore = create((set) => ({
  lang: localStorage.getItem("lang") || "en",
  setLang: (lang) => {
    localStorage.setItem("lang", lang);
    set({ lang });
  },
}));

export default useStore;
