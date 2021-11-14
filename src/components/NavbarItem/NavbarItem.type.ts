import { AnchorHTMLAttributes, ComponentProps, ComponentType, DetailedHTMLProps } from "react";

export type TNavbarItemProps<Component extends ComponentType = ComponentType<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>>> =
  ComponentProps<Component> & {
  component?: Component
};
