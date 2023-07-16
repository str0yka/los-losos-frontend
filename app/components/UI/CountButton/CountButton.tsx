"use client";

import classes from "./CountButton.module.scss";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { fetchAddToCart, fetchDeleteFromCart } from "@/store/slices/cartSlices";
import { ProductInCart } from "@/app";
import { useState } from "react";
import { useSession } from "next-auth/react";

interface CountButtonProps {
  id: number;
}

const CountButton: React.FC<CountButtonProps> = ({ id }) => {
  const { data } = useSession();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const productInCart: ProductInCart | undefined = useSelector(
    (state: RootState) => {
      return state.cart.data.find(({ product }) => product?.id === id);
    }
  );
  const count = productInCart?.count || 0;

  const handleCart = async (action: "add" | "delete") => {
    try {
      setIsLoading(true);

      const options = {
        id,
        accessToken:
          data?.user.accessToken ||
          (localStorage.getItem("CART_TOKEN") as string),
      };

      await dispatch(
        action === "add"
          ? fetchAddToCart(options)
          : fetchDeleteFromCart(options)
      );
    } catch (err) {
      console.log(err);
      alert("Упс! Что-то пошло не так");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`${classes.CountButton} 
      ${count > 0 ? classes.Active : ""} 
      ${isLoading && classes.disabled}`}
      onClick={() => (count <= 0 ? handleCart("add") : null)}
    >
      <div
        className="count countMinus"
        onClick={() => handleCart("delete")}
      ></div>
      <div
        className="count countValue"
        onClick={(event) => event.stopPropagation()}
      >
        {count}
      </div>
      <div className="count countPlus" onClick={() => handleCart("add")}></div>
    </div>
  );
};

export default CountButton;
