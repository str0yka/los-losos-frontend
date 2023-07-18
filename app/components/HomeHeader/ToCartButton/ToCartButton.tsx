"use client";

import Button from "@/app/components/common/Button/Button";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

const ToCartButton = () => {
  const totalCount = useSelector((state: RootState) =>
    state.cart.data.reduce((accum, curr) => (accum += curr.count), 0)
  );

  return (
    <Button rounded variant="contained" href="/cart">
      {!!totalCount ? `Корзина | ${totalCount}` : `Корзина`}
    </Button>
  );
};

export default ToCartButton;
