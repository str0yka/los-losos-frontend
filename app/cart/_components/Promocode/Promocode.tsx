import Button from "@/components/common/Button/Button";
import Input from "@/components/common/Input/Input";

import s from "./Promocode.module.scss";

const Promocode = () => {
  return (
    <div className={s.promocode}>
      <h4 className={s.title}>Промокод</h4>
      <div className={s.promocodeAction}>
        <Input placeholder="Введите ваш промокод..." />
        <Button variant="contained">Применить</Button>
      </div>
    </div>
  );
};

export default Promocode;
