import cn from "classnames";
import React from "react";
import { FC } from "react";
import { TButtonProps } from "./Button.type";
import styles from './Button.module.scss';

const Button: FC<TButtonProps> = (props: TButtonProps) => {
  const { color, size, disabled, ...buttonProps } = props;
  return (
    <button
      {...buttonProps}
      disabled={disabled}
      className={cn(styles.root, props.className, {
        [styles.root_primary]: color === "primary",
        [styles.root_green]: color === "green",
        [styles.root_negative]: color === "negative",
        [styles.root_large]: size === "large",
        [styles.root_small]: size === "small",
        [styles.root_disabled]: disabled,
      })}
    />
  )
}

Button.defaultProps = {
  color: "primary",
  size: "default",
}

export default Button;
