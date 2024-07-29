import { pageSize } from "../../lib/constants";
import { stringToBase64 } from "../../lib/helpers";
import { BaseService } from "../base-service";
import { GithubFragments } from "./github-fragments";
import {
    GetCurrentUserReposPayloadType,
    GetRepositoriesPayloadType,
    GetSingleRepositoryPayload,
} from "./types";

export class GithubService extends BaseService {
    public static getRepositories(
        query: string,
        skip: number | null = null,
        take: number = pageSize,
    ) {
        const after = skip
            ? '"' + stringToBase64("cursor:" + skip) + '"'
            : null;

        return this.baseGithubRequest<GetRepositoriesPayloadType>(`
            query {
                result: search(type: REPOSITORY, query: "${query}", first: ${take}, after: ${after}) {
                    repositories: edges {
                        ${GithubFragments.repoListItem()}
                    }
                    repositoryCount
                    ${GithubFragments.pageInfo()}
                }
            }
    `);
    }

    public static getSingleRepository(
        ownerLogin: string,
        repositoryName: string,
    ) {
        return this.baseGithubRequest<GetSingleRepositoryPayload>(`
            {
                repository(owner: "${ownerLogin}", name: "${repositoryName}") {
                    name
                    stargazerCount
                    owner {
                        avatarUrl
                        login
                        url
                    }
                    ${GithubFragments.branch()}
                    languages(first: 100) {
                        edges {
                            node {
                                id
                                name
                            }
                        }
                    }
                    description
                }
            }
        `);
    }

    public static getCurrentUserRepos(
        skip: number | null = null,
        take: number = pageSize,
    ) {
        const after = skip
            ? '"' + stringToBase64("cursor:" + skip) + '"'
            : null;

        return this.baseGithubRequest<GetCurrentUserReposPayloadType>(`
            {
                result: viewer {
                    repositories(first: ${take}, after: ${after}) {
                        repositories: edges {
                            ${GithubFragments.repoListItem()}
                        }
                        repositoryCount: totalCount
                        ${GithubFragments.pageInfo()}
                    }
                }
            }
        `);
    }
}
