import { createEffect, createStore } from "effector";
import { GithubService, RepositoryType } from "shared";

export const getSingleRepositoryFx = createEffect(
    async ({
        ownerLogin,
        repositoryName,
    }: {
        ownerLogin: string;
        repositoryName: string;
    }) => {
        return GithubService.getSingleRepository(ownerLogin, repositoryName);
    },
);

export const $repository = createStore<RepositoryType | null>(null).on(
    getSingleRepositoryFx.doneData,
    (_, payload) => payload.data.repository,
);

export const $isPendingSingleRepository = getSingleRepositoryFx.pending;
