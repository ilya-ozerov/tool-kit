import { useUnit } from "effector-react";
import { FC } from "react";
import { $theme, themeSwitched } from "../model/theme-store";
import { Theme } from "../lib/enums";
import { IconButton } from "shared";

interface IThemeSwitcher {
    className?: string;
}

export const ThemeSwitcher: FC<IThemeSwitcher> = ({ className = "" }) => {
    const [theme, toggleTheme] = useUnit([$theme, themeSwitched]);

    return (
        <IconButton
            className={className}
            onClick={toggleTheme}
            icon={theme === Theme.LIGHT ? "light_mode" : "dark_mode"}
        />
    );
};
