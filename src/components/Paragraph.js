import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, CardMedia, Collapse, Typography } from '@material-ui/core';
import paragraphs from '../static/paragraphs';
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles({
    root: {
        maxWidth: 645,
        background: 'rgba(0,0,0,0.5)',
        margin: '20px',
    },
    card: {

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
    media: {

    },
});

export default function Paragraph({ paragraph, checked }) {
    const classes = useStyles();
    const ternary = (paragraph === paragraphs[0] || paragraph === paragraphs[2]) ? true : false;

    return (
        <Collapse in={checked} {...(checked ? { timeout: paragraph.time } : {})}>
            <Box bgcolor="#f5f5f5" p='8rem'>
                <Grid container {...(ternary ? { justify: 'flex-start'} : { justify: 'flex-end' })}>
                    <Typography
                        variant="h5"
                        component="h1"
                        className={classes.title}
                    >
                        {paragraph.title}
                    </Typography>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="../roadBackground.jpg"
                                title="Car Picture"
                            />
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid container align='left'>
                    <Typography
                        variant="body2"
                        component="p"
                        className={classes.desc}
                    >
                        {paragraph.description}
                    </Typography>
                </Grid>
            </Box>
        </Collapse>
    )
}