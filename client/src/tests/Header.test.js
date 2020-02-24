import React from "react";
import { render, act, fireEvent, waitForElement, waitForDomChange } from "@testing-library/react";
import Header from "../components/header/header";

test("title renders", () => {
    const { getByText } = render(<Header />);

    getByText(/Women's World Cup Players/i);
});
