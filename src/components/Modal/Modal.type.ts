import { CSSProperties, PropsWithChildren } from "react";

export type TModalProps = PropsWithChildren<{
  className?: string;
  style?: CSSProperties;
  open?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}>
