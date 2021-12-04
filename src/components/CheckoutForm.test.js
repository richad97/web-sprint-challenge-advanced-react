import React from "react";
import MutationObserver from "mutationobserver-shim";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows
// getBy throws err when there is no match/test immediately fails
// queryBy doesn't/testing continues
// getBy searches for ONE unique item
// getByAll searches for multiple
// If doing an assertion on test use query, otherwise use get ??

test("renders without errors", () => {
  render(<CheckoutForm />);
});

test("shows success message on submit with form details", () => {
  render(<CheckoutForm />);

  // Find each input
  // Type into input
  const firstNameInput = screen.getByLabelText(/first name:/i);
  userEvent.type(firstNameInput, "ricardo");

  const lastNameInput = screen.getByLabelText(/last name:/i);
  userEvent.type(lastNameInput, "castillo");

  const addressInput = screen.getByLabelText(/address:/i);
  userEvent.type(addressInput, "address 123");

  const cityInput = screen.getByLabelText(/city:/i);
  userEvent.type(cityInput, "testCity");

  const stateInput = screen.getByLabelText(/state:/i);
  userEvent.type(stateInput, "testState");

  const zipInput = screen.getByLabelText(/zip:/i);
  userEvent.type(zipInput, "99999");

  // Find submit button
  // Click submit button after everything is filled out
  const submitButton = screen.getByRole("button");
  userEvent.click(submitButton);

  // Find success message with form details
  const firstNameText = screen.getByText(/ricardo/i);
  expect(firstNameText).toBeInTheDocument();

  const lastNameText = screen.getByText(/castillo/i);
  expect(lastNameText).toBeInTheDocument();

  const addressText = screen.getByText(/address 123/i);
  expect(addressText).toBeInTheDocument();

  const cityText = screen.getByText(/testcity/i);
  expect(cityText).toBeInTheDocument();

  const stateText = screen.getByText(/teststate/i);
  expect(stateText).toBeInTheDocument();

  const zipText = screen.getByText(/99999/);
  expect(zipText).toBeInTheDocument();
});
