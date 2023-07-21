import { Metadata } from "next";
import AuthProvider from "@/components/AuthProvider/AuthProvider";

import Header from "@/app/_components/Header/Header";
import StoreProvider from "@/components/StoreProvider/StoreProvider";

import { MuseoSans } from "./fonts";
import "@/app/styles/global.scss";

export const metadata: Metadata = {
  title: "Лось-Лосось",
  description: "Караоке-гастропаб",
};

interface RootLayoutInterface {
  children: React.ReactNode;
}

// TODO:
// 4. Кастомная страница авторизации
// 5. Для изображений использовать <Image></Image>
// 6. В папке store или slices сделать папку actions
// 10. Все запросы axios переписать на fetch
// 11. Сделать кастомные запросы fetch
// 12. Папка components должны быть в корне
// 13. Переименовать папку UI в common
// 14. В папке components должны быть провайдеры, common, всё что относится к RootLayout
// 15. Нужны правила на z-index
// 16. Для текста сделать компонент Typography
// 17. Сделать UI-kit (input, button, arrowbutton || button with svg, icon)
// 18. ProgressLine превратить в ProgressLine со своей логикой в зависимости от params

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
