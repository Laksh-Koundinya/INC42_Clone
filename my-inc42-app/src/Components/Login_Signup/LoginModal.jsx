import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Button, Divider,  Link, Typography } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GoogleAuth from './GoogleAuth';
import "./LoginModal.css"
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import {useSelector} from "react-redux"

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow:"scroll",
    position:"absolute",
    textAlign:"center",
  },
 
  paper: {
    backgroundColor: "black",
    color:"white",
    height:"600px",
    width:"380px",
    padding: theme.spacing(2, 4, 3),
    borderRadius:"20px",
    display:"block",
    overflowY:"scroll",
    marginTop:"100px"
  },
  closeButton: {
    position: 'relative',
    right: theme.spacing(1),
    bottom:theme.spacing(5),
    left:theme.spacing(2),
    color: theme.palette.grey[300],
    marginLeft:"90%"
  },
  head:{
     marginTop:"30px"
  },
  button: {
    '& > *': {
      margin: theme.spacing(1),
      width:"90%",
      borderRadius:"20px",
      height:"40px"
    },
  },
  divider:{
      background:"gray",
      margin:theme.spacing(2),
  },
  buttonStyle: {
    borderRadius: "2px",
    backgroundColor: "#f2abac",
    color: "red",
    height: "20px",
    marginRight: "10px",
  },

}));

export default function LoginModal() {


  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [show,setShow ] = useState(false)
  const [google,setGoogle] = useState(false)
  const isAuth = useSelector(state => state.login.isAuth)
  const isRegister = useSelector(state => state.register.isRegister)
  
  useEffect(() => {
    if(isAuth) {
      setOpen(false)
    }
    if(isRegister) {
      setShow(false)
    }
  }, [isAuth,isRegister])

 

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRegistration = () => {
    setShow(!show)
    console.log(show,"-------show")
  }

  return (
    <div>
      <Button className={classes.buttonStyle} color="inherit" onClick={handleOpen} >
                {isAuth || google ? "MY ACCOUNT" : "LOGIN"}
              </Button>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className={classes.head}>
                <img src="https://cdn.inc42.com/wp-content/uploads/2018/11/PlusNewLogo-1.png" alt="logo" width="150"/>
                <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
                        <CloseIcon />
                </IconButton>
            </div>
            <Typography variant="h4" component="h1">{show ? "Sign Up" : "Login"}</Typography>
            <Typography variant="h6"  component="p" color="#f1f8e9" >{show ? "Sign up a new account using a social account": "Login into your account using a social account"}</Typography>
            <div className={classes.button}>
            <Button variant="contained" color="primary">
                <FacebookIcon />
                Facebook
            </Button>
            </div>
            <div className={classes.button}>
            <Button variant="contained" color="primary">
                <GoogleAuth setOpen= {setOpen} setGoogle={setGoogle}/> 
                
            </Button>
            </div>
            <div className={classes.button}>
            <Button variant="contained" color="primary">
                <LinkedInIcon />
                LinkedIn
            </Button>
            </div>
            <Divider variant="middle" className={classes.divider} />
            <div>

              {show ? <RegistrationForm /> : <LoginForm handleOpen={handleOpen} />}

                <Link href="#" variant="body2" color="secondary" onClick={handleRegistration}>
                        {show ? "I HAVE AN ACCOUNT" : "I DONT HAVE AN ACCOUNT"}
                    </Link>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
