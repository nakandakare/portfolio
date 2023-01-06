import "../styles/globals.css";
import type { AppProps } from "next/app";
import TabsContext from "context/TabContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TabsContext>
      <Component {...pageProps} />
    </TabsContext>
  );
}
