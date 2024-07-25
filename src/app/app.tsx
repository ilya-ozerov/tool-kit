import { FC } from "react";
import "./styles/index.scss";
import clsx from "clsx";
import { AppRouter } from "./providers/router";
import { useUnit } from "effector-react";
import { $theme, Theme, themeSwitched } from "./model/theme-store";

export const App: FC = () => {
  const [theme, toggleTheme] = useUnit([$theme, themeSwitched]);

  return (
    <div
      className={clsx(
        "app",
        theme === Theme.LIGHT && "light",
        theme === Theme.DARK && "dark"
      )}
    >
      <button onClick={toggleTheme}>toggleTheme</button>
      <main className="content">
        <AppRouter />
      </main>
    </div>
  );
};
