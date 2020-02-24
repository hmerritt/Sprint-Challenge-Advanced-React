import React from "react";
import Header from "./components/header/header";
import ListPlayers from "./components/listPlayers";
import { Container } from "@material-ui/core";
import { useLocalStorage } from "./hooks/useLocalStorage";
import "./App.css";

function App() {
    return (
        <div>
            <Header />

            <div className="content">
                <Container>
                    <ListPlayers />
                </Container>
            </div>
        </div>
    );
}

export default App;
