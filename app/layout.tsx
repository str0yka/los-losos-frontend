import { Metadata } from "next";
import AuthProvider from "./components/AuthProvider/AuthProvider";

import Header from "@/app/components/Header/Header";
import StoreProvider from "./components/StoreProvider/StoreProvider";

import { MuseoSans } from "./fonts/fonts";
import "@/app/styles/global.scss";

export const metadata: Metadata = {
  title: "Лось Лосось",
  description: "Караоке-гастропаб",
};

interface RootLayoutInterface {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutInterface> = ({ children }) => {
  return (
    <html lang="ru" className={MuseoSans.className}>
      <body>
        <StoreProvider>
          <AuthProvider>
            <Header />
            {children}
          </AuthProvider>
        </StoreProvider>
      </body>
    </html>
  );
};

export default RootLayout;
