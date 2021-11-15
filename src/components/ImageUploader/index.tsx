import React, { ChangeEvent, FC, useCallback, useMemo, useState } from "react";
import { TImageUploaderProps } from "./ImageUploader.type";
import styles from "./ImageUploader.module.scss";
import { Add } from "../Icons/Add";
import Button from "../Button/index";
import IconButton from "../IconButton/index";
import Modal from "../Modal/index";
import Label from "../Label/index";
import Input from "../Input/index";
import cn from "classnames";

const ImageUploader: FC<TImageUploaderProps> = (props: TImageUploaderProps) => {
  const { value, onChange, className, ...otherProps } = props;

  const [image, setImage] = useState<string | undefined>(value);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);
  const inputChangeHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }, []);
  const modalSaveButtonClickHandler = useCallback(() => {
    setImage(inputValue);
    closeModal();
  }, [inputValue, closeModal]);
  const controlChangeButtonClickHandler = useCallback(() => {
    setImage(undefined);
    onChange?.(undefined)
  }, [onChange]);
  const controlSaveButtonClickHandler = useCallback(() => {
    onChange?.(image);
  }, [onChange]);
  const fileInputChangeHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      setImage(URL.createObjectURL(file));
    }
  }, []);

  const containerStyles = useMemo(() => {
    return {
      backgroundImage: image ? `url(${image})` : undefined,
      backgroundSize: "cover",
    }
  }, [image]);

  return (
    <div className={cn(styles.root, className)} {...otherProps}>
      <div
        className={cn(styles.container, { [styles.container_hasImage]: !!image })}
        style={containerStyles}
      >
        <label className={styles.addButton}>
          <IconButton color="negative"><Add/></IconButton>
          <input className={styles.input} type="file" accept="image/*" onChange={fileInputChangeHandler}/>
        </label>
        <Button
          color="negative"
          size="small"
          className={styles.urlButton}
          onClick={openModal}
        >
          URL Изображения
        </Button>
        <Modal className={styles.modal} open={isModalOpen} onClose={closeModal}>
          <div className={styles.modalContent}>
            <Label>
              Адрес изображения
              <Input type="url" placeholder="https://www.example.com" value={inputValue} onChange={inputChangeHandler}/>
            </Label>
            <Button
              className={styles.modalSaveButton}
              type="button"
              color="green"
              size="default"
              onClick={modalSaveButtonClickHandler}
              disabled={!inputValue}
            >
              Сохранить
            </Button>
          </div>
        </Modal>
      </div>
      <div className={styles.controls}>
        <Button
          className={styles.controlButton}
          size="small"
          disabled={!image}
          onClick={controlChangeButtonClickHandler}
        >
          Изменить
        </Button>
        <Button
          className={styles.controlButton}
          size="small"
          color="green"
          disabled={!image}
          onClick={controlSaveButtonClickHandler}
        >
          Сохранить
        </Button>
      </div>
    </div>
  );
};

export default ImageUploader;
