import React from "react";
import styled, { css } from "styled-components";

// Імпортуємо заготовлений компонент "Посилання"
// який дасть можливість зробити посилання на сторінки в меню
import { Link } from "react-router-dom";

// Імпортуємо файли іконок
import { ReactComponent as SettingsIcon } from "../file/menu/settings.svg";
import { ReactComponent as ChatsIcon } from "../file/menu/groups.svg";

// ============================================
// Створюємо константу, в які буде знаходитись дані нашого меню
// id - це ідентифікатор опції, технічна змінна
// text - це текст для назви нашої кнопки в меню
// Image - туди кладемо іконку, яку до цього імпортували в наш файл коду
// path - туди ми вказуємо посилання на сторінку, яке до цього вказували в файлі App.js

const MENU_LIST = [
  { id: 1, text: "Чати", Image: ChatsIcon, path: "/chats" },
  { id: 2, text: "Налаштування", Image: SettingsIcon, path: "/settings" }
];

// ============================================
// Створюємо компонент "Меню"
// activePage - змінна, в яку ми передали посилання на активну сторінку
export default function Menu({ activePage }) {
  return (
    <Block>
      {/* За допомогою функції .map ми генеруємо для кожного елемента списку меню свою кнопку */}
      {MENU_LIST.map(({ id, text, Image, path }) => (
        // Технічний тег, в який ми передаємо ідентифікатор кнопки меню
        <React.Fragment key={id}>
          {/* Технічний тег, який дає нам можливість переходити на потрібне посилання при натисканні на кнопку в меню */}
          <Link to={path}>
            {/* Передаємо в елемент MenuItem параметр isActive, який буде казати нам яка кнопка в меню є активною */}
            {/* Активна кнопка в меню - це означає, що саме зараз ми знаходимось на сторінці цієї кнопки */}

            {/* В значення параметра ми передаємо activePage === path */}
            {/* Ця конструкція означає, що, якщо змінна активної сторінки збігатися з посиланням кнопки в меню, 
            то тоді параметр isActive буде працювати та кнопка змінить свій колір */}
            <MenuItem isActive={activePage === path}>
              <Icon>
                {/* Виводимо змінну Image, яка має всередині вихідний код картинки для іконки */}
                <Image />
              </Icon>
              <Text>{text}</Text>
            </MenuItem>
          </Link>
        </React.Fragment>
      ))}
    </Block>
  );
}

// Елемент "Блок", який відповідає за відображення кнопок в меню
const Block = styled.div`
  width: 100%;
  background-color: #f6f6f6;
  border-top: solid #d7d7d7 1px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 90px;
`;

// Створюємо елемент "Text", який відповідає за текст кнопки в меню
const Text = styled.span`
  display: flex;
  justify-content: center;
  font-size: 14px;
  color: #8d8d8f;
`;

// Створюємо елемент "Іконка" для картинки кнопки
const Icon = styled.div`
  & > svg {
    height: 26px;
    width: 26px;
  }

  display: flex;
`;

// Елемент "Один елемент меню" відповідає за іконку та за текст назви сторінки в списку меню
const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  /* Складна конструкція, яка надає можливість змінювати дизайн елементів "Іконка" та "Текст" */
  /* в тому випадку, якщо наш параметр isActive для кнопки в меню є активним */
  ${({ isActive }) => {
    // вказуємо, що якщо параметр isActive працює
    if (isActive === true) {
      // тоді повертаємо новий css код
      return css`
        /* який змінює колір для елемент "Текст" */
        ${Text} {
          color: #037ee5;
        }
        /* та який змінює колір для картинки елемента "Іконка" */
        ${Icon} > svg {
          fill: #037ee5;
        }
      `;
    }
  }}
`;
