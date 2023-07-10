import React from "react";
import styled, { css } from "styled-components";

// Генеруємо компонент "Список чатів"
export default function ChatList({ list }) {
  return <List>{list.map(ChatItem)}</List>;
}

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px; /* Відступи між повідомленнями */
  padding: 30px 15px; 
`;

// Генеруємо компонент "Один Чат", в якому ми отримуємо дані одного чату та виводимо їх
function ChatItem({ message, isMe, time, id }) {
  return (
    <React.Fragment key={id}>
      <Item>
        <Message>{message}</Message>
        <Time>{time}</Time>
      </Item>
    </React.Fragment>
  );
}

// ======================================

const Message = styled.div`
  font-size: 16px; 
  color: #111; 
`;
// Елемент "Час", який відповідає за відображення даних про час повідомлення
const Time = styled.div`
  font-size: 14px; 
  color: #8e8e93; 
`;

// ======================================

// Елемент "Одне повідомлення", який відповідає за відображення карточки одного повідомлення
const Item = styled.div`
  background-color: #fff;
  padding: 15px 20px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;