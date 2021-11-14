import { storiesOf } from "@storybook/react";
import cn from "classnames";
import * as React from "react";
import styles from "../../styles/storybook.module.scss";
import Input from "../Input";
import Label from "../Label";

const stories = storiesOf("UI", module);

stories.add(
  "Input",
  () => (
    <div className={cn(styles.columnItems, styles.background)}>
      <Input placeholder="Что-то"/>
      <Input placeholder="Поиск" endAdornment={<div className={styles.redSquare}/>}/>
      <Input placeholder="Что-то" size="large"/>
      <Input placeholder="Поиск" size="large" endAdornment={<div className={styles.redSquare}/>}/>

      <div>
        <Label htmlFor="name">Имя пользователя</Label>
        <Input id="name" placeholder="Введите ваше имя"/>
      </div>
    </div>
  )
);
