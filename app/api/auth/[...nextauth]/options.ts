import CredentialProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";

import { API_URL } from "@/utils/consts";

export const options: NextAuthOptions = {
  providers: [
    CredentialProvider({
      name: "Credential",
      credentials: {
        phone: {
          label: "Ваш номер телефона:",
          type: "text",
          placeholder: "Введите ваш номер телефона",
        },
        code: {
          label: "Код из СМС:",
          type: "number",
          placeholder: "Введите код из СМС",
        },
      },
      async authorize(credentials) {
        const body = {
          phone: credentials?.phone,
          code: credentials?.code,
        };

        const data = await fetch(`${API_URL}/user/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        });
        const user = await data.json();

        if (user.id) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.phone = user.phone;
        token.cartId = user.cartId;
        token.role = user.role;
        token.accessToken = user.accessToken;
      }

      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.phone = token.phone;
        session.user.cartId = token.cartId;
        session.user.role = token.role;
        session.user.accessToken = token.accessToken;
      }

      return session;
    },
  },
};
