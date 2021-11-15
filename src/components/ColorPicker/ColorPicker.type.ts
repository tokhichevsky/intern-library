import { ChangeEventHandler, CSSProperties } from "react";
import { TLabelProps } from "../Label/Label.type";

export type TColorPickerProps = Omit<TLabelProps, 'onChange'> & {
  label?: string;
  className?: string;
  style?: CSSProperties;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}
