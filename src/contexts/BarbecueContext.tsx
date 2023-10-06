import { Guests, PropsScheduled } from "@/interfaces/barbecue";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useState } from "react";

interface BarbecueContextData {
  openCardDetail: (objBarbecueDetail: PropsScheduled) => void;
  barbecueDetail: PropsScheduled | undefined;
  handleAdd: (objBarbecueDetail: PropsScheduled) => void;
  scheduled: PropsScheduled[] | undefined;
}

interface BarbecueContextProviderProps {
  children: ReactNode;
  barbecueInitialValue: PropsScheduled;
  sheduledInitialValue: PropsScheduled[];
}

export const BarbecueContext = createContext({} as BarbecueContextData);

export function BarbecueContextProvider({
  children,
  barbecueInitialValue,
  sheduledInitialValue,
}: BarbecueContextProviderProps) {
  const [barbecueDetail, setBarbecueDetail] =
    useState<PropsScheduled>(barbecueInitialValue);
  const [scheduled, setScheduled] =
    useState<PropsScheduled[]>(sheduledInitialValue);
  const router = useRouter();

  const openCardDetail = (objBarbecueDetail: PropsScheduled) => {
    setBarbecueDetail(objBarbecueDetail);
    return router.push("/details");
  };

  const handleAdd = (data: PropsScheduled) => {
    setScheduled((prevState) => [...prevState, data]);
  };

  const addGuestToEvent = (idBarbecue: number, newGuest: Guests) => {
    // Copie o array de eventos para evitar mutação direta
    const updatedGuestList = [...scheduled];

    // Adicione o novo convidado ao array de convidados do evento
    if (updatedGuestList[idBarbecue]) {
      updatedGuestList[idBarbecue].guests?.push(newGuest);
      setScheduled(updatedGuestList);
    }

    // Atualize o estado com o novo array
  };

  const markGuestAsPayed = (eventIndex: number, guestIndex: number) => {
    // Copie o array de convidados para evitar mutação direta
    const updatedGuestList = [...scheduled];

    // Encontre o objeto de convidado que deseja modificar
    if (updatedGuestList[eventIndex].guests) {
      const guestToModify = updatedGuestList[eventIndex].guests;
      if (guestToModify) {
        guestToModify[guestIndex].payed = !guestToModify[guestIndex].payed;
        setScheduled(updatedGuestList);
      }
    }

    // Faça a modificação desejada (marcar como pago)
    // guestToModify.payed = true;

    // Atualize o estado com o novo array
  };

  /* 
  TODO: Talvez uma função para saber o valor de cada convidade, talvez dentro do proprio objeto
  */
  return (
    <BarbecueContext.Provider
      value={{
        openCardDetail,
        barbecueDetail,
        handleAdd,
        scheduled,
      }}
    >
      {children}
    </BarbecueContext.Provider>
  );
}

export function useBarbecue() {
  const context = useContext(BarbecueContext);

  return context;
}
