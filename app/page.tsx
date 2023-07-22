import React from "react";
import { Metadata } from "next";

import Container from "@/components/common/Container/Container";
import HomeHeader from "@/app/_components/HomeHeader/HomeHeader";
import CategoryList from "@/app/_components/CategoryList/CategoryList";

import { API_URL } from "@/utils/consts";

import { CategoryItem } from "@/app/index";
import { appFetch } from "@/http";

export const metadata: Metadata = {
  title: "Доставка | Лось-Лосось",
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
      <HomeHeader categories={categories} />
      <Container>
        {categories.map((category) => (
          <CategoryList key={category.title} category={category} />
        ))}
      </Container>
    </>
  );
};

export default IndexPage;
