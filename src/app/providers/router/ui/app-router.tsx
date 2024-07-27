import { FC, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { routeConfig, routePath } from "shared";

export const AppRouter: FC = () => {
    return (
        <div className="page">
            <Suspense fallback="Loading...">
                <Routes>
                    {Object.values(routeConfig).map((route) => (
                        <Route key={route.path} {...route} />
                    ))}
                    <Route
                        path="*"
                        element={<Navigate to={routePath.main} />}
                    />
                </Routes>
            </Suspense>
        </div>
    );
};
