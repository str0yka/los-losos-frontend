import React from "react";
import Link from "next/link";

import BurgerMenu from "@/app/components/BurgerMenu/BurgerMenu";
import RoundedButton from "@/app/components/UI/RoundedButton/RoundedButton";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.leftSide}>
        <Link href="/">
          <img src="/images/logo.png" alt="" className={styles.logo} />
        </Link>
        <div className={styles.contact}>
          <p>Связаться с нами</p>
          <a href="tel:78005553535">+7 800 555 35 35</a>
        </div>
      </div>
      <div className={styles.rightSide}>
        <RoundedButton className={styles.button}>профиль</RoundedButton>
        <RoundedButton className={styles.contactButton} fillColor>
          позвони нам
        </RoundedButton>
        <BurgerMenu />
      </div>
    </header>
  );
};

export default Header;
