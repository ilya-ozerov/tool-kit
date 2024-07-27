import { createEffect, createEvent, createStore } from "effector";
import {
    GithubService,
    RepositoriesPageInfoType,
    RepositoryListItemType,
} from "shared";

export const getRepositoriesFx = createEffect(
    async ({ query, skip }: { query: string; skip: number }) => {
        return GithubService.getRepositories(query, skip);
    },
);

export const $repositories = createStore<RepositoryListItemType[]>([]).on(
    getRepositoriesFx.doneData,
    (_, payload) => payload.data.search.repositories,
);

export const $repositoriesPageInfo = createStore<RepositoriesPageInfoType>({
    endCursor: "",
    hasNextPage: false,
    hasPreviousPage: false,
    startCursor: "",
}).on(getRepositoriesFx.doneData, (_, payload) => payload.data.search.pageInfo);

export const $repositoriesTotalCount = createStore<number>(0).on(
    getRepositoriesFx.doneData,
    (_, payload) => payload.data.search.repositoryCount,
);

export const $isPendingRepositories = getRepositoriesFx.pending;

export const searchQueryChanged = createEvent<string>("queryChanged");

export const $searchQuery = createStore("").on(
    searchQueryChanged,
    (_, payload) => {
        return payload;
    },
);

export const pageNumberChanged = createEvent<number>("pageChanged");

export const $pageNumber = createStore(1).on(
    pageNumberChanged,
    (_, payload) => {
        return payload;
    },
);
