import { create } from "zustand";

const useStore = create((set) => ({
  lang: "id",
  setLang: (lang) => {
    set({ lang });
  },
}));

export default useStore;
