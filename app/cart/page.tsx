import { Metadata } from "next";

import Container from "@/app/components/Container/Container";
import ArrowButton from "@/app/components/common/ArrowButton/ArrowButton";
import ProgressLine from "@/app/components/ProgressLine/ProgressLine";

export const metadata: Metadata = {
  title: "Корзина | Лось-Лосось",
};

const Cart = () => {
  return (
    <Container>
      <ProgressLine />
      <ArrowButton direction="left" href="/" />
      <h1>Корзина</h1>
    </Container>
  );
};

export default Cart;
