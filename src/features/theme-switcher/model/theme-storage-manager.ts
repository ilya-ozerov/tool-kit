import { Theme } from "../lib/enums";

export const LOCAL_STORAGE_THEME_KEY = "theme";

export class ThemeStorageManager {
    static getTheme() {
        return (
            (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) ||
            Theme.LIGHT
        );
    }

    static setTheme(theme: Theme) {
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
    }
}
