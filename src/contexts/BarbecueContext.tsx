import { Guests, PropsScheduled } from "../interfaces/Barbecue";
import { useRouter } from "next/router";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

interface BarbecueContextData {
  openCardDetail: (objBarbecueDetail: PropsScheduled) => void;
  barbecueDetail: PropsScheduled | undefined;
  handleAdd: (objBarbecueDetail: PropsScheduled) => void;
  scheduled: PropsScheduled[] | undefined;
  addGuestToEvent: (idBarbecue: string, newGuest: Guests) => void;
  markGuestAsPayed: (eventIndex: number, guestIndex: number) => void;
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

  const handleSum = (value: string, value2: string) => {
    return (+value + +value2).toString();
  };

  const addGuestToEvent = useCallback(
    (idBarbecue: string, newGuest: Guests) => {
      const index = scheduled.findIndex((item) => item.id === idBarbecue);
      const updatedGuestList = [...scheduled];

      if (updatedGuestList[index]) {
        // Soma o preço do convidado com o preço total
        updatedGuestList[index].price = handleSum(
          updatedGuestList[index].price,
          newGuest.price
        );
        // Soma o preço total com o preço sugerido com bebida
        updatedGuestList[index].price = newGuest.suggestedValueBeer
          ? handleSum(
              updatedGuestList[index].suggestedValueBeer,
              updatedGuestList[index].price
            )
          : updatedGuestList[index].price;
        // Aumenta em 1 a quantidade de pessoas, ao adicionar um convidado
        updatedGuestList[index].qtPeople = (
          +updatedGuestList[index].qtPeople + 1
        ).toString();
        // Soma o valor que o convidado vai contribuir mais o valor sugerido,
        // caso ele tenha marcado sem bebida, vai o valor sem bebida
        newGuest.price = newGuest.suggestedValueBeer
          ? handleSum(
              updatedGuestList[index].suggestedValueBeer,
              newGuest.price
            )
          : newGuest.price;

        updatedGuestList[index].guests.push(newGuest);
      }

      setScheduled(updatedGuestList);
      setBarbecueDetail(updatedGuestList[index]);
    },
    [scheduled]
  );

  const markGuestAsPayed = useCallback(
    (eventIndex: number, guestIndex: number) => {
      const updatedGuestList = [...scheduled];

      const guestToModify = updatedGuestList[eventIndex].guests;

      guestToModify[guestIndex].payed = !guestToModify[guestIndex].payed;
      setScheduled(updatedGuestList);
    },
    [scheduled]
  );

  return (
    <BarbecueContext.Provider
      value={{
        openCardDetail,
        barbecueDetail,
        handleAdd,
        scheduled,
        addGuestToEvent,
        markGuestAsPayed,
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
