import { CSSProperties, FocusEventHandler } from "react";

export type TSelectOption = {
  key: string
  value: string;
  label: string;
}

export type TSelectProps = {
  placeholder?: string;
  className?: string;
  style?: CSSProperties;
  multiple?: boolean;
  value?: TSelectOption | TSelectOption[] | null;
  onChange?: (value: TSelectOption | TSelectOption[] | null) => void;
  options?: TSelectOption[];
  onFocus?: FocusEventHandler;
  onBlur?: FocusEventHandler;

}
