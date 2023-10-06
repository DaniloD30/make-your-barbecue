import { createContext, ReactNode, useContext, useState } from "react";

interface ModalContextData {
  toggle: () => void;
  isOpen: boolean;
}

interface ModalContextProviderProps {
  children: ReactNode;
  modalInitialValue: boolean;
}

export const ModalContext = createContext({} as ModalContextData);

export function ModalContextProvider({
  children,
  modalInitialValue,
}: ModalContextProviderProps) {
  const [isOpen, setisOpen] = useState(modalInitialValue);
  const toggle = () => {
    setisOpen(!isOpen);
  };
  return (
    <ModalContext.Provider
      value={{
        isOpen,
        toggle,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);

  return context;
}
