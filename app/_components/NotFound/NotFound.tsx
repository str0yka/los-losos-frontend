import React from "react";

import Button from "@/components/common/Button/Button";

import s from "./NotFound.module.scss";

const EmptyCart = () => {
  return (
    <section className={s.page}>
      <div className={s.info}>
        <span className={s.emoji}>🧐</span>
        <h1 className={s.title}>Ой, а где это мы?</h1>
        <p className={s.subtitle}>Такой страницы не существует.</p>
      </div>
      <Button
        className={s.button}
        variant="contained"
        size="large"
        textVariant="capitalize-first-latter"
        href="/"
      >
        Перейти в меню
      </Button>
    </section>
  );
};

export default EmptyCart;
