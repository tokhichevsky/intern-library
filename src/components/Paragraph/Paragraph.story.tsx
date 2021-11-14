import { storiesOf } from "@storybook/react";
import cn from "classnames";
import Paragraph from "../Paragraph";
import * as React from "react";
import styles from "../../styles/storybook.module.scss";

const stories = storiesOf("UI", module);

stories.add(
  "Paragraph",
  () => (
    <div className={cn(styles.columnItems, styles.background)}>
      <Paragraph type="P24">P24 Найди любимого персонажа</Paragraph>
      <Paragraph type="P20">P20 Найди любимого персонажа</Paragraph>
      <Paragraph type="P18">P18 Найди любимого персонажа</Paragraph>
      <Paragraph type="P16">P16 Найди любимого персонажа</Paragraph>
      <Paragraph type="P14">P14 (default) Найди любимого персонажа</Paragraph>
      <Paragraph type="P9">P9 Найди любимого персонажа</Paragraph>

      <Paragraph>
        Гарри Поттер — главный герой серии романов.
        В волшебном мире известен как единственный человек, выживший после смертоносного заклинания «Авада Кедавра»,
        которое было пущено в него в младенческом возрасте одним из величайших тёмных волшебников — лордом Волан-де-Мортом.
      </Paragraph>
      <Paragraph>
        Гарри — хороший друг и товарищ, не любит врать, всегда старается помочь тем, кто нуждается в помощи.
      </Paragraph>
    </div>
  )
);
