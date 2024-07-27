import { githubApi } from "../config/api-config/api-config";

export class BaseService {
    public static baseGithubRequest<T = object>(query: string) {
        return githubApi
            .post<T>("", {
                query,
            })
            .then((response) => response.data);
    }
}
