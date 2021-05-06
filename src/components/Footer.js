import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '10vh',
        fontFamily: 'Nunito',
        backgroundColor: '#616161'
    },
});

export default function Footer() {
    const classes = useStyles();
    return (
        <div className={classes.root} id="footer">
            <Box p="2rem">
            <FacebookIcon />
            <a
                href="https://www.facebook.com/MonzaMotorsports/"
                target="blank"
                rel="noopener noreferrer"
            >
                Inventory
            </a>
            </Box>
            <h1>
                Contact
            </h1>
        </div>
    )
}