import { storiesOf } from "@storybook/react";
import cn from "classnames";
import Checkbox from "../Checkbox";
import * as React from "react";
import styles from "../../styles/storybook.module.scss";

const stories = storiesOf("UI", module);

stories.add(
  "Checkbox",
  () => (
    <div className={cn(styles.columnItems, styles.background)}>
      <Checkbox label="Выбери меня" />
      <Checkbox label="Выбери меня" value={true} />
      <Checkbox label="Выбери меня" disabled />
      <Checkbox label="Выбери меня" disabled value={true} />
    </div>
  )
);
