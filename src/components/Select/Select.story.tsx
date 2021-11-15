import { storiesOf } from "@storybook/react";
import cn from "classnames";
import { TSelectOption } from "./Select.type";
import Select from "../Select";
import * as React from "react";
import styles from "../../styles/storybook.module.scss";

const stories = storiesOf("Fields", module);

const options: TSelectOption[] = [
  {
    key: "1",
    value: "1",
    label: "Собака"
  },
  {
    key: "2",
    value: "2",
    label: "Черепаха"
  },
  {
    key: "3",
    value: "3",
    label: "Тигр"
  },
  {
    key: "4",
    value: "4",
    label: "Слон"
  },
  {
    key: "5",
    value: "5",
    label: "Лиса"
  },
  {
    key: "6",
    value: "6",
    label: "Кошка"
  },
]

stories.add(
  "Select",
  () => (
    <div className={cn(styles.rowItems, styles.background)} style={{ height: 300 }}>
      <Select options={options} />
      <Select options={options} placeholder="Животные" multiple />
      <Select options={options} placeholder="Животное" />
    </div>
  )
);
