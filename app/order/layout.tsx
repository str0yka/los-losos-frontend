import React from "react";

import { Metadata } from "next";

import Container from "@/components/common/Container/Container";
import AppProgressLine from "@/components/AppProgressLine/AppProgressLine";
import TitleBlock from "@/components/TitleBlock/TitleBlock";

export const metadata: Metadata = {
  title: "Оформление заказа | Лось-Лосось",
};

interface OrderLayoutProps {
  children: React.ReactNode;
}

const OrderLayout: React.FC<OrderLayoutProps> = ({ children }) => {
  return (
    <>
      <AppProgressLine />
      <Container width="medium">
        <TitleBlock title="Оформление заказа" backTo="/cart" />
        {children}
      </Container>
    </>
  );
};

export default OrderLayout;
