import { useState } from "react";

export const useCount: (
  initialValue: number,
  callback: () => void
) => Array<any> = (initialValue, callback) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount((prev) => prev + 1);
    callback();
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
    callback();
  };

  return [count, increment, decrement];
};
