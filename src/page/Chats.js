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
import NikaPhoto from "../file/photo/nika.png";
import DadPhoto from "../file/photo/dad-ivan.png";
import MotherPhoto from "../file/photo/mother-nata.png";
import SisterPhoto from "../file/photo/emily-mary.png";

// ============================================
// Генеруємо константи, в яких тримаємо дані про список чатів

const CHATS_LIST = [
  {
    id: 1,
    photo: CatPhoto,
    name: "Про котів",
    message: "Я люблю пити молоко",
    isRead: true,
    time: "10:34"
  },
  {
    id: 2,
    photo: DimaPhoto,
    name: "Діма",
    message: "Привіт. Як справи?",
    isUnread: true,
    time: "09:21"
  },
  {
    id: 3,
    photo: AnnPhoto,
    name: "Дружина",
    message: "Ти купив хліб?",
    messageAmount: 10,
    time: "08:46"
  },
  {
    id: 4,
    photo: FamilyPhoto,
    name: "Чат родини",
    message: "Хто вже вдома?",
    messageAmount: 23,
    notifyOff: true,
    time: "07:54",
    user: "Мама",
    hashtag: "#family"
  },
  {
    id: 5,
    photo: NikaPhoto,
    name: "Ніка",
    message: "Привет",
    messageAmount: 9,
    time: "07:46"
  },
  {
    id: 6,
    photo: DadPhoto,
    name: "Иван",
    message: "Привет внучата",
    messageAmount: 8,
    time: "07:36"
  },
  {
    id: 7,
    photo: MotherPhoto,
    name: "Наташа",
    message: "Доброе утро",
    messageAmount: 5,
    time: "07:26"
  },
  {
    id: 8,
    photo: SisterPhoto,
    name: "Emily-Mary",
    message: "Есть хотим",
    messageAmount: 3,
    time: "07:06"
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