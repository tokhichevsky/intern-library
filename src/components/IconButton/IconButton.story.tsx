import { storiesOf } from "@storybook/react";
import cn from "classnames";
import { Close } from "../Icons";
import IconButton from "../IconButton";
import * as React from "react";
import styles from "../../styles/storybook.module.scss";

const stories = storiesOf("UI", module);

stories.add(
  "IconButton",
  () => (
    <div className={cn(styles.columnItems, styles.background)}>
      <IconButton><Close /></IconButton>
      <IconButton color="green"><Close /></IconButton>
      <IconButton color="primary" disabled><Close /></IconButton>
    </div>
  )
);
