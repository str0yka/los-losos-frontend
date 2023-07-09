import React from "react";

import CountButton from "@/app/components/CountButton/CountButton";
import styles from "./ProductItemLarge.module.scss";

const ProductItemLarge = () => {
  const { product, count } = {
    product: {
      id: 3,
      title: "Пельмени",
      img: "e911fc54-843f-4c34-87cb-2b0e58c352ea.jpg",
      foods: "тесто, говядина, сметана",
      price: 130,
      weight: 220,
      categoryId: 1,
    },
    count: 3,
  };

  return (
    <article className={styles.product}>
      <div className={styles.image}>
        <img src="" alt="" />
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
          <CountButton count={count} />
        </div>
      </div>
    </article>
  );
};

export default ProductItemLarge;
