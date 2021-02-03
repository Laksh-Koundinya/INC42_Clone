import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginRight:"600px",
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
   
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    padding:"2ch",
    [theme.breakpoints.up('sm')]: {
      width: '29ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SubscriptionBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style = {{backgroundColor:"black",height:"140px",paddingTop:"20px"}}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
          
          </IconButton>
          <Typography className={classes.title} variant="h5" noWrap >
          Stay on top - Get the daily news from
          <br></br> 
          <span><img src = "https://inc42.com/wp-content/themes/inc42/img/inc42-footer-logo.svg" style = {{height:"17px"}}/></span> in your inbox
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
           
            </div>
            <InputBase
              placeholder="Email ID"
             
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            
            />
             
          </div>
          <Button variant="contained" color="secondary" style = {{marginLeft:"-121px",backgroundImage:"linear-gradient(90deg,#d81757 0%,#e4381b 100%)"}}>
              SUBSCRIBE
            </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}