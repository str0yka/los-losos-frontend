import { useState } from "react";
import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "@/store/store";
import { fetchAddToCart, fetchDeleteFromCart } from "@/store/slices/cartSlices";

export const useHandleCart = (id: number) => {
  const [isLoading, setIsLoading] = useState(false);
  const { data } = useSession();
  const dispatch = useDispatch<AppDispatch>();
  const count: number = useSelector((state: RootState) => {
    const product = state.cart.data.find(({ product }) => product?.id === id);
    if (product) return product.count;
    return 0;
  });

  const handleCart = async (action: "add" | "delete") => {
    const accessToken =
      data?.user.accessToken || (localStorage.getItem("CART_TOKEN") as string);
    try {
      setIsLoading(true);
      const options = { id, accessToken };

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

  const addToCart = () => handleCart("add");
  const deleteFromCart = () => handleCart("delete");

  return { addToCart, deleteFromCart, count, isLoading };
};
