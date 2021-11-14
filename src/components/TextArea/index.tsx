import cn from "classnames";
import { TTextAreaProps } from "./TextArea.type";
import React, { FC } from "react";
import styles from "./TextArea.module.scss";

const TextArea: FC<TTextAreaProps> = (props: TTextAreaProps) => {
  const { className, style, ...textAreaProps } = props;

  return (
    <div className={cn(styles.root, className)} style={style}>
      <textarea {...textAreaProps} className={styles.textarea} />
    </div>
  );
};

export default TextArea;
