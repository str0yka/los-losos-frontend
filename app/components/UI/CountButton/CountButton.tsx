"use client";

import classes from "./CountButton.module.scss";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { fetchAddToCart, fetchDeleteFromCart } from "@/store/slices/cartSlices";

interface CountButtonProps {
  id: number;
}

const CountButton: React.FC<CountButtonProps> = ({ id }) => {
  const dispatch = useDispatch<AppDispatch>();
  const product = useSelector((state: RootState) => {
    return state.cart.data.find(({ product }) => product?.id === id);
  });
  const isLoading =
    useSelector((state: RootState) => state.cart.status) === "loading";

  const count = product?.count || 0;

  const onAddToCart = () => {
    try {
      dispatch(fetchAddToCart(id));
    } catch (err) {
      console.log("err");
      alert("Упс! Что-то пошло не так");
    }
  };

  const onDeleteFromCart = () => {
    try {
      dispatch(fetchDeleteFromCart(id));
    } catch (err) {
      console.log(err);
      alert("Упс! Что-то пошло не так");
    }
  };

  console.log(product);

  return (
    <div
      className={`${classes.CountButton} ${count > 0 ? classes.Active : ""} ${
        isLoading && classes.disabled
      }`}
      onClick={() => (count <= 0 ? onAddToCart() : null)}
    >
      <div className="count countMinus" onClick={onDeleteFromCart}></div>
      <div
        className="count countValue"
        onClick={(event) => event.stopPropagation()}
      >
        {count}
      </div>
      <div className="count countPlus" onClick={onAddToCart}></div>
    </div>
  );
};

export default CountButton;
