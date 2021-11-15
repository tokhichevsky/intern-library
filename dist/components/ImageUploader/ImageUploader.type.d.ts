import { DetailedHTMLProps, HTMLAttributes } from "react";
export declare type TImageUploaderProps = Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "onChange"> & {
    value?: string;
    onChange?: (value?: string) => void;
};
