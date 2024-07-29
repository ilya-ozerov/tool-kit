export type RepositoriesPageInfoType = {
    endCursor: string;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor: string;
};

export type GetRepositoriesPayloadType = {
    data: {
        result: {
            repositories: RepositoryListItemType[];
            repositoryCount: number;
            pageInfo: RepositoriesPageInfoType;
        };
    };
};

type CommitType = {
    committedDate: string;
};

type OwnerType = {
    avatarUrl: string;
    login: string;
    url: string;
};

type BranchType = {
    target: {
        history: {
            nodes: CommitType[];
        };
    };
};

export type RepositoryListItemType = {
    repository: {
        id: string;
        name: string;
        owner: Omit<OwnerType, "avatarUrl" | "url">;
        stargazerCount: number;
        url: string;
        defaultBranchRef?: BranchType;
    };
};

type LanguageType = {
    node: {
        id: string;
        name: string;
    };
};

export type RepositoryType = {
    description: string;
    name: string;
    owner: OwnerType;
    stargazerCount: number;
    defaultBranchRef?: BranchType;
    languages: {
        edges: LanguageType[];
    };
};

export type GetSingleRepositoryPayload = {
    data: {
        repository: RepositoryType;
    };
};

export type GetCurrentUserReposPayloadType = {
    data: {
        result: {
            repositories: {
                repositories: RepositoryListItemType[];
                repositoryCount: number;
                pageInfo: RepositoriesPageInfoType;
            };
        };
    };
};
