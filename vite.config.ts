import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import checker from "vite-plugin-checker";
import svgr from "vite-plugin-svgr";
import packageConfig from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
    base: "/tool-kit/",
    plugins: [
        react(),
        tsconfigPaths(),
        svgr(),
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
