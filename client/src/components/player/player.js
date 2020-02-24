import React from "react";
import "./player.css";

class Player extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="player">
                <h1> {this.props.player.name} </h1>
                <h2> {this.props.player.country} </h2>
                <h3> {this.props.player.searches} </h3>
            </div>
        );
    }
}

export default Player;
