import axios from "axios";

export const githubApi = axios.create({
  baseURL: "https://api.github.com/graphql",
  headers: {
    Authorization: "Bearer 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",
  },
});
