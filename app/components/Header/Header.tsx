import React from "react";
import styles from "./Header.module.scss";
import BurgerMenu from "@/app/components/BurgerMenu/BurgerMenu";
import RoundedButton from "@/app/components/RoundedButton/RoundedButton";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.leftSide}>
        <img src="/images/logo.png" alt="" className={styles.logo} />
        <div className={styles.contact}>
          <p>Связаться с нами</p>
          <a href="tel:78005553535">+7 800 555 35 35</a>
        </div>
      </div>
      <div className={styles.rightSide}>
        <RoundedButton className={styles.button}>профиль</RoundedButton>
        <RoundedButton className={styles.contactButton} fillColor={true}>
          позвони нам
        </RoundedButton>
        <BurgerMenu />
      </div>
    </header>
  );
};

export default Header;
