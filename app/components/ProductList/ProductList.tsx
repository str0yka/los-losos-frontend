import React from "react";
import ProductItemLarge from "@/app/components/ProductItemLarge/ProductItemLarge";
import styles from "./ProductsList.module.scss";
import * as process from "process";
import { Product } from "@/store/slices/cartSlices";
import { API_URL } from "@/utils/consts";

const getProducts = async () => {
  const response = await fetch(`${API_URL}/product`, {
    method: "GET",
    next: {
      revalidate: 60,
    },
  });
  return response.json();
};

const ProductList = async () => {
  const products: Product[] | unknown = await getProducts();
  if (!Array.isArray(products)) return <h1>ERROR</h1>;

  return (
    <section className={styles.list}>
      {products.map((product) => (
        <ProductItemLarge key={product.id} product={product} />
      ))}
    </section>
  );
};

export default ProductList;
