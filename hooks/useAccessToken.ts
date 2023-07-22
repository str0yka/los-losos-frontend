import { useSession } from "next-auth/react";

export const useAccessToken = () => {
  const { data, status } = useSession();

  let accessToken;

  if (status === "authenticated") {
    localStorage.removeItem("CART_TOKEN");
    accessToken = data.user.accessToken;
  }

  if (status === "unauthenticated") {
    accessToken = localStorage.getItem("CART_TOKEN") as string;
  }

  return "Bearer " + accessToken;
};
