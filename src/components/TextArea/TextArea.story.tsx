import { storiesOf } from "@storybook/react";
import cn from "classnames";
import TextArea from "../TextArea";
import * as React from "react";
import styles from "../../styles/storybook.module.scss";

const stories = storiesOf("UI", module);

stories.add(
  "TextArea",
  () => (
    <div className={cn(styles.columnItems, styles.background)}>
      <TextArea placeholder="Напишите рассказ" />
    </div>
  )
);
