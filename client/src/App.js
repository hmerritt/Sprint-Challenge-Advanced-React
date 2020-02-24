import React, { useState, useEffect } from "react";
import Header from "./components/header/header";
import Chart from "./components/chart";
import ListPlayers from "./components/listPlayers";
import { Container } from "@material-ui/core";
import { useLocalStorage } from "./hooks/useLocalStorage";
import "./App.css";

function App() {
    //  Attempt to load players from local storage
    const [players, setPlayers] = useLocalStorage("players", []);

    return (
        <div>
            <Header />

            <div className="content">
                <Container>
                    <Chart players={players} />
                    <ListPlayers players={players} setPlayers={setPlayers} />
                </Container>
            </div>
        </div>
    );
}

export default App;
