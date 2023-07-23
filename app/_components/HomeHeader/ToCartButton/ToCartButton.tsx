"use client";

import Button from "@/components/common/Button/Button";
import { useTotalCount } from "@/hooks/useTotalCount";

const ToCartButton = () => {
  const totalCount = useTotalCount();

  return (
    <Button rounded variant="contained" href="/cart">
      Корзина {!!totalCount && `| ${totalCount}`}
    </Button>
  );
};

export default ToCartButton;
