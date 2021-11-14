import { storiesOf } from "@storybook/react";
import cn from "classnames";
import * as React from "react";
import Button from "../Button";
import styles from "../../styles/storybook.module.scss";

const stories = storiesOf("UI", module);

stories.add(
  "Button",
  () => (
    <div className={cn(styles.columnItems, styles.background)}>
      <div className={styles.rowItems}>
        <Button>Стандартная кнопка</Button>
        <Button size="large">Большая кнопка</Button>
        <Button size="small">Маленькая кнопка</Button>
      </div>
      <div className={styles.rowItems}>
        <Button color="green">Стандартная зеленая кнопка</Button>
        <Button color="green" size="large">Большая зеленая кнопка</Button>
        <Button color="green" size="small">Маленькая зеленая кнопка</Button>
      </div>
    </div>
  )
);
