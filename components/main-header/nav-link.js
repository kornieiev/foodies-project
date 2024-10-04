"use client"; // указывает обрабатывать этот компонент на стороне клиента

import { usePathname } from "next/navigation"; // для получения активного адреса навигации
import Link from "next/link"; // для работы со ссылками

import css from "./nav-link.module.css";

export default function NavLink({ href, children }) {
  const path = usePathname(); // получаем активное значение навигации

  return (
    <Link
      href={href} // сюда передаем пропсом линк для навигации при нажатии на эту ссылку
      className={href === path ? `${css.active} ${css.link}` : css.link} // если href === path - тогда применяем нужные стили
    >
      {children}
      {/* в children приходит наименование для ссылки */}
    </Link>
  );
}
