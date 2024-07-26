import { githubApi } from "../config/api-config/api-config";

export class BaseService {
    public static baseGithubRequest<T = any>(query: string) {
        return githubApi
            .post<T>("", {
                query,
            })
            .then((response) => response.data);
    }
}
