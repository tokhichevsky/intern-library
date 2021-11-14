import cn from "classnames";
import { THeadingProps } from "./Heading.type";
import React, { FC } from "react";
import styles from './Heading.module.scss';


const Heading: FC<THeadingProps> = (props) => {
  const { type = "H1+", ...headingProps } = props;

  switch (type) {
    case "H1+":
      return <h1 {...headingProps} className={cn(styles.root, styles.root_H1Plus, headingProps.className)} />
    case "H1":
      return <h1 {...headingProps} className={cn(styles.root, styles.root_H1, headingProps.className)} />
    case "H2":
      return <h2 {...headingProps} className={cn(styles.root, headingProps.className)} />
    case "H3":
      return <h3 {...headingProps} className={cn(styles.root, headingProps.className)} />
    case "H4":
      return <h4 {...headingProps} className={cn(styles.root, headingProps.className)} />
    case "H5":
      return <h5 {...headingProps} className={cn(styles.root, headingProps.className)} />
  }
};

Heading.defaultProps = {
  type: "H1+",
}

export default Heading;
