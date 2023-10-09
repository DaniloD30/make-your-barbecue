import { render, screen } from "@testing-library/react";
import Contexts from "../../../contexts";
import Modal from "./index";
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

describe("Modal", () => {
  it("Modal close", () => {
    const mockFunction = jest.fn();
    render(
      <Contexts
        initialValueLogin={initialValueLogin}
        initialValueModal={false}
        initialValueBarbecue={initialValueBarbecue}
        initialValueSheduled={[]}
      >
        <Modal isOpen={false} toggle={mockFunction}>
          <div>Modal children</div>
        </Modal>
      </Contexts>
    );
  });
  it("Modal open", () => {
    const mockFunction = jest.fn();
    render(
      <Contexts
        initialValueLogin={initialValueLogin}
        initialValueModal={true}
        initialValueBarbecue={initialValueBarbecue}
        initialValueSheduled={[]}
      >
        <Modal isOpen={true} toggle={mockFunction}>
          <div>Modal children</div>
        </Modal>
      </Contexts>
    );
    const modalTextRender = screen.getByText(/modal children/i);
    expect(modalTextRender).toBeInTheDocument();
  });
});
