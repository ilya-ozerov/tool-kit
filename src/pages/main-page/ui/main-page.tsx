import { FC, useEffect } from "react";
import { Cell, Loader, pageSize, Paginator, routePath } from "shared";
import styles from "./main-page.module.scss";
import { useUnit } from "effector-react";
import {
    $isPendingCurrentUserRepos,
    $isPendingRepositories,
    $repositories,
    $repositoriesTotalCount,
    getCurrentUserReposFx,
    getRepositoriesFx,
} from "../model/repositories-store";
import { SearchField } from "entities/search-field";
import { useReposSearchParams } from "../lib/hooks/use-repos-search-params";

const MainPage: FC = () => {
    const getCurrentUserRepos = useUnit(getCurrentUserReposFx);
    const getRepositories = useUnit(getRepositoriesFx);
    const repositories = useUnit($repositories);
    const isPendingRepositories = useUnit($isPendingRepositories);
    const isPendingCurrentUserRepos = useUnit($isPendingCurrentUserRepos);
    const repositoriesTotalCount = useUnit($repositoriesTotalCount);

    const { pageNumber, searchQuery, setPageNumber, setSearchQuery } =
        useReposSearchParams();

    useEffect(() => {
        if (searchQuery.length === 0) {
            getCurrentUserRepos({
                skip: (pageNumber - 1) * pageSize,
            });
        }
        if (searchQuery.length > 0) {
            getRepositories({
                query: searchQuery,
                skip: (pageNumber - 1) * pageSize,
            });
        }
    }, [
        getCurrentUserRepos,
        getRepositories,
        pageNumber,
        searchQuery,
        setPageNumber,
    ]);

    const renderRepositories = repositories.map((item) => (
        <li key={item.repository.id}>
            <Cell
                label="Name"
                value={item.repository.name}
                type="link"
                linkTarget="_self"
                linkTo={`${routePath.card}/${item.repository.owner.login}/${item.repository.name}`}
            />
            <Cell
                label="Stars"
                value={String(item.repository.stargazerCount)}
            />
            <Cell
                label="Last commit"
                type="date"
                value={
                    item.repository.defaultBranchRef?.target.history.nodes[0]
                        .committedDate || ""
                }
            />
            <Cell label="Url" type="link" value={item.repository.url} />
        </li>
    ));

    const isShowLoader = isPendingRepositories || isPendingCurrentUserRepos;

    return (
        <section className={styles.main_section}>
            <SearchField query={searchQuery} onChangeQuery={setSearchQuery} />
            <Paginator
                className={styles.paginator}
                currentPage={pageNumber}
                pageSize={pageSize}
                onChangePage={setPageNumber}
                totalItemsCount={repositoriesTotalCount}
            />
            <div className={styles.list_container}>
                {isShowLoader && <Loader />}
                {!isShowLoader && (
                    <ul className={styles.list}>{renderRepositories}</ul>
                )}
            </div>
        </section>
    );
};

export default MainPage;
