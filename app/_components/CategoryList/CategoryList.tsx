import React from "react";

import { CategoryItem, Product } from "@/app/index";
import ProductItemLarge from "@/app/_components/ProductItemLarge/ProductItemLarge";

import styles from "./CategoryList.module.scss";

interface CategoryListProps {
  category: CategoryItem;
}

const CategoryList: React.FC<CategoryListProps> = ({ category }) => {
  return (
    <section className={styles.category}>
      <h2 className={styles.title}>{category.title}</h2>
      <div className={styles.list}>
        {category.products.map((product: Product) => (
          <ProductItemLarge key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default CategoryList;
