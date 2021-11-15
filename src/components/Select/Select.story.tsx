import { storiesOf } from "@storybook/react";
import cn from "classnames";
import { TSelectOption } from "./Select.type";
import Select from "../Select";
import * as React from "react";
import styles from "../../styles/storybook.module.scss";

const stories = storiesOf("Fields", module);

const options: TSelectOption[] = [
  {
    id: "1",
    value: "Собака"
  },
  {
    id: "2",
    value: "Черепаха"
  },
  {
    id: "3",
    value: "Тигр"
  },
  {
    id: "4",
    value: "Слон"
  },
  {
    id: "5",
    value: "Лиса"
  },
  {
    id: "6",
    value: "Кошка"
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
