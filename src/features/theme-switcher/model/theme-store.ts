import { createEvent, createStore } from "effector";
import { ThemeStorageManager } from "./theme-storage-manager";
import { Theme } from "../lib/enums";

export const themeSwitched = createEvent("themeSwitched");

export const $theme = createStore<Theme>(ThemeStorageManager.getTheme()).on(
    themeSwitched,
    (current) => {
        if (current === Theme.DARK) {
            ThemeStorageManager.setTheme(Theme.LIGHT);

            return Theme.LIGHT;
        }

        ThemeStorageManager.setTheme(Theme.DARK);

        return Theme.DARK;
    },
);
