import { BarbecueContextProvider } from "../contexts/BarbecueContext";
import { ModalContextProvider } from "../contexts/ModalContext";
import { ReactNode } from "react";
import { LoginContextProvider } from "./LoginContext";
import { User } from "../interfaces/LoginInterface";
import { PropsScheduled } from "../interfaces/Barbecue";

interface Props {
  children: ReactNode;
  initialValueLogin: User;
  initialValueModal: boolean;
  initialValueBarbecue: PropsScheduled;
  initialValueSheduled: PropsScheduled[];
}

export default function Contexts({
  children,
  initialValueLogin,
  initialValueBarbecue,
  initialValueModal,
  initialValueSheduled,
}: Props) {
  return (
    <LoginContextProvider initialValue={initialValueLogin}>
      <ModalContextProvider modalInitialValue={initialValueModal}>
        <BarbecueContextProvider
          barbecueInitialValue={initialValueBarbecue}
          sheduledInitialValue={initialValueSheduled}
        >
          {children}
        </BarbecueContextProvider>
      </ModalContextProvider>
    </LoginContextProvider>
  );
}
