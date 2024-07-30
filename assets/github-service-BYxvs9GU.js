import{g as u}from"./index-P6UkT1Jm.js";const a=10,i=s=>btoa(s);class c{static baseGithubRequest(e){return u.post("",{query:e}).then(t=>t.data)}}class r{static branch(){return`
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
        `}static repoListItem(){return`
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
        `}static pageInfo(){return`
            pageInfo {
                startCursor
                endCursor
                hasNextPage
                hasPreviousPage
            }
        `}}class p extends c{static getRepositories(e,t=null,o=a){const n=t?'"'+i("cursor:"+t)+'"':null;return this.baseGithubRequest(`
            query {
                result: search(type: REPOSITORY, query: "${e}", first: ${o}, after: ${n}) {
                    repositories: edges {
                        ${r.repoListItem()}
                    }
                    repositoryCount
                    ${r.pageInfo()}
                }
            }
    `)}static getSingleRepository(e,t){return this.baseGithubRequest(`
            {
                repository(owner: "${e}", name: "${t}") {
                    name
                    stargazerCount
                    owner {
                        avatarUrl
                        login
                        url
                    }
                    ${r.branch()}
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
        `)}static getCurrentUserRepos(e=null,t=a){const o=e?'"'+i("cursor:"+e)+'"':null;return this.baseGithubRequest(`
            {
                result: viewer {
                    repositories(first: ${t}, after: ${o}) {
                        repositories: edges {
                            ${r.repoListItem()}
                        }
                        repositoryCount: totalCount
                        ${r.pageInfo()}
                    }
                }
            }
        `)}}export{p as G,a as p};
