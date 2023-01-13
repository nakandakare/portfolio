import "../styles/globals.css";
import type { AppProps } from "next/app";
import TabsContext from "context/TabContext";
import { Poppins } from "@next/font/google";
import { Particle } from "components";

export const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={font.className}>
      <Particle />
      <TabsContext>
        <Component {...pageProps} />
      </TabsContext>
    </main>
  );
}
