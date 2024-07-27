import { CardPage } from "pages/card-page";
import { MainPage } from "pages/main-page";
import { RouteProps } from "react-router-dom";

const enum appRoutes {
    MAIN = "main",
    CARD = "card",
}

export const routePath: Record<appRoutes, string> = {
    [appRoutes.MAIN]: "/main",
    [appRoutes.CARD]: "/card",
};

export const routeConfig: Record<appRoutes, RouteProps> = {
    [appRoutes.MAIN]: {
        path: routePath.main,
        element: <MainPage />,
    },
    [appRoutes.CARD]: {
        path: routePath.card,
        element: <CardPage />,
    },
};
