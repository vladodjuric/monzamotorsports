import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Collapse, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        maxWidth: 645,
        background: 'rgba(0,0,0,0.5)',
        margin: '20px',
    },
    title: {
        fontFamily: 'Nunito',
        fontWeight: 'bold',
        fontSize: '2rem',
        color: 'red',
      },
      desc: {
        fontFamily: 'Nunito',
        fontSize: '1.1rem',
        color: 'black',
      },
});

export default function Paragraph({ paragraph, checked }) {
    const classes = useStyles();

    return (
        <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
            <Typography
                variant="h5"
                component="h1"
                className={classes.title}
            >
                {paragraph.title}
            </Typography>
            <Typography
                variant="body2"
                component="p"
                className={classes.desc}
            >
                {paragraph.description}
            </Typography>
        </Collapse>
    )
}