"use client";

import "@/styles/globals.scss";
import Container from "@/app/components/Container/Container";

import Header from "@/app/components/Header/Header";
import { Provider } from "react-redux";
import store from "@/store/store";

interface RootLayoutInterface {
  children: JSX.Element;
}

const RootLayout: React.FC<RootLayoutInterface> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <Container>
            <Header />
            {children}
          </Container>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
