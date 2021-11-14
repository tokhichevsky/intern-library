import cn from "classnames";
import { TInputProps } from "./Input.type";
import React from "react";
import { FC } from "react";
import styles from './Input.module.scss';

const Input: FC<TInputProps> = (props: TInputProps) => {
  const { className, style, endAdornment, startAdornment, size, ...inputProps} = props;
  return (
    <div className={cn(styles.root, className, {[styles.root_large]: size === "large"})} style={style}>
      {startAdornment && <div className={styles.startAdornment}>{startAdornment}</div>}
      <input type="text" {...inputProps} className={styles.input} />
      {endAdornment && <div className={styles.endAdornment}>{endAdornment}</div>}
    </div>
  )
}

Input.defaultProps = {
  size: 'default',
}

export default Input;
