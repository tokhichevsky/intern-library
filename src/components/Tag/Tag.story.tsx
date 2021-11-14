import { storiesOf } from "@storybook/react";
import cn from "classnames";
import Tag from "../Tag";
import * as React from "react";
import styles from "../../styles/storybook.module.scss";

const stories = storiesOf("UI", module);

stories.add(
  "Tag",
  () => (
    <div className={cn(styles.rowItems)}>
      <Tag color="#123123">Сильный</Tag>
      <Tag color="blue">Умный</Tag>
      <Tag color="red">Вспыльчивый</Tag>
      <Tag color="secondary">Нежный</Tag>
      <Tag color="warning">Заботливый</Tag>
      <Tag color="info">Внимательный</Tag>
      <Tag color="danger">Опасный</Tag>
      <Tag color="primary">Сложный</Tag>
    </div>
  )
);
