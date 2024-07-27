import { FC, useId } from "react";
import styles from "./cell.module.scss";
import clsx from "clsx";
import { Link } from "react-router-dom";

interface ICell {
    label: string;
    value: string | undefined | null;
    type?: "text" | "date" | "link";
    className?: string;
}

export const Cell: FC<ICell> = (props) => {
    const { label, value, className = "", type = "text" } = props;

    const labelId = useId();

    const renderValue = () => {
        if (!value) return "-";

        switch (type) {
            case "text":
                return value;
            case "date":
                return new Date(value).toUTCString();
            case "link":
                return (
                    <Link to={value} target="_blank">
                        {value}
                    </Link>
                );
            default:
                return String(value);
        }
    };

    return (
        <div className={clsx(styles.cell, className)}>
            <label htmlFor={labelId} className={styles.label}>
                {label}
            </label>
            <div id={labelId} className={styles.value}>
                {renderValue()}
            </div>
        </div>
    );
};
