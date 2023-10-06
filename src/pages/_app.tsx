import { BarbecueContextProvider } from "@/contexts/BarbecueContext";
import { ModalContextProvider } from "@/contexts/ModalContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ModalContextProvider modalInitialValue={false}>
      <BarbecueContextProvider
        barbecueInitialValue={{
          id: "",
          date: new Date(),
          title: "",
          qtPeople: "",
          price: "",
        }}
        sheduledInitialValue={[]}
      >
        <Component {...pageProps} />
      </BarbecueContextProvider>
    </ModalContextProvider>
  );
}
