import axios from "axios";

export const githubApi = axios.create({
    baseURL: "https://api.github.com/graphql",
});

githubApi.interceptors.request.use((config) => {
    const githubToken = localStorage.getItem("token");

    config.headers.Authorization = `Bearer ${githubToken}`;

    return config;
});

githubApi.interceptors.response.use(
    (config) => {
        return config;
    },
    (error) => {
        if (error.response.status === 401) {
            try {
                const githubToken = prompt("Enter your GH token:");
                if (githubToken) {
                    localStorage.setItem("token", githubToken);
                    window.location.reload();
                }
            } catch (error) {
                reportError("user not auth");
            }
        }
    },
);
