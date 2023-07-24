import Check from "@/app/order/_components/Check/Check";

import s from "./page.module.scss";
import Skeleton from "@/components/common/Skeleton/Skeleton";

const Order = () => {
  return (
    <div className={s.page}>
      <div>
        <Skeleton />
      </div>
      <Check />
    </div>
  );
};

export default Order;
