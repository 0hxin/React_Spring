import {create} from "zustand";

const useThemeStore = create((set) => ({
    theme : 'greenBtn',
    setTheme : (newTheme) => set(() => ({theme:newTheme}))
}));

export default useThemeStore;