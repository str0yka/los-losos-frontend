"use client";

import React, { JSX, useEffect } from "react";
import styles from "./Container.module.scss";
import { checkAuth } from "@/http/userApi";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { fetchAllProductsInCart } from "@/store/slices/cartSlices";

interface ContainerInterface {
  children: JSX.Element | JSX.Element[];
}

const Container: React.FC<ContainerInterface> = ({ children }) => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    checkAuth().then((res) => console.log(res));
    dispatch(fetchAllProductsInCart());
  }, []);

  return <div className={styles.container}>{children}</div>;
};

export default Container;
