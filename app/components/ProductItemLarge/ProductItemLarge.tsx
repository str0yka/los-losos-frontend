import React from "react";

import CountButton from "@/app/components/common/CountButton/CountButton";

import { API_URL } from "@/utils/consts";

import { Product } from "@/app";

import styles from "./ProductItemLarge.module.scss";

interface ProductItemLargerInterface {
  product: Product;
}

const ProductItemLarge: React.FC<ProductItemLargerInterface> = ({
  product,
}) => {
  return (
    <article className={styles.product}>
      <div className={styles.image}>
        <img src={`${API_URL}/../${product.img}`} alt="" />
      </div>
      <div className={styles.nonImage}>
        <div className={styles.info}>
          <h3 className={styles.title}>
            {product.title} <span>{product.weight} г.</span>
          </h3>
          <p className={styles.foods}>{product.foods}</p>
        </div>
        <div className={styles.priceBlock}>
          <span className={styles.price}>{`${product.price} руб.`}</span>
          <CountButton id={product.id} />
        </div>
      </div>
    </article>
  );
};

export default ProductItemLarge;
