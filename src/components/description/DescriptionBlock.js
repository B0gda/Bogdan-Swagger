import React from "react";
import {
  DescriptionContainer,
  DescriptionTitle,
  DescriptionText,
  StyledPre,
} from "./DescriptionBlock.styles";

const DescriptionBlock = () => {
  return (
    <DescriptionContainer>
      <DescriptionTitle>Описание</DescriptionTitle>
      <DescriptionText>
        Проект представляет собой веб-приложение, которое позволяет
        пользователям взаимодействовать с API и просматривать документацию для
        определенных запросов. Для реализации данного проекта использовались
        следующие технологии: HTML, CSS, JavaScript, React, Webpack (В проекте
        Webpack настроен с прокси-сервером для перенаправления запросов к API),
        Babel, Prettier.
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>
            Webpack (В проекте Webpack настроен с прокси-сервером для
            перенаправления запросов к API):
            <StyledPre>
              {`proxy: [
  {
    context: ["/api"],
    target: "http://193.19.100.32:7000",
    secure: false,
  },
]`}
            </StyledPre>
          </li>
          <li>Babel</li>
          <li>Prettier</li>
          <li>Styled Components</li>
        </ul>
        <br />
        Для создания стилизованных React-компонентов применялась библиотека
        Styled Components.
      </DescriptionText>
    </DescriptionContainer>
  );
};

export default DescriptionBlock;
