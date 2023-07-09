import "@/app/styles/globals.scss";
import Container from "@/app/components/Container/Container";
import Header from "@/app/components/Header/Header";

interface RootLayoutInterface {
  children: JSX.Element;
}

const RootLayout: React.FC<RootLayoutInterface> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Container>
          <Header />
          {children}
        </Container>
      </body>
    </html>
  );
};

export default RootLayout;
