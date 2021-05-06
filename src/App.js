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
    //height: '100%',
    //minHeight: '100vh',
    backgroundImage: `url(${roadBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh',
    //background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
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

//export default App;

/*const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/roadBackground.jpg'})`
  }
}));*/