"use client";

import React from "react";
import { useSelector } from "react-redux";

import Promocode from "./_components/Promocode/Promocode";
import Button from "@/components/common/Button/Button";
import ProductInCartList from "@/app/cart/_components/ProductInCartList/ProductInCartList";
import EmptyCart from "@/app/cart/_components/EmptyCart/EmptyCart";
import { useTotalPrice } from "@/hooks/useTotalPrice";
import { RootState } from "@/store/store";

import s from "./page.module.scss";

const Cart = () => {
  const { totalPriceWithDiscount, isDeliveryFree, priceToFreeDelivery } =
    useTotalPrice();
  const { status, data } = useSelector((state: RootState) => state.cart);

  // if (status === "loading/all") return <Loading />;
  if (!data.length && status !== "loading/all") return <EmptyCart />;

  return (
    <section className={s.cart}>
      <Button
        size="large"
        variant="contained"
        href="/" // TODO: в будущем ссылка на "/about/delivery"
        textVariant="capitalize-first-latter"
        loading={{ status: status === "loading/all", className: s.loading }}
      >
        {isDeliveryFree && "Ура! Бесплатная доставка 🥳"}
        {!isDeliveryFree &&
          `До бесплатной доставки не хватает ${priceToFreeDelivery} рублей`}
      </Button>
      <ProductInCartList />
      <Promocode />
      <div className={s.totalPriceBlock}>
        <span>Сумма заказа</span>
        <div className={s.line}></div>
        <span>{totalPriceWithDiscount} руб.</span>
      </div>
      <Button
        className={s.confirmButton}
        variant="contained"
        size="large"
        textVariant="capitalize-first-latter"
        href="/order"
      >
        Оформить
        <svg
          width="12"
          height="9"
          viewBox="0 0 12 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.991455 4C0.715313 4 0.491455 4.22386 0.491455 4.5C0.491455 4.77614 0.715313 5 0.991455 5V4ZM11.345 4.85355C11.5403 4.65829 11.5403 4.34171 11.345 4.14645L8.16303 0.964466C7.96777 0.769204 7.65118 0.769204 7.45592 0.964466C7.26066 1.15973 7.26066 1.47631 7.45592 1.67157L10.2843 4.5L7.45592 7.32843C7.26066 7.52369 7.26066 7.84027 7.45592 8.03553C7.65118 8.2308 7.96777 8.2308 8.16303 8.03553L11.345 4.85355ZM0.991455 5H10.9915V4H0.991455V5Z"
            fill="black"
          />
        </svg>
      </Button>
    </section>
  );
};

export default Cart;
