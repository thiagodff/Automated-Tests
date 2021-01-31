import React from "react";
import { render, screen } from "@testing-library/react";
import queryString from "query-string";

import { Provider } from "react-redux";
import { store } from "../../../store";

import SignIn from "../../../pages/SignIn";
import userEvent from "@testing-library/user-event";

describe("Login page successfully", () => {
  it("should render sign in page correctly", () => {
    window.location.assign = jest.fn();

    render(
      <Provider store={store}>
        <SignIn />
      </Provider>
    );

    const signInButton = screen.getByRole("button", { name: /fazer login/i });
    userEvent.click(signInButton);

    expect(window.location.assign).toHaveBeenCalledWith(
      `${
        process.env.REACT_APP_SPOTIFY_AUTHENTICATION_URL
      }?${queryString.stringify({
        response_type: "token",
        client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
        redirect_uri: `${process.env.REACT_APP_PUBLIC_URL}/callback`,
      })}`
    );
  });
});
