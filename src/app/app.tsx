import { FC } from "react";
import "./styles/index.scss";
import clsx from "clsx";
import { AppRouter } from "./providers/router";
import { useUnit } from "effector-react";
import { $theme, Theme, ThemeSwitcher } from "features/theme-switcher";

export const App: FC = () => {
    const theme = useUnit($theme);

    return (
        <div
            className={clsx(
                "app",
                theme === Theme.LIGHT && "light",
                theme === Theme.DARK && "dark",
            )}
        >
            <ThemeSwitcher className="theme_switcher" />
            <main className="content">
                <AppRouter />
            </main>
        </div>
    );
};
