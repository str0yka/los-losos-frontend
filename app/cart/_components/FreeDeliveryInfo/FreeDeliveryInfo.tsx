"use client";

import React from "react";

import Button from "@/components/common/Button/Button";
import { useTotalPrice } from "@/hooks/useTotalPrice";
import { PRICE_FOR_FREE_DELIVERY } from "@/utils";

const FreeDeliveryInfo = () => {
  const { totalPrice } = useTotalPrice();
  const amountToFreeShipping = PRICE_FOR_FREE_DELIVERY - totalPrice;

  return (
    <Button
      size="large"
      variant="contained"
      hover={false}
      textVariant="capitalize-first-latter"
    >
      {amountToFreeShipping > 0
        ? `До бесплатной доставки не хватает ${amountToFreeShipping} рублей`
        : "Ура! Бесплатная доставка 🥳"}
    </Button>
  );
};

export default FreeDeliveryInfo;
