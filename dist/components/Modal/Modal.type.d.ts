import { CSSProperties, PropsWithChildren } from "react";
export declare type TModalProps = PropsWithChildren<{
    className?: string;
    style?: CSSProperties;
    open?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
}>;
