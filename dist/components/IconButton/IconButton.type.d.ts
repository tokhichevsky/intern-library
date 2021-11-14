import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
export declare type TIconButtonProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    children: ReactNode;
    color?: "primary" | "green";
    disabled?: boolean;
};
