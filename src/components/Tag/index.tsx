import cn from "classnames";
import { TagColor, TTagProps } from "./Tag.type";
import React, { FC, useMemo } from "react";
import styles from "./Tag.module.scss";

const Tag: FC<TTagProps> = (props: TTagProps) => {
  const { children, color, className, style, ...otherProps } = props;

  const isColorInTagColors = useMemo(() => color && Object.values(TagColor).includes(color as TagColor), [color]);

  const tagColorClassName = useMemo(() => isColorInTagColors ? styles[`root_${color}`] : undefined, [color, isColorInTagColors]);
  const backgroundColor = useMemo(() => isColorInTagColors ? undefined : color,  [color, isColorInTagColors]);

  return (
    <div
      {...otherProps}
      className={cn(styles.root, className, tagColorClassName)}
      style={{...style, backgroundColor}}
    >
      {props.children}
    </div>
  )
}

Tag.defaultProps = {
  color: "#B09A81",
}

export default Tag;
