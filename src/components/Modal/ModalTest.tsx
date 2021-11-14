import Modal from "../Modal/index";
import Paragraph from "../Paragraph";
import React, { useState } from "react";
import Button from "../Button";

const ModalTest = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Нажми на меня</Button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <Paragraph>
          Гарри Поттер — главный герой серии романов.
          В волшебном мире известен как единственный человек, выживший после смертоносного заклинания «Авада Кедавра»,
          которое было пущено в него в младенческом возрасте одним из величайших тёмных волшебников — лордом Волан-де-Мортом.
        </Paragraph>
        <Paragraph>
          Гарри — хороший друг и товарищ, не любит врать, всегда старается помочь тем, кто нуждается в помощи.
        </Paragraph>
      </Modal>
    </>
  );
};

export default ModalTest;
