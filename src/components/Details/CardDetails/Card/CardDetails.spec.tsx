import { render, screen, fireEvent } from "@testing-library/react";
import Contexts from "../../../../contexts";
import CardDetails from "./index";
import '@testing-library/jest-dom';
jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "",
      query: "",
      asPath: "",
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    };
  },
}));

const initialValueLogin = {
  email: "",
  pass: "",
};

const initialValueBarbecue = {
  id: "",
  date: new Date(),
  title: "Churras de domingo",
  qtPeople: "10",
  guests: [],
  suggestedValueBeer: "",
  price: "20",
};

const initialValueBarbecueWithGuests = {
  id: "",
  date: new Date(),
  title: "Churras de domingo",
  qtPeople: "10",
  guests: [{
    id: "string",
    name: "value barbecue",
    payed: false,
    price: "0",
    suggestedValueBeer: false,
  }],
  suggestedValueBeer: "",
  price: "20",
};

describe("Render CardDetails", () => {
  it("Render CardDetails", () => {
    render(
      <Contexts
        initialValueLogin={initialValueLogin}
        initialValueModal={false}
        initialValueBarbecue={initialValueBarbecue}
        initialValueSheduled={[]}
      >
        <CardDetails />
      </Contexts>
    );

    const buttonBack = screen.getByRole("button", {
      name: /icon\-back voltar/i,
    });
    const buttonAddGuest = screen.getByRole("button", {
      name: /icon\-add adicionar participante do churras!/i,
    });
    const titleCard = screen.getByText(/churras de domingo/i)
    const iconPeople = screen.getByRole("img", {
      name: /icon\-people/i,
    });
    const iconMoney = screen.getByRole("img", {
      name: /icon\-money/i,
    });
    const price = screen.getByText(/r\$20/i);

    expect(buttonBack).toBeInTheDocument();
    expect(buttonAddGuest).toBeInTheDocument();
    expect(titleCard).toBeInTheDocument();
    expect(iconPeople).toBeInTheDocument();
    expect(iconMoney).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    
    fireEvent.click(buttonBack)
    fireEvent.click(buttonAddGuest)
  });

  it("Render Guests", () => {
    render(
      <Contexts
        initialValueLogin={initialValueLogin}
        initialValueModal={false}
        initialValueBarbecue={initialValueBarbecueWithGuests}
        initialValueSheduled={[]}
      >
        <CardDetails />
      </Contexts>
    );
    const nameGuest = screen.getByText(/value barbecue/i)
    expect(nameGuest).toBeInTheDocument();
  });
});
