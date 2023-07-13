import React from "react";
import ProductItemLarge from "@/app/components/ProductItemLarge/ProductItemLarge";
import styles from "./CategoryList.module.scss";
import { CategoryItem } from "@/app/page";

interface CategoryListProps {
  category: CategoryItem;
}

const CategoryList: React.FC<CategoryListProps> = ({ category }) => {
  return (
    <section className={styles.category}>
      <h2 className={styles.title}>{category.title}</h2>
      <section className={styles.list}>
        {category.product.map((product: any) => (
          <ProductItemLarge key={product.id} product={product} />
        ))}
      </section>
    </section>
  );
};

export default CategoryList;
