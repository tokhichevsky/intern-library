import { storiesOf } from "@storybook/react";
import cn from "classnames";
import * as React from "react";
import styles from "../../styles/storybook.module.scss";
import ImageUploader from "./index";

const stories = storiesOf("Fields", module);

stories.add(
  "ImageUploader",
  () => (
    <div className={cn(styles.columnItems, styles.background)}>
      <ImageUploader/>
    </div>
  )
);
