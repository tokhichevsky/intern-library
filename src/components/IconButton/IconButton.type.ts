import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export type TIconButtonProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  children: ReactNode;
  color?: "primary" | "green" | "negative";
  disabled?: boolean;
}
