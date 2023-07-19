"use client";

import React from "react";

import ProgressLineButton from "@/app/components/ProgressLine/ProgressLineButton/ProgressLineButton";
import { useProgressLineButtons } from "@/app/components/ProgressLine/ProgressLineButton/hooks/useProgressLineButtons";

import s from "./ProgressLine.module.scss";

const ProgressLine = () => {
  const progressButtons = useProgressLineButtons([
    { path: "/cart", name: "Корзина" },
    { path: "/order", name: "Оформление заказа" },
    { path: "/confirm", name: "Заказ принят" },
  ]);

  return (
    <div className={s.header}>
      {progressButtons?.map(({ path, name, currentOrPrevious }, index) => (
        <React.Fragment key={path}>
          {!!index && <div className={s.progressLine}></div>}
          <ProgressLineButton
            path={path}
            name={name}
            currentOrPrevious={currentOrPrevious}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProgressLine;
