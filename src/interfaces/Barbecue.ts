export interface PropsScheduled {
  id: string;
  date: Date;
  title: string;
  qtPeople: string;
  price: string;
  suggestedValueBeer: string;
  guests: Guests[];
}

export interface Guests {
  id: string;
  name: string;
  payed: boolean;
  price: string;
  suggestedValueBeer: boolean;
}
