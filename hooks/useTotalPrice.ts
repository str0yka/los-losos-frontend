import { useSelector } from "react-redux";

import { RootState } from "@/store/store";

export const useTotalPrice = () => {
  const totalPrice = useSelector((state: RootState) =>
    state.cart.data.reduce(
      (accum, { product: { price }, count }) => (accum += price * count),
      0
    )
  );

  return totalPrice;
};
