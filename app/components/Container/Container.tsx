import React, { JSX } from "react";
import styles from "./Container.module.scss";

interface ContainerInterface {
  children: JSX.Element | JSX.Element[];
}

const Container: React.FC<ContainerInterface> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
