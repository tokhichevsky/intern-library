import { DetailedHTMLProps, HTMLAttributes } from "react";

export type THeadingProps = DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> & {
  type?: "H1+" | "H1" | "H2" | "H3" | "H4" | "H5";
}
