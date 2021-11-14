import { storiesOf } from "@storybook/react";
import * as React from "react";
import Navbar from "../Navbar";
import NavbarItem from "../NavbarItem";

const stories = storiesOf("UI", module);

stories.add(
  "Navbar & NavbarItem",
  () => (
    <Navbar>
      <NavbarItem href="/home">Главная</NavbarItem>
      <NavbarItem href="/home">Персонажи</NavbarItem>
    </Navbar>
  )
);
