import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export type TButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  color?: "primary" | "green";
  size?: "large" | "default" | "small";
}
