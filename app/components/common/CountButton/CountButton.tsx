"use client";

import * as React from "react";
import classes from "./CountButton.module.scss";

import { useHandleCart } from "./hooks/useHandleCart";

interface CountButtonProps {
  id: number;
}

const CountButton: React.FC<CountButtonProps> = ({ id }) => {
  const { count, addToCart, deleteFromCart, isLoading } = useHandleCart(id);

  return (
    <div
      className={`${classes.CountButton} 
      ${count > 0 ? classes.Active : ""} 
      ${isLoading && classes.disabled}`}
      onClick={() => count <= 0 && addToCart()}
    >
      <div className="count countMinus" onClick={deleteFromCart}></div>
      <div
        className="count countValue"
        onClick={(event) => event.stopPropagation()}
      >
        {count}
      </div>
      <div className="count countPlus" onClick={addToCart}></div>
    </div>
  );
};

export default CountButton;
