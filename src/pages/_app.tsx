import { BarbecueContextProvider } from "@/contexts/BarbecueContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <BarbecueContextProvider
      barbecueInitialValue={{
        date: new Date(),
        title: "",
        qtPeople: "",
        price: "",
      }}
      sheduledInitialValue={[]}
    >
      <Component {...pageProps} />
    </BarbecueContextProvider>
  );
}
