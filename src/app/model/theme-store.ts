import { createEvent, createStore } from "effector";

export const LOCAL_STORAGE_THEME_KEY = "theme";

export const enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

export const themeSwitched = createEvent();

export const $theme = createStore(
  localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || Theme.LIGHT
).on(themeSwitched, (current) => {
  if (current === Theme.DARK) {
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, Theme.LIGHT);
    return Theme.LIGHT;
  }

  localStorage.setItem(LOCAL_STORAGE_THEME_KEY, Theme.DARK);
  return Theme.DARK;
});
