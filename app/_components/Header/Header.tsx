import React from "react";
import Link from "next/link";

import Container from "@/components/common/Container/Container";
import BurgerMenu from "@/components/common/BurgerMenu/BurgerMenu";
import Button from "@/components/common/Button/Button";

import s from "./Header.module.scss";

const Header = () => {
  return (
    <Container>
      <header className={s.header}>
        <div className={s.leftSide}>
          <Link href="/">
            <img src="/images/logo.png" alt="" className={s.logo} />
          </Link>
          <div className={s.contact}>
            <p>Связаться с нами</p>
            <a href="tel:78005553535">+7 800 555 35 35</a>
          </div>
        </div>
        <div className={s.rightSide}>
          <Button className={s.button} rounded>
            профиль
          </Button>
          <Button className={s.contactButton} rounded variant="contained">
            позвони нам
          </Button>
          <BurgerMenu />
        </div>
      </header>
    </Container>
  );
};

export default Header;
