import { BarbecueContextProvider } from "@/contexts/BarbecueContext";
import { ModalContextProvider } from "@/contexts/ModalContext";
import { ReactNode } from "react";
import { LoginContextProvider } from "./LoginContext";
interface Props {
  children: ReactNode;
}
export default function Contexts({ children }: Props) {
  return (
    <LoginContextProvider
      initialValue={{
        email: "",
        pass: "",
      }}
    >
      <ModalContextProvider modalInitialValue={false}>
        <BarbecueContextProvider
          barbecueInitialValue={{
            id: "",
            date: new Date(),
            title: "",
            qtPeople: "",
            guests: [],
            suggestedValueBeer: "",
            price: "",
          }}
          sheduledInitialValue={[]}
        >
          {children}
        </BarbecueContextProvider>
      </ModalContextProvider>
    </LoginContextProvider>
  );
}
