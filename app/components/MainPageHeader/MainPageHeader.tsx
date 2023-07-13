"use client";

import React, { ReactDOM, useEffect, useRef } from "react";
import { CategoryItem } from "@/app/page";
import styles from "./MainPageHeader.module.scss";
import RoundedButton from "@/app/components/UI/RoundedButton/RoundedButton";
import Link from "next/link";
import { is } from "immutable";

interface MainPageHeaderProps {
  categories: CategoryItem[];
}

const MainPageHeader: React.FC<MainPageHeaderProps> = ({ categories }) => {
  const list = useRef<null | HTMLUListElement>(null);

  useEffect(() => {
    let isDraggable = false;
    let scrollStart = 0;
    let scrollEnd = 0;
    let percent = list.current
      ? list.current.scrollWidth / window.innerWidth
      : 1;

    list.current?.addEventListener("mousedown", (event) => {
      if (!list.current) return;

      isDraggable = true;
      scrollStart = event.clientX * percent;
    });

    window.addEventListener("mouseup", (event) => {
      if (!list.current) return;
      isDraggable = false;
      scrollEnd = list.current?.scrollLeft;
    });

    window.addEventListener("mousemove", (event) => {
      if (!list.current || !isDraggable) return;

      list.current.scrollLeft =
        scrollEnd + scrollStart - event.clientX * percent;
    });
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
