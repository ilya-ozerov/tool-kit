export class GithubFragments {
    static branch() {
        return `
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
        `;
    }

    static repoListItem() {
        return `
            repository: node {
                ... on Repository {
                    id
                    name
                    owner {
                        login
                    }
                    stargazerCount
                    url
                    ${this.branch()}
                }
            }
        `;
    }

    static pageInfo() {
        return `
            pageInfo {
                startCursor
                endCursor
                hasNextPage
                hasPreviousPage
            }
        `;
    }
}
