import { FC, memo, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Loader, routeConfig, routePath } from "shared";
import styles from "./app-router.module.scss";

export const AppRouter: FC = memo(() => {
    return (
        <div className="page">
            <Suspense
                fallback={
                    <div className={styles.loader_container}>
                        <Loader />
                    </div>
                }
            >
                <Routes>
                    {Object.values(routeConfig).map((route) => {
                        if (
                            route.path === routePath.test &&
                            import.meta.env.MODE !== "development"
                        ) {
                            return null;
                        }
                        return <Route key={route.path} {...route} />;
                    })}
                    <Route
                        path="*"
                        element={<Navigate to={routePath.main} />}
                    />
                </Routes>
            </Suspense>
        </div>
    );
});
