import cn from "classnames";
import { TParagraphProps } from "./Paragraph.type";
import React, { FC } from "react";
import styles from './Paragraph.module.scss';

const Paragraph: FC<TParagraphProps> = (props) => {
  const { type, ...pProps } = props;

  return (
    <p {...pProps} className={cn(styles.root, styles[`root_${type}`])}>
      {pProps.children}
    </p>
  );
};

Paragraph.defaultProps = {
  type: "P14",
}

export default Paragraph;
