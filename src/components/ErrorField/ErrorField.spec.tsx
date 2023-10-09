import { render, screen } from "@testing-library/react";
import ErrorField from "./index";
import '@testing-library/jest-dom';

describe("Render ErrorField", () => {
  it("Render ErrorField", () => {
    render(<ErrorField errorMessage="Mensagem de erro" />);

    const msg = screen.getByText(/mensagem de erro/i)
    expect(msg).toBeInTheDocument()
  });
});
