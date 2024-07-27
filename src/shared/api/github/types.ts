export type RepositoriesPageInfoType = {
    endCursor: string;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor: string;
};

export type GetRepositoriesPayloadType = {
    data: {
        search: {
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
    id: string;
    name: string;
};

type RepositoryType = {
    description: string;
    name: string;
    owner: OwnerType;
    stargazerCount: number;
    defaultBranchRef?: BranchType;
    languages: LanguageType[];
};

export type GetSingleRepositoryPayload = {
    data: {
        repository: RepositoryType;
    };
};
