import {create} from "zustand";

export const useStore = create((set) => ({
    english: true,
    setEnglish: () => set({ english: true }),
    setSpanish: () => set({ english: false }),
    darkMode: false,
    setDarkMode: () => set({ darkMode: true }),
    setLightMode: () => set({ darkMode: false }),
  }));