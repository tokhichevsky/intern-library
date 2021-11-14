import cn from "classnames";
import IconButton from "../IconButton";
import { TModalProps } from "components/Modal/Modal.type";
import React, { FC, useEffect } from "react";
import { createPortal } from "react-dom";
import { Close } from "../Icons";
import styles from "./Modal.module.scss";

const Modal: FC<TModalProps> = (props: TModalProps) => {
  const { className, children, style, onOpen, open, onClose } = props;
  const { zIndex, ...modalStyles } = style || {};

  useEffect(() => {
    if (open) {
      onOpen?.();
    }
  }, [open, onOpen]);

  return createPortal(
    <div role="dialog" className={cn(styles.root, { [styles.root_visible]: open })} style={{ zIndex }}>
      <div className={cn(styles.modal, className)} style={modalStyles}>
        <IconButton className={styles.closeButton} onClick={onClose}><Close/></IconButton>
        {children}
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
