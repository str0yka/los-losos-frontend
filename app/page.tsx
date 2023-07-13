import CategoryList from "@/app/components/CategoryList/CategoryList";
import React from "react";
import { API_URL } from "@/utils/consts";
import { Product } from "@/store/slices/cartSlices";
import MainPageHeader from "@/app/components/MainPageHeader/MainPageHeader";

export const metadata = {
  title: "Redux Toolkit",
};

export type CategoryItem = {
  title: string;
  product: Product[];
};

const getCategories = async () => {
  const response = await fetch(`${API_URL}/product`, {
    method: "GET",
    next: {
      revalidate: 60,
    },
  });
  return response.json();
};

const IndexPage = async () => {
  const categories: CategoryItem[] | unknown = await getCategories();

  if (!Array.isArray(categories)) return <h1>error</h1>;

  return (
    <>
      <MainPageHeader categories={categories} />
      {categories.map((category) => (
        <CategoryList key={category.title} category={category} />
      ))}
    </>
  );
};

export default IndexPage;
