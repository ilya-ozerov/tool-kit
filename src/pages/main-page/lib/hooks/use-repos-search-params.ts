import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";

const enum SearchParams {
    PAGE = "page",
    SEARCH_QUERY = "searchQuery",
}

export const useReposSearchParams = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const pageNumber = Number(searchParams.get(SearchParams.PAGE)) || 1;

    const setPageNumber = useCallback(
        (page: number) => {
            setSearchParams((current) => {
                current.set(SearchParams.PAGE, String(page));

                return current;
            });
        },
        [setSearchParams],
    );

    const searchQuery = searchParams.get(SearchParams.SEARCH_QUERY) || "";

    const setSearchQuery = useCallback(
        (searchQuery: string) => {
            setSearchParams((current) => {
                setPageNumber(1);
                current.set(SearchParams.SEARCH_QUERY, searchQuery);

                return current;
            });
        },
        [setPageNumber, setSearchParams],
    );

    return {
        pageNumber,
        setPageNumber,
        searchQuery,
        setSearchQuery,
    };
};
