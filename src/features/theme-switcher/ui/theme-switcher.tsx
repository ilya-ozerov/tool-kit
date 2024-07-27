import { useUnit } from "effector-react";
import { FC } from "react";
import { $theme, themeSwitched } from "../model/theme-store";
import { Theme } from "../lib/enums";

interface IThemeSwitcher {
    className?: string;
}

export const ThemeSwitcher: FC<IThemeSwitcher> = ({ className = "" }) => {
    const [theme, toggleTheme] = useUnit([$theme, themeSwitched]);

    return (
        <button className={className} onClick={toggleTheme}>
            {theme === Theme.LIGHT && "dark"}
            {theme === Theme.DARK && "light"}
        </button>
    );
};
