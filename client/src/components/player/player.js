import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./player.css";

class Player extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="player">
                <Card>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            {this.props.player.name}
                        </Typography>
                        <Typography variant="body2" component="p">
                            {this.props.player.country}
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                            <small>{this.props.player.searches} searches</small>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default Player;
