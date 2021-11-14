import { TNavbarItemProps } from "components/NavbarItem/NavbarItem.type";
import React, { AnchorHTMLAttributes, ComponentType, DetailedHTMLProps, FC } from "react";
import styles from "./NavbarItem.module.scss";

const NavbarItem: FC<TNavbarItemProps>
  = <Component extends ComponentType<any> = ComponentType<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>>>
(props: TNavbarItemProps<Component>) => {
  const { component: Component, ...componentProps } = props;

  if (!Component) {
    return <a {...componentProps} className={styles.root}/>;
  }

  return (
    <Component {...componentProps} className={styles.root}/>
  );
};

export default NavbarItem;
