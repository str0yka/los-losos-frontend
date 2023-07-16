import { Metadata } from "next";
import AuthProvider from "./components/AuthProvider/AuthProvider";

import Container from "@/app/components/Container/Container";
import Header from "@/app/components/Header/Header";
import StoreProvider from "./components/StoreProvider/StoreProvider";

import { MuseoSans } from "./fonts/fonts";
import "@/app/styles/global.scss";

export const metadata: Metadata = {
  title: "Лось Лосось",
  description: "Караоке-гастропаб",
};

interface RootLayoutInterface {
  children: JSX.Element;
}

// TODO:
// 1. 1 компонент для кнопки (вместо SquareButton и RoundedButton)
// 2. Container должен быть контейнером, а не компонентом, который фетчит данные
// 3. В папке CountButton сделать папке hooks и в ней useHandleCart
// 4. Кастомная страница авторизации
// 5. Для изображений использовать <Image></Image>
// 6. В папке store или slices сделать папку actions
// 8. MainPageHeader переименовать в DeliveryHeader
// 9. В компоненте MainPageHeader сделать хук useSlider(ref)
// 10. Все запросы axios переписать на fetch
// 11. Сделать кастомные запросы fetch
// 12. Папка components должны быть в корне
// 13. Переименовать папку UI в common
// 14. В папке components должны быть провайдеры, common, всё что относится к RootLayout
// 15. Нужны правила на z-index

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
