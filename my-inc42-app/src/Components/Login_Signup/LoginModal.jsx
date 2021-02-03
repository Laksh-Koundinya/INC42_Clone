import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Button, Checkbox, Divider, FormControlLabel, Grid, Link, TextField, Typography } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GoogleAuth from './GoogleAuth';
import {useDispatch, useSelector} from "react-redux"
import "./LoginModal.css"
import { loginUserData } from '../../Redux/LoginRedux/actionCreator';
import { registrationUser } from '../../Redux/RegisterRedux/actionCreator';

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
  submit: {
    margin: theme.spacing(3, 0, 2),
    borderRadius:"20px"
  },
  text:{
      background:"rgba(255, 255, 255, 0.12)",
      borderRadius:"30px",
      margin:"5px",
      textAlign:'center',
      color:"white",
      width:"85%",
      height:"50px"
  },
  

}));

export default function LoginModal() {


  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [show,setShow ] = useState(false)

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [fname,setFname] = useState("")
  const [lname,setLname] = useState("")
  const [company,setCompany] = useState("")
  const [phone,setPhone] = useState("")
  const [seniority,setSeniority] = useState("")

const isAuth = useSelector(state => state.login.isAuth)
const dispatch = useDispatch()
console.log(isAuth)

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

  const handleRegister = (e) => {
    e.preventDefault()
    const payload = {
      name: fname+" "+lname,
      email: email,
      password: password,
      username: company,
      mobile: phone,
      description: seniority 
    }
    dispatch(registrationUser(payload))
    console.log(...payload)
  }

  const handleLogin = (e) => {
    e.preventDefault()
  
    dispatch(loginUserData({email,password}))
    console.log({email,password})
  }


  return (
    <div>
      <button type="button" onClick={handleOpen}>
        modal
      </button>
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
            <Typography variant="h4" component="h1">Login</Typography>
            <Typography variant="h6"  component="p" color="#f1f8e9" >Login into your account using a social account</Typography>
            <div className={classes.button}>
            <Button variant="contained" color="primary">
                <FacebookIcon />
                Facebook
            </Button>
            </div>
            <div className={classes.button}>
            <Button variant="contained" color="primary">
                <GoogleAuth /> 
                
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
                <form>
                    {show ? <>

                      <TextField
                        className={classes.text}
                        InputProps={{ disableUnderline: true ,style: {color: "white",marginLeft:"20px"}}}
                        required
                        fullWidth
                        label="FIRST NAME"
                        name="fname"
                        type="text"
                        autoFocus
                        value={fname}
                        onChange={(e)=>setFname(e.target.value)}
                    />
                    <TextField
                        className={classes.text}
                        InputProps={{ disableUnderline: true ,style: {color: "white",marginLeft:"20px"}}}
                        required
                        fullWidth
                        label="LAST NAME"
                        name="lname"
                        type="text"
                        autoFocus
                        value={lname}
                        onChange={(e)=>setLname(e.target.value)}
                    />
                    <TextField
                        className={classes.text}
                        InputProps={{ disableUnderline: true ,style: {color: "white",marginLeft:"20px"}}}
                        required
                        fullWidth
                        label="EMAIL"
                        name="Email"
                        autoFocus
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        className={classes.text}
                        InputProps={{ disableUnderline: true ,style: {color: "white",marginLeft:"20px"}}}
                        required
                        fullWidth
                        label="PASSWORD"
                        name="password"
                        type="password"
                        autoFocus
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <TextField
                        className={classes.text}
                        InputProps={{ disableUnderline: true ,style: {color: "white",marginLeft:"20px"}}}
                        required
                        fullWidth
                        label="COMPANY NAME"
                        name="company"
                        autoFocus
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                    />
                    <TextField
                        className={classes.text}
                        InputProps={{ disableUnderline: true ,style: {color: "white",marginLeft:"20px"}}}
                        required
                        fullWidth
                        label="SENIORITY"
                        name="seniority"
                        type="text"
                        autoFocus
                        value={seniority}
                        onChange={(e) => setSeniority(e.target.value)}
                    />
                    <TextField
                        className={classes.text}
                        InputProps={{ disableUnderline: true ,style: {color: "white",marginLeft:"20px"}}}
                        required
                        fullWidth
                        label="PHONE NUMBER"
                        name="phone"
                        type="number"
                        autoFocus
                        value={phone}
                        onChange={(e)=>setPhone(e.target.value)}
                    />
                    
                    </>:<>


                    <TextField
                        className={classes.text}
                        fullWidth
                        InputProps={{ disableUnderline: true ,style: {color: "white",marginLeft:"20px"}}}
                        label="EMAIL"
                        type="text"
                        autoFocus
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        InputProps={{ disableUnderline: true ,style: {color: "white",marginLeft:"20px"}}}
                        className={classes.text}
                        fullWidth
                        value={password}
                        label="PASSWORD"
                        type="text"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    
                    
                    </>}
                    
                    <Grid container>
                    <Grid item>
                            <FormControlLabel
                                control={<Checkbox value="remember"  
                                style ={{
                                  color: "white",
                                }}
                                />}

                                label="STAY LOGGED IN"
                                />
                        </Grid>
                
                        <Grid item xs>
                        <Link href="#" variant="body2" color="secondary">
                            I FORGOT MY PASSWORD
                        </Link>
                        </Grid>
                </Grid>
          
                {show ?
                <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
                onClick={handleRegister}
            >
                SIGN UP
            </Button> : <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="secondary"
                    className={classes.submit}
                    onClick={handleLogin}
                >
                    LOGIN
                </Button>
              
              }
                <Link href="#" variant="body2" color="secondary" onClick={handleRegistration}>
                        {show ? "I HAVE AN ACCOUNT" : "I DONT HAVE AN ACCOUNT"}
                    </Link>
            </form>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
