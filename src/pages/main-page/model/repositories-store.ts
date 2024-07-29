import { createEffect, createStore } from "effector";
import {
    GithubService,
    RepositoriesPageInfoType,
    RepositoryListItemType,
} from "shared";

export const getCurrentUserReposFx = createEffect(
    async ({ skip }: { skip: number }) => {
        return GithubService.getCurrentUserRepos(skip);
    },
);

export const getRepositoriesFx = createEffect(
    async ({ query, skip }: { query: string; skip: number }) => {
        return GithubService.getRepositories(query, skip);
    },
);

export const $repositories = createStore<RepositoryListItemType[]>([]).on(
    getRepositoriesFx.doneData,
    (_, payload) => payload.data.result.repositories,
);

$repositories.on(
    getCurrentUserReposFx.doneData,
    (_, payload) => payload.data.result.repositories.repositories,
);

export const $isPendingRepositories = getRepositoriesFx.pending;

export const $isPendingCurrentUserRepos = getCurrentUserReposFx.pending;

export const $repositoriesPageInfo = createStore<RepositoriesPageInfoType>({
    endCursor: "",
    hasNextPage: false,
    hasPreviousPage: false,
    startCursor: "",
}).on(getRepositoriesFx.doneData, (_, payload) => payload.data.result.pageInfo);

export const $repositoriesTotalCount = createStore<number>(0).on(
    getRepositoriesFx.doneData,
    (_, payload) => payload.data.result.repositoryCount,
);

$repositoriesTotalCount.on(
    getCurrentUserReposFx.doneData,
    (_, payload) => payload.data.result.repositories.repositoryCount,
);
