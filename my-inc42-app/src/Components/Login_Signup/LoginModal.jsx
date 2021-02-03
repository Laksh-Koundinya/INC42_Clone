import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Button, Checkbox, Divider, FormControlLabel, Grid, Link, TextField, Typography } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GoogleAuth from './GoogleAuth';

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
    height:"500px",
    width:"400px",
    padding: theme.spacing(2, 4, 3),
    borderRadius:"20px",
    display:"block",
    overflowY:"scroll"
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
     marginTop:"10px"
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
      padding:theme.spacing(1),
      margin:"5px",
      textAlign:'center'
  }

}));

export default function LoginModal() {


  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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

                    <TextField
                        className={classes.text}
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        className={classes.text}
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Grid container>
                    <Grid item>
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="STAY LOGGED IN"
                                />
                        </Grid>
                
                        <Grid item xs>
                        <Link href="#" variant="body2" color="secondary">
                            I FORGOT MY PASSWORD
                        </Link>
                        </Grid>
                </Grid>
          
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="secondary"
                    className={classes.submit}
                >
                    LOGIN
                </Button>
                <Link href="#" variant="body2" color="secondary">
                        I DONT HAVE AN ACCOUNT
                    </Link>
            </form>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
