import { storiesOf } from "@storybook/react";
import cn from "classnames";
import Pagination from "../Pagination";
import * as React from "react";
import styles from "../../styles/storybook.module.scss";

const stories = storiesOf("UI", module);

stories.add(
  "Pagination",
  () => (
    <div className={cn(styles.columnItems, styles.background)}>
      <Pagination totalPages={5} />
      <Pagination totalPages={10} />
      <Pagination totalPages={10} maxVisiblePages={3} />
    </div>
  )
);
