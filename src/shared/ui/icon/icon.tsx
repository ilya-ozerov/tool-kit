import clsx from "clsx";
import { FC } from "react";

interface IIcon
    extends React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLSpanElement>,
        HTMLSpanElement
    > {
    icon: string;
}

export const Icon: FC<IIcon> = ({ icon, className, ...rest }) => {
    return (
        <span
            className={clsx("material-symbols-outlined", className)}
            {...rest}
        >
            {icon}
        </span>
    );
};
