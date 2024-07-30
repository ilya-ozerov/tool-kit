import { FC } from "react";
import styles from "./loader.module.scss";
import LoaderSVG from "../../assets/loader.svg?react";

export const Loader: FC = () => {
    return (
        <div className={styles.loader}>
            <LoaderSVG data-testid="LoaderSVG" />
        </div>
    );
};
