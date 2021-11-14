import cn from "classnames";
import { TLabelProps } from "components/Label/Label.type";
import React from "react";
import { FC } from "react";
import styles from './Label.module.scss';

const Label: FC<TLabelProps> = (props: TLabelProps) => {
  return (
    <label {...props} className={cn(styles.root, props.className)} />
  )
}

export default Label;
