import cn from "classnames";
import { TIconButtonProps } from "./IconButton.type";
import React, { FC } from "react";
import styles from "./IconButton.module.scss";

const IconButton: FC<TIconButtonProps> = (props: TIconButtonProps) => {
  const { color, children, disabled, ...otherProps } = props;

  return (
    <div
      {...otherProps}
      onClick={!disabled ? otherProps.onClick : undefined}
      className={cn(styles.root, otherProps.className, {
        [styles.root_primary]: color === "primary",
        [styles.root_green]: color === "green",
        [styles.root_disabled]: disabled,
      })}>
      {children}
    </div>
  );
};

IconButton.defaultProps = {
  color: "primary",
};

export default IconButton;
