"use client";

import React from "react";
import { useSelector } from "react-redux";

import Skeleton from "@/components/common/Skeleton/Skeleton";
import { useTotalPrice } from "@/hooks/useTotalPrice";
import { DELIVERY_PRICE, PRICE_FOR_FREE_DELIVERY } from "@/utils";
import { RootState } from "@/store/store";

import s from "./Check.module.scss";

const Check = () => {
  const { data, status } = useSelector((state: RootState) => state.cart);
  const promocode = useSelector(
    (state: RootState) => state.promocode.promocode
  );
  const { promocodeDiscount, totalPrice, totalPriceWithDelivery } =
    useTotalPrice();
  const isDeliveryFree = totalPrice > PRICE_FOR_FREE_DELIVERY;

  if (status === "loading/all") return <Skeleton className={s.skeleton} />;

  return (
    <section className={s.check}>
      <h5 className={s.title}>Состав заказа</h5>
      <ul className={s.list}>
        {data.map(({ product, count }) => (
          <li key={product.id} className={s.item}>
            <div className={s.itemInfo}>
              <h6 className={s.itemTitle}>{product.title}</h6>
              <div className={s.itemDescription}>
                <span>{product.weight} г</span>
                <span>{count}x</span>
              </div>
            </div>
            <div className={s.line}></div>
            <span className={s.itemPrice}>{product.price * count} Р</span>
          </li>
        ))}
      </ul>
      <ul className={s.list}>
        {promocode && (
          <li className={s.item}>
            <h6 className={s.itemTitle}>{promocode.code}</h6>
            <div className={s.line}></div>
            <span className={s.itemPrice}>-{promocodeDiscount} Р</span>
          </li>
        )}
        <li className={s.item}>
          <h6 className={s.itemTitle}>Доставка</h6>
          <div className={s.line}></div>
          <span className={s.itemPrice}>
            {isDeliveryFree ? "бесплатно" : `${DELIVERY_PRICE} Р`}
          </span>
        </li>
      </ul>
      <div className={s.totalPriceBlock}>
        <h6 className={s.totalPriceTitle}>Сумма</h6>
        <div className={s.line}></div>
        <span className={s.totalPrice}>{totalPriceWithDelivery} Р</span>
      </div>
    </section>
  );
};

export default Check;
