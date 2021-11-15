import { CSSProperties, FocusEventHandler } from "react";
export declare type TSelectOption = {
    id: string;
    value: string;
};
export declare type TSelectProps = {
    placeholder?: string;
    className?: string;
    style?: CSSProperties;
    multiple?: boolean;
    value?: TSelectOption | TSelectOption[] | null;
    onChange?: (value: TSelectOption | TSelectOption[] | null) => void;
    options?: TSelectOption[];
    onFocus?: FocusEventHandler;
    onBlur?: FocusEventHandler;
};
