import { stringToBase64 } from "../../lib/helpers";
import { BaseService } from "../base-service";
import {
    GetRepositoriesPayloadType,
    GetSingleRepositoryPayload,
} from "./types";

export class GithubService extends BaseService {
    public static getRepositories(
        query: string,
        skip: number | null = null,
        take: number = 10,
    ) {
        const after = skip
            ? '"' + stringToBase64("cursor:" + skip) + '"'
            : null;

        return this.baseGithubRequest<GetRepositoriesPayloadType>(`
            query {
                search(type: REPOSITORY, query: "${query}", first: ${take}, after: ${after}) {
                  repositories: edges {
                    repository: node {
                      ... on Repository {
                        id
                        name
                        owner {
                            login
                        }
                        stargazerCount
                        url
                        defaultBranchRef {
                          target {
                            ... on Commit {
                              history(first: 1) {
                                nodes {
                                  committedDate
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  pageInfo {
                    startCursor
                    endCursor
                    hasNextPage
                    hasPreviousPage
                  }
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
                    defaultBranchRef {
                        target {
                            ... on Commit {
                                history(first: 1) {
                                    nodes {
                                        committedDate
                                    }
                                }
                            }
                        }
                    }
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
}
