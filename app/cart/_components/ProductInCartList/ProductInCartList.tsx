"use client";

import { useSelector } from "react-redux";

import ProductItem from "@/app/_components/ProductItem/ProductItem";
import Skeleton from "@/components/common/Skeleton/Skeleton";
import { RootState } from "@/store/store";

import s from "./ProductInCartList.module.scss";

const ProductInCartList = () => {
  const { status, data } = useSelector((state: RootState) => state.cart);

  return (
    <section className={s.list}>
      {status === "loading/all" && <Skeleton />}
      {data.map(({ product }) => (
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
