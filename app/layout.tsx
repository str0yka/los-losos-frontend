import { Metadata } from "next";

import Container from "@/app/components/Container/Container";
import Header from "@/app/components/Header/Header";
import StoreProvider from "./components/StoreProvider/StoreProvider";

import { MuseoSans } from "./fonts/fonts";
import "@/app/styles/global.scss";
import NextAuthProvider from "./components/NextAuthProvider/NextAuthProvider";

export const metadata: Metadata = {
  title: "Лось Лосось",
  description: "Караоке-гастропаб",
};

interface RootLayoutInterface {
  children: JSX.Element;
}

const RootLayout: React.FC<RootLayoutInterface> = ({ children }) => {
  return (
    <html lang="en" className={MuseoSans.className}>
      <body>
        <NextAuthProvider>
          <StoreProvider>
            <Container>
              <Header />
              {children}
            </Container>
          </StoreProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
