import jwtDecode from "jwt-decode";
import { API_URL } from "@/utils/consts";

export const checkAuth = async () => {
  const oldToken = localStorage.getItem("token");

  let headers = {};
  if (oldToken) {
    headers = { authorization: oldToken };
  }
  console.log(API_URL);

  const data = await fetch(`${API_URL}/user`, {
    headers,
  });
  const { token } = await data.json();

  localStorage.setItem("token", `Bearer ${token}`);
  return jwtDecode(token);
};
