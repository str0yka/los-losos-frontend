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
// 15. Нужны правила на z-index
// 16. ? Для текста сделать компонент Typography
// 17. Сделать UI-kit (input, button, arrowbutton || button with svg, icon)
// 19. Вместо <span class="visually-hidden"></... сделать отдельный компонент
// 20. Сделать хук useAppDispatch
// 21. EmptyCart, NotFoundPage, Loading плохо отображаются на маленьких телефонах
// 22. В компоненте Button вместо variant="outlined-secondary" сделать variant="disabled" или просто добавить свойсто disabled
// 23. В компоненте CountButton разобраться с классами

const RootLayout: React.FC<RootLayoutInterface> = ({ children }) => {
  return (
    <html lang="ru" className={MuseoSans.className}>
      <body>
        <StoreProvider>
          <AuthProvider>
            <Header />
            <div className="main">{children}</div>
          </AuthProvider>
        </StoreProvider>
      </body>
    </html>
  );
};

export default RootLayout;
