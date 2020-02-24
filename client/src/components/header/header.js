import React, { useState, useEffect } from "react";
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SportsSoccerIcon from "@material-ui/icons/SportsSoccer";

function Header() {
    const styles = makeStyles(theme => ({
        icon: {
            marginRight: theme.spacing(2)
        }
    }))();

    return (
        <AppBar position="fixed">
            <Container>
                <Toolbar>
                    <SportsSoccerIcon className={styles.icon} />
                    <Typography variant="h6">
                        Women's World Cup players
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;
