import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";
import styles from "./button.module.scss";
import clsx from "clsx";

interface IButton
    extends DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    variant?: "regular" | "primary";
}
export const Button: FC<IButton> = (props) => {
    const { className, variant = "regular", ...rest } = props;

    return (
        <button
            className={clsx(
                styles.button,
                variant === "primary" && styles.primary,
                className,
            )}
            {...rest}
        />
    );
};
