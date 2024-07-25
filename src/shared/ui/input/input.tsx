import clsx from "clsx";
import { FC, useId } from "react";
import styles from "./input.module.scss";

interface IInput
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
}

export const Input: FC<IInput> = (props) => {
  const { className, label = "", ...rest } = props;

  const inputId = useId();

  return (
    <div className={clsx(styles.input, className)}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>
      )}
      <input id={inputId} {...rest} />
    </div>
  );
};
