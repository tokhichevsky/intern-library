import { storiesOf } from "@storybook/react";
import cn from "classnames";
import ColorPicker from "../ColorPicker";
import * as React from "react";
import styles from "../../styles/storybook.module.scss";

const stories = storiesOf("Fields", module);

stories.add(
  "ColorPicker",
  () => (
    <div className={cn(styles.columnItems, styles.background)}>
      <ColorPicker value="#ffffff" label="Цвет имени" />
      <ColorPicker value="#ffffff" label="Цвет фона параметров" />
      <ColorPicker value="#ffffff" label="Цвет параметров" />
    </div>
  )
);
