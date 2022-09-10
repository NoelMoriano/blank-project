import type { AppProps } from "next/app";
import UserLayout from "../components/UserLayout";
import GlobalStyle from "../styles/globalstyles";
import { DefaultTheme, ThemeProvider } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    primary: "#111",
    secondary: "#0070f3",
  },
};

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <UserLayout>
          <Component {...pageProps} />
        </UserLayout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
