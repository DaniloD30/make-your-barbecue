import { render, screen, fireEvent } from "@testing-library/react";
import Contexts from "../../../contexts";
import FormAddBarbecue from "./index";
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

describe("Render FormAddBarbecue", () => {
  it("Render FormAddBarbecue", () => {
    const toggle = jest.fn();
    render(
      <Contexts
        initialValueLogin={initialValueLogin}
        initialValueModal={false}
        initialValueBarbecue={initialValueBarbecue}
        initialValueSheduled={[]}
      >
        <FormAddBarbecue toggle={toggle} />
      </Contexts>
    );

    const dateInput = screen.getByPlaceholderText(/date of barbecue/i);
    const titleInput = screen.getByRole("textbox");
    const inputValue = screen.getByRole("spinbutton");

    act(() => {
      fireEvent.change(dateInput, { target: { value: "30" } });
      fireEvent.change(titleInput, { target: { value: "churras" } });
      fireEvent.change(inputValue, { target: { value: "30" } });
    });
    // const email = screen.getByRole("textbox");
    // const pass = screen.getByPlaceholderText(/senha/i);
    // const button = screen.getByRole("button", {
    //   name: /entrar/i,
    // });

    // act(() => {
    //   fireEvent.click(button);
    //   fireEvent.change(email, { target: { value: "dadad@hotmail.com" } });
    //   fireEvent.change(pass, { target: { value: "23456789" } });
    // });
  });
});
