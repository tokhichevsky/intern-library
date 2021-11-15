import React, { ChangeEvent, FC, useCallback, useEffect, useState } from "react";
import { TColorPickerProps } from "./ColorPicker.type";
import Label from "../Label";
import styles from './ColorPicker.module.scss';
import cn from "classnames";

const COLOR_PICKER_DEFAULT_COLOR = "#FFFFFF";

const ColorPicker: FC<TColorPickerProps> = (props: TColorPickerProps) => {
  const {onChange, value = COLOR_PICKER_DEFAULT_COLOR, className, style, label, ...labelProps} = props;
  const [color, setColor] = useState<string>(value);

  const changeHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
    onChange?.(event);
  }, [onChange])

  useEffect(() => {
    value && setColor(value);
  }, [value])

  return (
    <Label {...labelProps} className={cn(styles.root, className)}>
      <div className={styles.color} style={{backgroundColor: color}}>
        <input type="color" className={styles.input} value={color} onChange={changeHandler}/>
      </div>
      {label}
    </Label>
  );
};

export default ColorPicker;
