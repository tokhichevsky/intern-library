import { CSSProperties } from "react";
export declare type TPaginationProps = {
    maxVisiblePages?: number;
    totalPages: number;
    onChange?: (page: number) => void;
    value?: number;
    className?: string;
    style?: CSSProperties;
};
