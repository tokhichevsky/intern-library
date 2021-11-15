import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export type TButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  color?: "primary" | "green" | "negative";
  size?: "large" | "default" | "small";
}
