import React from "react";

import ProgressLine from "@/components/common/ProgressLine/ProgressLine";

const AppProgressLine = () => {
  const progress = [
    { path: "/cart", name: "Корзина" },
    { path: "/order", name: "Оформление заказа" },
    { path: "/confirm", name: "Заказ принят" },
  ];

  return <ProgressLine progress={progress} />;
};

export default AppProgressLine;
