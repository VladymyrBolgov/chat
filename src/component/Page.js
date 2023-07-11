import styled from "styled-components";

// Створюємо компонент "Сторінка", який відповідає за оболонку сторінки
export default function Page({ children }) {
  return (
    <Window>
      {/* children - це змінна, яка виводить все, що ми поклали всередину компонента */}
      {/* В цьому випадку ми виводимо саме наш інтерфейс сторінки, попередньо обгорнувши потрібними елементами */}
      <View>{children}</View>
    </Window>
  );
}

const Window = styled.div`
  /* Робимо фон вікна */
  background-color: #151515;
`;

// Елемент "Відображення" надає формат відображення інтерфейсу
const View = styled.div`
  /* Робимо максимальну ширину інтерфейсу додатка */
  max-width: 620px;
  /* Задаємо колір фону */
  background-color: #efeff4;
  /* Робимо, щоб інтерфейс ставав по центру, якщо ширина екрана більша, ніж ширина інтерфейсу */
  margin: 0 auto;
  /* Задаємо мінімальну висоту інтерфейсу таку саму як висота екрана */
  min-height: 100vh;
  /* Включаємо режим верстки, задаємо потрібну структуру сторінки */
  display: grid;
  grid-template-rows: 80px 1fr 90px;
`;
