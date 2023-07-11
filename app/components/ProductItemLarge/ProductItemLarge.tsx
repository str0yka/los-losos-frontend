import React from "react";

import CountButton from "@/app/components/UI/CountButton/CountButton";
import styles from "./ProductItemLarge.module.scss";
import * as process from "process";
import { Product } from "@/store/slices/cartSlices";
import { API_URL } from "@/utils/consts";

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
