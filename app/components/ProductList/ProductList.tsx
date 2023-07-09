import React from "react";
import ProductItemLarge from "@/app/components/ProductItemLarge/ProductItemLarge";
import styles from "./ProductsList.module.scss";

const ProductList = () => {
  return (
    <section className={styles.list}>
      <ProductItemLarge />
      <ProductItemLarge />
      <ProductItemLarge />
    </section>
  );
};

export default ProductList;
