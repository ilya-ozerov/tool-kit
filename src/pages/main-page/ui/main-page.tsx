import { FC, useEffect } from "react";
import { Cell, pageSize, Paginator } from "shared";
import styles from "./main-page.module.scss";
import { useUnit } from "effector-react";
import {
    $isPendingRepositories,
    $pageNumber,
    $repositories,
    $repositoriesTotalCount,
    $searchQuery,
    getRepositoriesFx,
    pageNumberChanged,
    searchQueryChanged,
} from "../model/repositories-store";
import { SearchField } from "entities/search-field";

const MainPage: FC = () => {
    const getRepositories = useUnit(getRepositoriesFx);
    const repositories = useUnit($repositories);
    const isPendingRepositories = useUnit($isPendingRepositories);
    const repositoriesTotalCount = useUnit($repositoriesTotalCount);

    const [searchQuery, setSearchQuery] = useUnit([
        $searchQuery,
        searchQueryChanged,
    ]);

    const [pageNumber, setPageNumber] = useUnit([
        $pageNumber,
        pageNumberChanged,
    ]);

    useEffect(() => {
        if (searchQuery.length === 0) {
            setPageNumber(1);
        }
        if (searchQuery.length > 0) {
            getRepositories({
                query: searchQuery,
                skip: (pageNumber - 1) * pageSize,
            });
        }
    }, [getRepositories, pageNumber, searchQuery, setPageNumber]);

    const renderRepositories = repositories.map((item) => (
        <li key={item.repository.id}>
            <Cell label="Name" value={item.repository.name} />
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
                {isPendingRepositories && <div>Loading...</div>}
                {!isPendingRepositories && (
                    <ul className={styles.list}>{renderRepositories}</ul>
                )}
            </div>
        </section>
    );
};

export default MainPage;
