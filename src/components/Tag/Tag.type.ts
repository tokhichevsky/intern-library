import { DetailedHTMLProps, HTMLAttributes } from "react";

export enum TagColor {
  Primary = 'primary',
  Secondary = "secondary",
  Success = "success",
  Info = "info",
  Warning = "warning",
  Danger = "danger",
}

export type TTagProps = Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'color'> & {
  color?: TagColor | string;
}
