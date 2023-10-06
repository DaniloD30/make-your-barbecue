export interface PropsScheduled {
    date: Date;
    title: string;
    qtPeople: string;
    price: string;
    guests?: Guests[];
  }

interface Guests {
  name: string;
  payed: boolean;
}