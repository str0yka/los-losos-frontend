import ProductList from "@/app/components/ProductList/ProductList";
import SquareButton from "@/app/components/UI/SquareButton/SquareButton";
import React from "react";

export const metadata = {
  title: "Redux Toolkit",
};

const IndexPage = () => {
  return (
    <>
      <ProductList />
      <SquareButton>позвонить нам</SquareButton>
    </>
  );
};

export default IndexPage;
