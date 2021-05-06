import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse, Menu, useTheme, useMediaQuery } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
import MenuItem from "@material-ui/core/MenuItem";


const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Nunito',
    },
    appBar: {
        background: 'none',
        color: 'red',
        backgroundColor: '#f5f5f5'
    },
    appbarWrapper: {
        width: '80%',
        margin: '0 auto',
    },
    appbarTitle: {
        flexGrow: '1',
    },
    menuButton: {
        fontSize: '2rem',
    },
    container: {
       textAlign: 'center', 
    },
    title: {
        fontSize: '4.5rem',
    },
    goDown: {
        fontSize: '4rem',
    }
});

export default function Header() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, []);
    /*const [anchorEl, setAnchorEl ] = React.useState(null);
    const handleClose = (element) => {
        element.scrollIntoView();
        setAnchorEl(null)
    }
    const openMenu = (event) => {
        setAnchorEl(event.currentTarget)
    }*/
    return (
        <div className={classes.root} id="header">
            <AppBar className={classes.appBar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                    <h1 className={classes.appbarTitle}>Monza Motorsports</h1>
                    <IconButton className={classes.menuButton} /*onClick={openMenu}*/>
                        <SortIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Collapse 
            in={checked}
            {...(checked ? { timeout: 1000 } : {})}
            collapsedHeight={50}>
            <div className={classes.container}>
                <h1 className={classes.title}>Welcome home</h1>
                <Scroll to="body" smooth={true}>
                    <IconButton>
                        <ExpandMoreIcon className={classes.goDown}/>
                    </IconButton >
                </Scroll>
            </div>
            </Collapse>
        </div>
    )
}

//code to be placed underneath line 65
//would create a dropdown menu for the sortIcon in the top-right of the screen
//unable to get it to work with the scrollIntoView function, could use help
/*<Menu
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose(document.getElementById('footer'))}>About Us</MenuItem>
                    </Menu>*/