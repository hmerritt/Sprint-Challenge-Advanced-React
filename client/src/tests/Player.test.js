import React from "react";
import { render, act, fireEvent, waitForElement, waitForDomChange } from "@testing-library/react";
import Player from "../components/player/player";

test("individual player renders", () => {
    const player = {
        name: "Alex Morgan",
        country: "United States",
        searches: 100
    };
    const { getByText } = render(<Player player={player} />);

    getByText(/Alex Morgan/i);
    getByText(/United States/i);
    getByText(/100/i);
});
