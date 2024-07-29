import { FC } from "react";
import styles from "./icon-button.module.scss";
import clsx from "clsx";
import { Icon } from "../icon/icon";

interface IIconButton
    extends React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    icon: string;
}

export const IconButton: FC<IIconButton> = (props) => {
    const { className, icon, ...rest } = props;

    return (
        <button className={clsx(styles.icon_button, className)} {...rest}>
            <Icon icon={icon} className={styles.icon} />
        </button>
    );
};
