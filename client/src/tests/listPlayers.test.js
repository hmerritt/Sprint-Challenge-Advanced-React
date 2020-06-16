import React from "react";
import { render, renderHook, waitForElement, waitForDomChange } from "@testing-library/react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import ListPlayers from "../components/listPlayers";

test("Uses local storage to render players", () => {
    const players = [
        {name: "John Doe", country: "United States", searches: 100},
        {name: "Jane Doe", country: "United States", searches: 99},
    ]
    const { getByText, getAllByText } = render(<ListPlayers players={players} />);

    getByText(/John Doe/i);
    getByText(/Jane Doe/i);
    getAllByText(/United States/i);
    getByText(/100/i);
    getByText(/99/i);
});

// test("Uses API when no local storage available", () => {
//     let players, setPlayers;
//     function TestCompoent() {
//         [players, setPlayers] = useLocalStorage("players", []);
//         return null
//     }
//     render(<TestCompoent />);
//
//     const { getByText, getAllByText } = render(<ListPlayers players={players} setPlayers={setPlayers} />);
//
//     getAllByText(/Alex Morgan/i);
//     getAllByText(/Megan Rapinoe/i);
//     getAllByText(/United States/i);
//     getAllByText(/100/i);
//     getAllByText(/99/i);
// });
