import { useSelector } from "react-redux";

import { RootState } from "@/store/store";

export const useTotalCount = () => {
  const totalCount = useSelector((state: RootState) =>
    state.cart.data.reduce((accum, { count }) => (accum += count), 0)
  );

  return totalCount;
};
