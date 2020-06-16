import React, { useState, useEffect } from "react";
import Player from "./player/player";
import { Typography } from "@material-ui/core";
import axios from "axios";

class ListPlayers extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

        //  Fetch player data if not present in local storage
        if (this.props.players.length === 0)
        {
            axios
                .get("http://localhost:5000/api/players")
                .then(res => {
                    this.props.setPlayers(res.data);
                })
                .catch(err => {
                    console.error("Unable to get players from API: ", err);
                });
        }
    }

    render() {
        return (
            <>
                <div className="players">
                    <Typography variant="h5" component="h2">
                        Showing <strong>{this.props.players.length}</strong> Players
                    </Typography>
                    {
                        this.props.players.map((player, key) => {
                            return (
                                <Player player={player} key={key} />
                            );
                        })
                    }
                </div>
            </>
        );
    }
}

export default ListPlayers;
