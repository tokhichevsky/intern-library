import { storiesOf } from "@storybook/react";
import cn from "classnames";
import ModalTest from "./ModalTest";
import * as React from "react";
import styles from "../../styles/storybook.module.scss";

const stories = storiesOf("UI", module);

stories.add(
  "Modal",
  () => (
    <div className={cn(styles.columnItems, styles.background)}>
      <ModalTest/>
    </div>
  )
);
