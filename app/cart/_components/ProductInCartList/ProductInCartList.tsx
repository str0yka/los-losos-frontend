"use client";

import { useSelector } from "react-redux";

import { RootState } from "@/store/store";
import ProductItem from "@/app/_components/ProductItem/ProductItem";

import s from "./ProductInCartList.module.scss";

const ProductInCartList = () => {
  const productsInCart = useSelector((state: RootState) => state.cart.data);

  return (
    <section className={s.list}>
      {productsInCart.map(({ product }) => (
        <ProductItem
          key={product.id}
          product={product}
          size="medium"
          removeButton
        />
      ))}
    </section>
  );
};

export default ProductInCartList;
