import React from "react";
import classNames from "classnames";

import CountButton from "@/components/common/CountButton/CountButton";
import DeleteFromCartButton from "@/components/DeleteFromCartButton/DeleteFromCartButton";
import { API_URL } from "@/utils";
import { Product } from "@/app";

import s from "./ProductItem.module.scss";

interface ProductItemProps {
  product: Product;
  size: "small" | "medium" | "large";
  removeButton?: boolean;
}

const ProductItem: React.FC<ProductItemProps> = ({
  product,
  size,
  removeButton = false,
}) => {
  const productClassName = classNames({
    [s.product]: true,
    [s.small]: size === "small",
    [s.medium]: size === "medium",
    [s.large]: size === "large",
  });

  return (
    <article className={productClassName}>
      <div className={s.image}>
        <img src={`${API_URL}/../${product.img}`} alt="" />
      </div>
      <div className={s.nonImage}>
        <div className={s.info}>
          <h3 className={s.title}>
            {product.title} <span>{product.weight} г.</span>
          </h3>
          <p className={s.foods}>{product.foods}</p>
        </div>
        <div className={s.priceBlock}>
          <span className={s.price}>{product.price} Р</span>
          <CountButton id={product.id} />
          {removeButton && (
            <DeleteFromCartButton className={s.delete} id={product.id} />
          )}
        </div>
      </div>
    </article>
  );
};

export default ProductItem;
