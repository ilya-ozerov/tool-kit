import { FC, ReactNode } from "react";
import styles from "./test-block.module.scss";

interface ITestBlock {
    title: string;
    children: ReactNode;
}

export const TestBlock: FC<ITestBlock> = ({ title, children }) => {
    return (
        <div className={styles.test_block} data-testid={title}>
            <h2>{title}</h2>
            <div className={styles.children}>{children}</div>
        </div>
    );
};
