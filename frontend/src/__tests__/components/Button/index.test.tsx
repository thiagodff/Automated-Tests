import React from "react";
import { render, screen } from "@testing-library/react";

import Button from "../../../components/Button";
import userEvent from "@testing-library/user-event";

// o describe vai conter um conjunto de testes
// successfully pois o teste é de um fluxo esperado, o fluxo ideal
describe("Test button successfully", () => {
  it("should be able to render the button", () => {
    const buttonText = "Fazer login";
    const { container } = render(<Button>{buttonText}</Button>);

    // o screen tem acesso à tela inteira
    const button = screen.getByRole("button", { name: buttonText });

    expect(button).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it("should be able to call onClick function with success", () => {
    const buttonText = "Fazer login";
    const onClick = jest.fn(); // função que o jest oferece, podemos passar uma implementação no parâmetro

    render(<Button onClick={onClick}>{buttonText}</Button>);

    // o screen tem acesso à tela inteira
    const button = screen.getByRole("button", { name: buttonText });

    userEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1); // ou toHaveBeenCalled()
  });
});
