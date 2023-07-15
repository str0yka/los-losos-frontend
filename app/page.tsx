import CategoryList from "@/app/components/CategoryList/CategoryList";
import React from "react";
import { API_URL } from "@/utils/consts";
import MainPageHeader from "@/app/components/MainPageHeader/MainPageHeader";
import { CategoryItem } from "@/app/index";

export const metadata = {
  title: "Redux Toolkit",
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
