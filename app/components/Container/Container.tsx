"use client";

import React, { JSX, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSession } from "next-auth/react";

import { fetchAllProductsInCart } from "@/store/slices/cartSlices";

import { AppDispatch } from "@/store/store";

import styles from "./Container.module.scss";

interface ContainerInterface {
  children: JSX.Element | JSX.Element[];
}

const Container: React.FC<ContainerInterface> = ({ children }) => {
  const dispatch = useDispatch<AppDispatch>();
  const session = useSession();

  console.log(session);

  useEffect(() => {
    const accessToken =
      session.data?.user.accessToken ||
      (localStorage.getItem("CART_TOKEN") as string);

    dispatch(fetchAllProductsInCart(accessToken));
  }, [session]);

  return <div className={styles.container}>{children}</div>;
};

export default Container;
