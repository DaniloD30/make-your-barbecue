import { render, screen, fireEvent } from "@testing-library/react";
import Contexts from "../../contexts";
import { LogoutButton } from "./index";

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
  title: "",
  qtPeople: "",
  guests: [],
  suggestedValueBeer: "",
  price: "",
};

describe("Render LogoutButton", () => {
  it("Render LogoutButton", () => {
    
    render(
      <Contexts
        initialValueLogin={initialValueLogin}
        initialValueModal={false}
        initialValueBarbecue={initialValueBarbecue}
        initialValueSheduled={[]}
      >
        <LogoutButton />
      </Contexts>
    );
    const button = screen.getByTestId("button-logout");
    fireEvent.click(button)
  });
});
