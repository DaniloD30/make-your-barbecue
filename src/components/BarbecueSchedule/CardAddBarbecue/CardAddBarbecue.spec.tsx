import { render, screen } from "@testing-library/react";
import Contexts from "../../../contexts";
import CardAddBarbecue from "./index";
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

describe("CardAddBarbecue", () => {
  it("CardAddBarbecue", () => {
    const openModal = jest.fn();
    render(
      <Contexts
        initialValueLogin={initialValueLogin}
        initialValueModal={false}
        initialValueBarbecue={initialValueBarbecue}
        initialValueSheduled={[]}
      >
        <CardAddBarbecue openModal={openModal} />
      </Contexts>
    );

    const title = screen.getByText(/Adicionar Churras/i);

    expect(title).toBeInTheDocument();
  });
});
