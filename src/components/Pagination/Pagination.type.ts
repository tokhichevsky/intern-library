import { CSSProperties } from "react";

export type TPaginationProps = {
  maxVisiblePages?: number;
  totalPages: number;
  onChange?: (page: number) => void;
  value?: number;
  className?: string;
  style?: CSSProperties;
}
