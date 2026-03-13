import { create } from "zustand";

export const useStore = create((set) => ({
  menuOpen: false,
  setMenuOpen: (value) => set({ menuOpen: value }),
  loading: true,
  setLoading: (value) => set({ loading: value }),
  darkMode: true,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
}));
