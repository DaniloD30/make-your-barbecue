import Contexts from "@/contexts";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Contexts>
      <Component {...pageProps} />
    </Contexts>
  );
}
