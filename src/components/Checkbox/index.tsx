import cn from "classnames";
import { TCheckboxProps } from "components/Checkbox/Checkbox.type";
import React, { FC, useCallback, useEffect, useState } from "react";
import styles from "./Checkbox.module.scss";

const Checkbox: FC<TCheckboxProps> = (props: TCheckboxProps) => {
  const { value = false, label, name, onChange, disabled, ...otherProps } = props;
  const [checked, setChecked] = useState(value);

  const changeHandler = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      setChecked(event.target.checked);
      onChange?.(event.target.checked);
    }
  }, [onChange, disabled]);

  useEffect(() => {
    setChecked(value);
  }, [value]);

  return (
    <label {...otherProps} className={cn(styles.root, otherProps.className)}>
      <input name={name} className={styles.input} type="checkbox" checked={checked} onChange={changeHandler}/>
      <div className={cn(styles.checkbox, {
        [styles.checkbox_checked]: checked,
        [styles.checkbox_disabled]: disabled,
      })}/>
      {label}
    </label>
  );
};

export default Checkbox;
