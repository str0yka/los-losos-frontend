import CredentialProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";

import { API_URL } from "@/utils/consts";
import { appFetch } from "@/http";

export const options: NextAuthOptions = {
  providers: [
    CredentialProvider({
      name: "Credential",
      credentials: {
        phone: {
          label: "Ваш номер телефона:",
          type: "text",
          placeholder: "Введите ваш номер телефона",
          required: true,
        },
        code: {
          label: "Код из СМС:",
          type: "number",
          placeholder: "Введите код из СМС",
          required: true,
        },
      },
      async authorize(credentials) {
        const body = {
          phone: credentials?.phone,
          code: credentials?.code,
        };

        const user = await appFetch.post("/user/login", { body });

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
