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

// Елемент "Вікно" надає стилізацію для вікна, в якому генерується інтерфейс
const Window = styled.div`
  background-color: #151515;
`;

// Елемент "Відображення" надає формат відображення інтерфейсу
const View = styled.div`
  max-width: 620px;
  background-color: #efeff4;
  margin: 0 auto;
  min-height: 100vh;
  display: grid;
  grid-template-rows: 80px 1fr 90px;
`;
