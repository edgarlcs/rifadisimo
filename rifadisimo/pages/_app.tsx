import "../styles/globals.css";
import { AppContext, AppInitialProps, AppLayoutProps } from "next/app";
import type { NextComponentType } from "next";
import { ReactNode } from "react";
import type { AppProps } from "next/app";
import Script from "next/script";
import { SessionProvider } from "next-auth/react";

const MyApp: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
  Component,
  pageProps,
  session,
}: AppLayoutProps) => {
  const getLayout = Component.getLayout || ((page: ReactNode) => page);
  return getLayout(
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default MyApp;
