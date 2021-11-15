import cn from "classnames";
import { TSelectOption, TSelectProps } from "./Select.type";
import React, { FC, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { convertToArray } from "../../utils";
import Checkbox from "../Checkbox";
import styles from "./Select.module.scss";

const Select: FC<TSelectProps> = (props: TSelectProps) => {
  const { className, multiple, onBlur, onChange, onFocus, options, style, value, placeholder } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(convertToArray(value));
  const wrapperRef = useRef<HTMLDivElement>(null);

  const selectedElementsCount: number = useMemo(() => selected.length, [selected.length]);
  const text: string | undefined = useMemo(
    () => multiple && placeholder ? placeholder : selected.length ? selected[0].value : placeholder,
    [selected, placeholder, multiple]
  );

  const checkIsSelected = useCallback((option: TSelectOption): boolean => {
    return !!selected.find((selectedOption) => selectedOption.value === option.value);
  }, [selected]);

  const getChangeHandler = useCallback((option: TSelectOption) => (checked: boolean) => {
    if (checked) {
      const newValue = multiple ? [...selected, option] : option;
      onChange?.(newValue);
      setSelected(convertToArray(newValue));
    } else {
      const newValue = multiple
        ? selected.filter((selectedOption) => selectedOption.value !== option.value)
        : null;
      onChange?.(newValue);
      setSelected(convertToArray(newValue));
    }
  }, [multiple, onChange, selected]);

  const toggleMenu = useCallback((isOpen?: boolean) => {
    setIsOpen((prevState) => isOpen === undefined ? !prevState : isOpen);
  }, []);

  const outsideClickListener = useCallback((event: MouseEvent) => {
    if (!wrapperRef.current?.contains(event.target as Node)) {
      toggleMenu(false);
    }
  }, [toggleMenu]);

  useEffect(() => {
    document.addEventListener("click", outsideClickListener);

    return () => document.removeEventListener("click", outsideClickListener);
  }, []);

  useEffect(() => {
    setSelected(convertToArray(value));
  }, [value]);

  return (
    <div
      className={cn(styles.root, className)}
      onFocus={onFocus}
      onBlur={onBlur}
      style={style}
      ref={wrapperRef}
    >
      <div
        className={cn(styles.select, { [styles.select_menuOpen]: isOpen })}
        onClick={() => toggleMenu()}>
        {text}
        {multiple && !!selectedElementsCount && <div className={styles.count}>{selectedElementsCount}</div>}
        <div className={styles.caret}/>
      </div>
      {isOpen && (
        <div className={styles.menu} style={{ width: wrapperRef.current?.offsetWidth }}>
          {options?.map((option) => (
            <Checkbox
              key={option.id}
              label={option.value}
              value={checkIsSelected(option)}
              onChange={getChangeHandler(option)}
              className={styles.option}
            />
          ))}
        </div>
      )}
    </div>
  );
};

Select.defaultProps = {
  multiple: false,
};

export default Select;
