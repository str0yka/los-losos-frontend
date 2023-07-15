import { User } from "@/app";
import { API_URL } from "@/utils/consts";
import axios from "axios";
import type { NextAuthOptions } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import { headers } from "next/dist/client/components/headers";

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
        const { data } = await axios.post(`${API_URL}/user/login`, {
          phone: credentials?.phone,
          code: credentials?.code,
        });

        if (data.id) {
          return data;
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
