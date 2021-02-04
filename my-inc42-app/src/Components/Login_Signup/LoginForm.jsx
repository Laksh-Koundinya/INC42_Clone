import React,{useState} from 'react'
import { Button, Checkbox, Divider, FormControlLabel, Grid, Link, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { loginUserData } from '../../Redux/LoginRedux/actionCreator';
import {useDispatch, useSelector} from "react-redux"
import { useHistory } from 'react-router-dom';




const useStyles = makeStyles((theme) => ({
    button: {
      '& > *': {
        margin: theme.spacing(1),
        width:"90%",
        borderRadius:"20px",
        height:"40px"
      },
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      borderRadius:"20px"
    },
    text:{
        background:"rgba(255, 255, 255, 0.12)",
        borderRadius:"30px",
        margin:"15px",
        textAlign:'center',
        color:"white",
        width:"85%",
        height:"50px"
    },
    
  
  }));
function LoginForm() {

  const classes = useStyles();
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const isAuth = useSelector(state => state.login.isAuth)
  const dispatch = useDispatch()
  const history = useHistory()

  const handleLogin = (e) => {
    e.preventDefault()
  
    dispatch(loginUserData({email,password}))
    console.log({email,password})
    console.log(history)
    if(isAuth) {
        history.goBack()
    }
  }
    return (
        <div>
            <form>
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
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="secondary"
                    className={classes.submit}
                    onClick={handleLogin}
                >
                    LOGIN
                </Button>
            </form>
        </div>
    )
}

export default LoginForm
