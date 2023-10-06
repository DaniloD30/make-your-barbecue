import { Guests, PropsScheduled } from "@/interfaces/barbecue";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useState } from "react";

interface BarbecueContextData {
  openCardDetail: (objBarbecueDetail: PropsScheduled) => void;
  barbecueDetail: PropsScheduled | undefined;
  handleAdd: (objBarbecueDetail: PropsScheduled) => void;
  scheduled: PropsScheduled[] | undefined;
  addGuestToEvent: (idBarbecue: string, newGuest: Guests) => void;
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

  const addGuestToEvent = (idBarbecue: string, newGuest: Guests) => {
    const index = scheduled.findIndex((item) => item.id == idBarbecue);
    const updatedGuestList = [...scheduled];
    if (updatedGuestList[index]) {
      updatedGuestList[index].guests.push(newGuest);
    }
    setScheduled(updatedGuestList);
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
        addGuestToEvent,
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
