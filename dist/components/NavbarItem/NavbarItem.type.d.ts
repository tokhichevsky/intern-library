import { AnchorHTMLAttributes, ComponentProps, ComponentType, DetailedHTMLProps } from "react";
export declare type TNavbarItemProps<Component extends ComponentType = ComponentType<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>>> = ComponentProps<Component> & {
    component?: Component;
};
