"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { useSession } from "next-auth/react";

import { fetchAllProductsInCart } from "@/store/slices/cartSlices";

import { AppDispatch } from "@/store/store";
import { useAccessToken } from "@/hooks/useAccessToken";

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
  const { status } = useSession();
  const dispatch = useDispatch<AppDispatch>();
  const accessToken = useAccessToken();

  useEffect(() => {
    if (status !== "loading") {
      dispatch(fetchAllProductsInCart(accessToken));
    }
  }, [status]);

  return children;
};

export default AuthProvider;
