import { CardPage } from "pages/card-page";
import { MainPage } from "pages/main-page";
import { RouteProps } from "react-router-dom";

const enum AppRoutes {
    MAIN = "main",
    CARD = "card",
}

export const routePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/main",
    [AppRoutes.CARD]: "/card",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: routePath.main,
        element: <MainPage />,
    },
    [AppRoutes.CARD]: {
        path: `${routePath.card}/:owner/:name`,
        element: <CardPage />,
    },
};
