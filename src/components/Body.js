import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useWindowPosition from '../hook/useWindowPosition';
import Paragraph from './Paragraph';
import paragraphs from '../static/paragraphs.js'
import { spacing } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { positions } from '@material-ui/system';
import { flexbox } from '@material-ui/system';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    //display: 'flex',
    //justifyContent: 'center',
    //alignItems: 'flex-end',
  },
}));

export default function Body() {
  const classes = useStyles();
  const checked = useWindowPosition('header');
  return (
    <div className={classes.root} id="body">
        <Grid 
        container
        direction="column"
        >
        <Grid>
            <Paragraph paragraph={paragraphs[0]} checked={checked} />
        </Grid>
        <Box>
            <Paragraph paragraph={paragraphs[1]} checked={checked} />
        </Box>
        <Box>
            <Paragraph paragraph={paragraphs[2]} checked={checked} />
        </Box>
        </Grid>
    </div>
  );
}