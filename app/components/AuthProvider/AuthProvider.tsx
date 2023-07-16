"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { useSession } from "next-auth/react";

import { fetchAllProductsInCart } from "@/store/slices/cartSlices";

import { AppDispatch } from "@/store/store";
import Loading from "../Loading/Loading";

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  return (
    <SessionProvider>
      <AfterAuthorize>{children}</AfterAuthorize>
    </SessionProvider>
  );
};

const AfterAuthorize: React.FC<AuthProviderProps> = ({ children }) => {
  const { data, status } = useSession();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    let accessToken;

    if (status === "authenticated") {
      localStorage.removeItem("CART_TOKEN");
      accessToken = data.user.accessToken;
    }

    if (status === "unauthenticated") {
      accessToken = localStorage.getItem("CART_TOKEN") as string;
    }

    if (status !== "loading") {
      dispatch(fetchAllProductsInCart(accessToken));
    }
  }, [status]);

  if (status === "loading") {
    return <Loading />;
  }

  return children;
};

export default AuthProvider;
