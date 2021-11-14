import { DetailedHTMLProps, HTMLAttributes } from "react";

export type TCheckboxProps = Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, 'ref' | 'onChange'> & {
  label?: string;
  name?: string;
  value?: boolean;
  onChange?: (value: boolean) => void;
  disabled?: boolean;
}
