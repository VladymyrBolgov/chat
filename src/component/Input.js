import React from "react";
import styled from "styled-components";

// Створюємо компонент "Поле вводу тексту"
export default function Input({ value, onChange, placeholder }) {
  // Ця функція допомагає нам витягнути актуальне значення тексту в полі вводу та зберегти його
  const handleChange = (e) => onChange(e.target.value);

  // Тут ми викликаємо return, повертаємо елемент "Поле вводу"
  // яке базується на HTML тегу <input>, який підтримує параметри
  // value - поточне значення тексту всередині поля вводу
  // onChange - цей параметр приймає функцію, яка викликається, коли юзер вводить новий текст в поле
  // placeholder - це допоміжний текст, який видно, коли в поле юзер ще нічого не ввів
  return (
    <InputTag value={value} onChange={handleChange} placeholder={placeholder} />
  );
}

// Створюємо елемент "Поле вводу"
const InputTag = styled.input`
  box-shadow: none;
  box-sizing: border-box;
  width: 100%;
  border-radius: 30px;
  border: 1px #d1d1d6 solid;
  padding: 0 15px;
  font-size: 14px;
`;