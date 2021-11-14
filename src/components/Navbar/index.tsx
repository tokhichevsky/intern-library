import cn from "classnames";
import { TNavbarProps } from "components/Navbar/Navbar.type";
import React from "react";
import { FC } from "react";
import styles from './Navbar.module.scss';

const Navbar: FC<TNavbarProps> = (props: TNavbarProps) => {
  return (
    <nav {...props} className={cn(styles.root, props.className)}>
      {props.children}
    </nav>
  )
}

export default Navbar;
