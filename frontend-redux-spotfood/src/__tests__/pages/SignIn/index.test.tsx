import React from "react";
import { render, screen } from "@testing-library/react";

import * as reactRedux from "react-redux";
import { Provider } from "react-redux";
import { store } from "../../../store";

import SignIn from "../../../pages/SignIn";
import userEvent from "@testing-library/user-event";

describe("Login page successfully", () => {
  it("should render sign in page correctly", () => {
    const { container } = render(
      <Provider store={store}>
        <SignIn />
      </Provider>
    );

    // utilizar Regex deixa o teste um pouco mais resiliente
    const signInButton = screen.getByRole("button", { name: /fazer login/i });

    expect(container).toMatchSnapshot();
    expect(signInButton).toBeInTheDocument();
    // expect(signInButton).not.toBeInTheDocument();
  });

  it("should dispatch when clicking on the button", () => {
    const mockDispatch = jest.fn();
    const useDispatch = jest.spyOn(reactRedux, "useDispatch");
    useDispatch.mockReturnValue(mockDispatch);

    render(
      <Provider store={store}>
        <SignIn />
      </Provider>
    );

    const signInButton = screen.getByRole("button", { name: /fazer login/i });

    userEvent.click(signInButton);
    expect(mockDispatch).toHaveBeenCalled();
  });
});
