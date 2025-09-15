// useThemeStore.jsx
import { create } from "zustand";

export const useThemeStore = create((set) => ({
    // Initialize theme from localStorage on store creation
    theme: localStorage.getItem("preferred-theme") || "forest",

    // Use a functional update to ensure the state is always updated correctly
    setTheme: (theme) => {
        // Save the new theme to localStorage
        localStorage.setItem("preferred-theme", theme);

        // Update the store's state
        set((state) => ({ theme: theme }));
    },
}));