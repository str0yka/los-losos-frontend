"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";

import Button from "@/app/components/UI/Button/Button";
import { CategoryItem } from "@/app/index";

import s from "./MainPageHeader.module.scss";
import Container from "../Container/Container";

interface MainPageHeaderProps {
  categories: CategoryItem[];
}

const MainPageHeader: React.FC<MainPageHeaderProps> = ({ categories }) => {
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
    <div className={s.headerWrapper}>
      <Container>
        <div className={s.header}>
          <ul ref={list} className={s.categoryList}>
            {categories.map((category) => (
              <li className={s.categoryItem}>{category.title}</li>
            ))}
          </ul>
          <div className={s.info}>
            <Link href="/">Доставка и оплата</Link>
            <Button rounded variant="contained">
              Корзина
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MainPageHeader;
