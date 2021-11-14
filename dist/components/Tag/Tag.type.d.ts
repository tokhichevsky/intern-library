import { DetailedHTMLProps, HTMLAttributes } from "react";
export declare enum TagColor {
    Primary = "primary",
    Secondary = "secondary",
    Success = "success",
    Info = "info",
    Warning = "warning",
    Danger = "danger"
}
export declare type TTagProps = Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'color'> & {
    color?: TagColor | string;
};
