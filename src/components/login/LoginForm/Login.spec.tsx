import { render, screen, fireEvent } from "@testing-library/react";
import Contexts from "../../../contexts";
import LoginForm from "./index";
import { act } from "@testing-library/react";

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

describe("Render LoginForm", () => {
  it("Render LoginFormw", () => {
    render(
      <Contexts
        initialValueLogin={initialValueLogin}
        initialValueModal={false}
        initialValueBarbecue={initialValueBarbecue}
        initialValueSheduled={[]}
      >
        <LoginForm />
      </Contexts>
    );

    const email = screen.getByRole("textbox");
    const pass = screen.getByPlaceholderText(/senha/i);
    const button = screen.getByRole("button", {
      name: /entrar/i,
    });

    act(() => {
   
      fireEvent.click(button);
      fireEvent.change(email, { target: { value: "dadad@hotmail.com" } });
      fireEvent.change(pass, { target: { value: "23456789" } });
    });
  });

});
