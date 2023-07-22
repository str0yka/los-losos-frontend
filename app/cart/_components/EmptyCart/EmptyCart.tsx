import React from "react";

import Button from "@/components/common/Button/Button";
import { PRICE_FOR_FREE_DELIVERY } from "@/utils";

import s from "./EmptyCart.module.scss";

const EmptyCart = () => {
  return (
    <section className={s.page}>
      <div className={s.info}>
        <span className={s.emoji}>😞</span>
        <h1 className={s.title}>Тут же пусто!</h1>
        <p className={s.subtitle}>Добавьте что-нибудь в меню.</p>
        <p className={s.subtitle}>
          Бесплатная доставка начинает от {PRICE_FOR_FREE_DELIVERY} рублей.
        </p>
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
