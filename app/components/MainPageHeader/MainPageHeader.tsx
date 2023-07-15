"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

import { CategoryItem } from "@/app/index";
import RoundedButton from "@/app/components/UI/RoundedButton/RoundedButton";

import styles from "./MainPageHeader.module.scss";

interface MainPageHeaderProps {
  categories: CategoryItem[];
}

const MainPageHeader: React.FC<MainPageHeaderProps> = ({ categories }) => {
  const session = useSession();

  if (session.data) {
    localStorage.removeItem("CART_TOKEN");
  }

  const list = useRef<null | HTMLUListElement>(null);

  useEffect(() => {
    let isDraggable = false;
    let dragStartPosition = 0;
    let dragEndPosition = 0;
    let percentOfScrollWidth = list.current
      ? list.current.scrollWidth / window.innerWidth
      : 1;

    const onDragStart = (event: globalThis.MouseEvent) => {
      isDraggable = true;
      dragStartPosition = event.clientX * percentOfScrollWidth;
    };

    const onDragEnd = () => {
      if (!list.current) return;
      isDraggable = false;
      dragEndPosition = list.current?.scrollLeft;
    };

    const onDrag = (event: globalThis.MouseEvent) => {
      if (!list.current || !isDraggable) return;

      list.current.scrollLeft =
        dragEndPosition +
        dragStartPosition -
        event.clientX * percentOfScrollWidth;
    };

    list.current?.addEventListener("mousedown", onDragStart);
    window.addEventListener("mouseup", onDragEnd);
    window.addEventListener("mousemove", onDrag);

    return () => {
      list.current?.removeEventListener("mousedown", onDragStart);
      window.removeEventListener("mouseup", onDragEnd);
      window.removeEventListener("mousemove", onDrag);
    };
  }, []);

  return (
    <div className={styles.header}>
      <ul ref={list} className={styles.categoryList}>
        <li className={styles.categoryItem}>Горячие блюда</li>
      </ul>
      <div className={styles.info}>
        <Link href="/">Доставка и оплата</Link>
        <RoundedButton fillColor>Корзина</RoundedButton>
      </div>
    </div>
  );
};

export default MainPageHeader;
