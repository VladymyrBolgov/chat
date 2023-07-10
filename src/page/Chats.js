import React from "react";

// Імпортуємо компонент "Шапка"
import Header from "../component/Header";
// Імпортуємо компонент "Меню"
import Menu from "../component/Menu";
// Імпортуємо компонент "Сторінка"
import Page from "../component/Page";
// Імпортуємо компонент "Пусто"
import Empty from "../component/Empty";

// Генеруємо сторінку "Чати"

export default function Chats() {
    return (
      <Page>
        {/* В title передаємо текст заголовка сторінки */}
        <Header title="Чати" />
        <div>
          <Empty>Список чатів пустий</Empty>
        </div>
        {/* В activePage передаємо посилання поточної сторінки */}
        <Menu activePage="/chats" />
      </Page>
    );
  }