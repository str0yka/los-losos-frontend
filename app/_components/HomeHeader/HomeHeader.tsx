"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";

import Container from "@/components/common/Container/Container";
import { useSlider } from "./hooks/useSlider";
import { CategoryItem } from "@/app";

import s from "./HomeHeader.module.scss";
import ToCartButton from "./ToCartButton/ToCartButton";

interface MainPageHeaderProps {
  categories: CategoryItem[];
}

const MainPageHeader: React.FC<MainPageHeaderProps> = ({ categories }) => {
  const list = useSlider();
  const logo = useRef<null | HTMLImageElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (!list.current || !logo.current) return;

      if (list.current.getBoundingClientRect().top > 5) {
        logo.current.classList.remove(s.pinned);
      } else {
        logo.current.classList.add(s.pinned);
      }
    });
  }, []);

  return (
    <div className={s.headerWrapper}>
      <Container>
        <div className={s.header}>
          <Link
            href="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img ref={logo} className={s.logo} src="./images/mini-logo.png" />
          </Link>
          <ul ref={list} className={s.categoryList}>
            {categories.map((category) => (
              <li key={category.title} className={s.categoryItem}>
                {category.title}
              </li>
            ))}
          </ul>
          <div className={s.info}>
            <Link href="/">Доставка и оплата</Link>
            <ToCartButton />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MainPageHeader;
