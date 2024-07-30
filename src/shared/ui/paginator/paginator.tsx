import clsx from "clsx";
import { FC } from "react";
import styles from "./paginator.module.scss";
import { Button } from "../button/button";

interface IPaginator {
    currentPage: number;
    pageSize: number;
    onChangePage: (pageNumber: number) => void;
    totalItemsCount: number;
    className?: string;
}

export const Paginator: FC<IPaginator> = ({
    currentPage,
    pageSize,
    totalItemsCount,
    onChangePage,
    className = "",
}) => {
    const totalPagesCount = Math.ceil(totalItemsCount / pageSize);

    const pagesCount = totalPagesCount < 10 ? totalPagesCount : 10;

    const pages: number[] = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const renderPages = pages.map((page) => (
        <Button
            key={page}
            className={clsx(page === currentPage && styles.selected)}
            onClick={() => onChangePage(page)}
        >
            {page}
        </Button>
    ));

    const isShowPrevButton = pages.length > 0 && currentPage > 1;
    const isShowNextButton = pages.length > 0 && currentPage < pagesCount;

    return (
        <div
            className={clsx(styles.paginator, className)}
            data-testid="paginator"
        >
            {isShowPrevButton && (
                <Button
                    onClick={() => onChangePage(currentPage - 1)}
                    variant="primary"
                >
                    prev
                </Button>
            )}

            <div className={styles.pages}>{renderPages}</div>
            {isShowNextButton && (
                <Button
                    onClick={() => onChangePage(currentPage + 1)}
                    variant="primary"
                >
                    next
                </Button>
            )}
        </div>
    );
};
