import React from "react";
import { render } from "react-dom";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";
import { createMemoryHistory } from "history";

import Router from "router/Router";

it("navigates home when you click the logo", () => {
  // in a real test a renderer like "@testing-library/react"
  // would take care of setting up the DOM elements
  const history = createMemoryHistory();
  const root = document.createElement("div");
  document.body.appendChild(root);

  // Render app
  render(
    <MemoryRouter initialEntries={["/movies"]}>
      <Router history={history} />
    </MemoryRouter>,
    root
  );

  // Interact with page
  act(() => {
    // Find the link (perhaps using the text content)
    const goHomeLink = document.querySelector("#logo");
    // Click it
    goHomeLink.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  const divHome = document.getElementsByClassName('Home__Base').length

  expect(history.location.pathname).toBe("/");
  expect(divHome).toBe(1);
});
