import { render, screen } from "@testing-library/react";
import Contexts from "../../../contexts";
import RowDetail from "./index";
import "@testing-library/jest-dom";

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

const guest = {
  id: "string",
  name: "value barbecue",
  payed: false,
  price: "0",
  suggestedValueBeer: false,
};

const guestWithStrikethrough = {
  id: "string",
  name: "value barbecue",
  payed: true,
  price: "0",
  suggestedValueBeer: false,
};

const guestWithBeer = {
  id: "string",
  name: "value barbecue",
  payed: true,
  price: "0",
  suggestedValueBeer: true,
};
describe("Render Row", () => {
  it("Render Row", () => {
    render(
      <Contexts
        initialValueLogin={initialValueLogin}
        initialValueModal={false}
        initialValueBarbecue={initialValueBarbecue}
        initialValueSheduled={[]}
      >
        <RowDetail guest={guest} indexGuest={0} indexBarbecue={0} />
      </Contexts>
    );

    const titleCard = screen.getByText(/value barbecue/i);
    const price = screen.getByText(/0/i);

    expect(titleCard).toBeInTheDocument();
    expect(price).toBeInTheDocument();
  });

  it("Render <s> tagm when guest payed strikethrough", () => {
    render(
      <Contexts
        initialValueLogin={initialValueLogin}
        initialValueModal={false}
        initialValueBarbecue={initialValueBarbecue}
        initialValueSheduled={[]}
      >
        <RowDetail guest={guestWithStrikethrough} indexGuest={0} indexBarbecue={0} />
      </Contexts>
    );

   
    const strikethroughText = screen.getByText(/r\$ 0/i, { selector: 's' });
    expect(strikethroughText).toBeInTheDocument();
    
  });

  it("Render icon", () => {
    render(
      <Contexts
        initialValueLogin={initialValueLogin}
        initialValueModal={false}
        initialValueBarbecue={initialValueBarbecue}
        initialValueSheduled={[]}
      >
        <RowDetail guest={guestWithBeer} indexGuest={0} indexBarbecue={0} />
      </Contexts>
    );

    const icon = screen.getByRole('img', {
      name: /icon\-beer/i
    })
    expect(icon).toBeInTheDocument();
    
  });
});
