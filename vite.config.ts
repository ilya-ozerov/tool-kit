import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import checker from "vite-plugin-checker";
import packageConfig from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tsconfigPaths(),
        checker({
            // e.g. use TypeScript check
            typescript: true,
            eslint: {
                lintCommand: packageConfig.scripts.lint,
                dev: {
                    logLevel: ["error", "warning"],
                },
            },
        }),
    ],
});
