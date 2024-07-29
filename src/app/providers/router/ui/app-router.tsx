import { FC, memo, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Loader, routeConfig, routePath } from "shared";

export const AppRouter: FC = memo(() => {
    return (
        <div className="page">
            <Suspense fallback={<Loader />}>
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
});
