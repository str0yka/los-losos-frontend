import { Metadata } from "next";

import Container from "@/components/common/Container/Container";
import ProgressLine from "@/components/common/ProgressLine/ProgressLine";
import ArrowButton from "@/components/common/ArrowButton/ArrowButton";
import DeleteFromCartButton from "@/components/DeleteFromCartButton/DeleteFromCartButton";

import s from "@/app/cart/layout.module.scss";

export const metadata: Metadata = {
  title: "Корзина | Лось-Лосось",
};

interface CartLayoutProps {
  children: React.ReactNode;
}

const CartLayout: React.FC<CartLayoutProps> = ({ children }) => {
  return (
    <Container width="narrow">
      <ProgressLine />
      <div className={s.titleBlock}>
        <div className={s.title}>
          <ArrowButton direction="left" href="/" />
          <h1>Корзина</h1>
        </div>
        <DeleteFromCartButton />
      </div>
      {children}
    </Container>
  );
};

export default CartLayout;
