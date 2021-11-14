import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
export declare type TButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    color?: "primary" | "green";
    size?: "large" | "default" | "small";
};
