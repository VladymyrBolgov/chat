import React from "react";
import styled from "styled-components";

// Створюємо компонент Список Опцій, який нам потрібен на сторінці Налаштування
export default function OptionList({ list }) {
  // Функція .map() дозволяє згенерувати для кожного елемента списку опцій
  // свій власний компонент однієї опції, в якому будуть передані потрібні дані
  return <List>{list.map(OptionItem)}</List>;
}

// Елемент "Cписок" який відповідає за відображення списку опцій
const List = styled.div`
  background-color: #fff;

  /* Включаємо режим grid, щоб всі елементи списку ставали вертикально */
  display: grid;
  border-top: solid #d7d7d7 1px;
  border-bottom: solid #d7d7d7 1px;
`;

// Генеруємо компонент "Одна Опція", в якому ми отримуємо дані однієї опції та виводимо їх
function OptionItem({ Image, title, id }) {
  return (
    // Технічний тег, в який ми передаємо ідентифікатор опції
    <React.Fragment key={id}>
      <Item>
        {/* в src передаємо картинку іконки */}
        {/* в alt передаємо заголовок опції, щоб браузер краще розумів до чого тут певна картинка */}
        <Icon>
          {/* Виводимо змінну Image, яка має всередині вихідний код картинки для іконки */}
          <Image />
        </Icon>
        {/* Передаємо заголовок опції */}
        <Title>{title}</Title>
      </Item>
    </React.Fragment>
  );
}

// Елемент "Іконка" для картинки опції
const Icon = styled.div`
  width: 30px;
  height: 30px;

  /* Відступ праворуч, щоб текст опції не притискався до картинки */
  margin-right: 16px;

  /* Відступ зверху та знизу, щоб картинка не налазила на рамку карточки опції */
  padding-top: 8px;
  padding-bottom: 8px;
`;

// Елемент "Заголовок" для тексту опції
const Title = styled.div`
  width: 100%;

  /* Відступ зверху та знизу, щоб картинка не налазила на рамку карточки опції */
  padding-top: 8px;
  padding-bottom: 8px;
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #111;
`;

// Елемент "Один елемент опції", який відповідає за відображення
// елемента "Заголовок" та "Іконка" для компонент "Одна опція"
const Item = styled.div`
  display: flex;
  align-items: stretch;
  padding-left: 16px;
  padding-right: 16px;

  &:not(:last-of-type) > ${Title} {
    border-bottom: 1px solid #d7d7d7;
  }

  /* Задаємо можливість робити анімацію */
  transition: opacity 0.7s;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;
