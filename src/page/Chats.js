import React from "react";

// Імпортуємо компонент "Шапка"
import Header from "../component/Header";
// Імпортуємо компонент "Меню"
import Menu from "../component/Menu";
// Імпортуємо компонент "Сторінка"
import Page from "../component/Page";
// Імпортуємо компонент "Пусто"
import Empty from "../component/Empty";

import ChatList from "../component/ChatList";

// ============================================
// Імпортуємо файли потрібних картинок

import CatPhoto from "../file/photo/cat.png";
import DimaPhoto from "../file/photo/dima.png";
import AnnPhoto from "../file/photo/ann.png";
import FamilyPhoto from "../file/photo/family-dog.png";

// ============================================
// Генеруємо константи, в яких тримаємо дані про список чатів

const CHATS_LIST = [
  {
    id: 1,
    photo: CatPhoto,
    name: "Про котів",
    message: "Я люблю пити молоко",
    isRead: true
  },
  {
    id: 2,
    photo: DimaPhoto,
    name: "Діма",
    message: "Привіт. Як справи?",
    isUnread: true
  },
  {
    id: 3,
    photo: AnnPhoto,
    name: "Дружина",
    message: "Ти купив хліб?"
  },
  {
    id: 4,
    photo: FamilyPhoto,
    name: "Чат родини",
    message: "Хто вже вдома?"
  },
];

// Генеруємо сторінку "Чати"

export default function Chats() {
    return (
      <Page>
        {/* В title передаємо текст заголовка сторінки */}
        <Header title="Чати" />
        <div>
          <ChatList list={CHATS_LIST} />
        </div>
        {/* В activePage передаємо посилання поточної сторінки */}
        <Menu activePage="/chats" />
      </Page>
    );
  }