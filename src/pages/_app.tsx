import Contexts from "../contexts";
import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const initialValueLogin = {
    email: "",
    pass: "",
  };
  const initialValueBarbecue = {
    id: "",
    date: new Date(),
    title: "",
    qtPeople: "",
    guests: [],
    suggestedValueBeer: "",
    price: "",
  };
  
  return (
    <Contexts
      initialValueLogin={initialValueLogin}
      initialValueModal={false}
      initialValueBarbecue={initialValueBarbecue}
      initialValueSheduled={[]}
    >
      <Component {...pageProps} />
    </Contexts>
  );
}
