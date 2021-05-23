import logo from "./logo.svg";
import "./App.css";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core'
import roadBackground from './roadBackground.jpg'
import Header from './components/Header.js'
import Body from './components/Body.js'
import Footer from './components/Footer.js'

const useStyles = makeStyles({
  root: {
    backgroundImage: `url(${roadBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh',
  },
});

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Body />
      <Footer />
    </div>
  );
}