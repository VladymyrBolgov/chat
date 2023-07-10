import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Settings from "./page/Settings";
import Chats from "./page/Chats";
import Dialog from "./page/Dialog";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Підключаємо сторінку Чати за посиланням /chats */}
        <Route path="/chats" element={<Chats />} />

        {/* Підключаємо сторінку Налаштування за посиланням /settings */}
        <Route path="/settings" element={<Settings />} />

        {/* Підключаємо сторінку Діалог за посиланням /dialog */}
        <Route path="/dialog" element={<Dialog />} />

        {/* Якщо користувач заходить на головну сторінку, то його переводять на сторінку /chats */}
        <Route path="/" element={<Navigate to="/chats" />} />
      </Routes>
    </BrowserRouter>
  );
}
