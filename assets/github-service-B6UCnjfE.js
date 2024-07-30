import{r as h,j as n,a as b,f as m,g as f}from"./index-BF3F5MOw.js";const u=10,x="_cell_waa4c_1",$="_label_waa4c_6",v="_value_waa4c_12",i={cell:x,label:$,value:v},R=s=>{const{label:t,value:e,className:r="",type:o="text",linkTo:g,linkTarget:p}=s,l=h.useId(),d=()=>{if(!e)return"-";switch(o){case"text":return e;case"date":return new Date(e).toUTCString();case"link":return n.jsx(m,{to:g||e,target:p||"_blank",children:e});default:return String(e)}};return n.jsxs("div",{className:b(i.cell,r),children:[n.jsx("label",{htmlFor:l,className:i.label,children:t}),n.jsx("div",{id:l,className:i.value,children:d()})]})},c=s=>btoa(s);class y{static baseGithubRequest(t){return f.post("",{query:t}).then(e=>e.data)}}class a{static branch(){return`
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
        `}}class I extends y{static getRepositories(t,e=null,r=u){const o=e?'"'+c("cursor:"+e)+'"':null;return this.baseGithubRequest(`
            query {
                result: search(type: REPOSITORY, query: "${t}", first: ${r}, after: ${o}) {
                    repositories: edges {
                        ${a.repoListItem()}
                    }
                    repositoryCount
                    ${a.pageInfo()}
                }
            }
    `)}static getSingleRepository(t,e){return this.baseGithubRequest(`
            {
                repository(owner: "${t}", name: "${e}") {
                    name
                    stargazerCount
                    owner {
                        avatarUrl
                        login
                        url
                    }
                    ${a.branch()}
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
        `)}static getCurrentUserRepos(t=null,e=u){const r=t?'"'+c("cursor:"+t)+'"':null;return this.baseGithubRequest(`
            {
                result: viewer {
                    repositories(first: ${e}, after: ${r}) {
                        repositories: edges {
                            ${a.repoListItem()}
                        }
                        repositoryCount: totalCount
                        ${a.pageInfo()}
                    }
                }
            }
        `)}}export{R as C,I as G,u as p};
