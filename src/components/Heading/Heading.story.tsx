import { storiesOf } from "@storybook/react";
import cn from "classnames";
import Heading from "../Heading";
import * as React from "react";
import styles from "../../styles/storybook.module.scss";

const stories = storiesOf("UI", module);

stories.add(
  "Heading",
  () => (
    <div className={cn(styles.columnItems, styles.background)}>
      <Heading type="H1+">H1+ (default) Найди любимого персонажа</Heading>
      <Heading type="H1">H1 Найди любимого персонажа</Heading>
      <Heading type="H2">H2 Найди любимого персонажа</Heading>
      <Heading type="H3">H3 Найди любимого персонажа</Heading>
      <Heading type="H4">H4 Найди любимого персонажа</Heading>
      <Heading type="H5">H5 Найди любимого персонажа</Heading>
    </div>
  )
);
