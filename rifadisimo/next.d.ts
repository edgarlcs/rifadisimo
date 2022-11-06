import type {
  NextComponentType,
  NextPageContext,
  NextLayoutComponentType,
} from "next";
import type { AppProps } from "next/app";
import type { Session } from "next-auth";
declare module "next" {
  type NextLayoutComponentType<P = {}> = NextComponentType<
    NextPageContext,
    any,
    P
  > & {
    getLayout?: (page: ReactNode) => ReactNode;
  };
}

declare module "next/app" {
  type AppLayoutProps<P = {}> = AppProps & {
    Component: NextLayoutComponentType;
    session?: Session;
  };
}
