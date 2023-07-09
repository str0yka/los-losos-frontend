"use client";

import classes from "./CountButton.module.scss";
import * as React from "react";
import { useCount } from "../../hooks/useCount";

interface CountButtonProps {
  count: number;
}

const CountButton: React.FC<CountButtonProps> = ({ count }) => {
  const [value, increment, decrement] = useCount(count, () => {});

  return (
    <div
      className={`${classes.CountButton} ${value > 0 ? classes.Active : ""}`}
      onClick={value <= 0 ? increment : null}
    >
      <div className="count countMinus" onClick={decrement}></div>
      <div
        className="count countValue"
        onClick={(event) => event.stopPropagation()}
      >
        {value}
      </div>
      <div className="count countPlus" onClick={increment}></div>
    </div>
  );
};

export default CountButton;
