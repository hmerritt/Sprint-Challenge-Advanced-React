import React, { useState, useEffect } from "react";
import Player from "./player/player";
import axios from "axios";

class ListPlayers extends React.Component {
    constructor() {
        super();
        this.state = {
            players: []
        };
    }

    componentDidMount() {
        axios
            .get("http://localhost:5000/api/players")
            .then(res => {
                this.setState({
                    players: res.data
                });
            })
            .catch(err => {
                console.error("Unable to get players from API: ", err);
            });
    }

    render() {
        return (
            <div className="players">
                {
                    this.state.players.map((player, key) => {
                        return (
                            <Player player={player} key={key} />
                        );
                    })
                }
            </div>
        );
    }
}

export default ListPlayers;
