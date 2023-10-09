import { render, screen } from "@testing-library/react";
import Contexts from "../../../contexts";
import Card from "./index";
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

describe("Card", () => {
  it("Card", () => {
    render(
      <Contexts
        initialValueLogin={initialValueLogin}
        initialValueModal={false}
        initialValueBarbecue={initialValueBarbecue}
        initialValueSheduled={[]}
      >
        <Card {...initialValueBarbecue} />
      </Contexts>
    );

    const date = screen.getByText(/09\/10/i);
    const title = screen.getByText(/churras de domingo/i);
    const price = screen.getByText(/r\$20/i);

    expect(date).toBeInTheDocument();  
    expect(title).toBeInTheDocument();
    expect(price).toBeInTheDocument();
  });
});
