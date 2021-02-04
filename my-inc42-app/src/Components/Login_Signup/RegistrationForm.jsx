import React,{useState} from 'react'
import { Button, Checkbox, Divider, FormControlLabel, Grid, Link, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {useDispatch, useSelector} from "react-redux"
import { registrationUser } from '../../Redux/RegisterRedux/actionCreator';
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
function RegistrationForm () {
    const classes = useStyles();
    const dispatch = useDispatch()
    const history = useHistory()
    const isRegister = useSelector(state => state.register.isRegister)

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [fname,setFname] = useState("")
    const [lname,setLname] = useState("")
    const [company,setCompany] = useState("")
    const [phone,setPhone] = useState("")
    const [seniority,setSeniority] = useState("")

  const handleRegister = (e) => {
    e.preventDefault()
    const payload = {
      name: fname+" "+lname,
      email: email,
      password: password,
      username: email,
      mobile: phone,
      description: seniority 
    }
    dispatch(registrationUser(payload))
    console.log(...payload)
    history.goBack()
  }

    return (
        <div>
            <form>
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
                </Grid>
                <Typography variant="caption">BY CLICKING BELOW TO SIGN UP, YOU'RE AGREEING TO OUR TERMS OF USE AND PRIVACY POLICY </Typography>
                <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
                onClick={handleRegister}
            >
                SIGN UP
            </Button>
            </form>
        </div>
    )
}

export default RegistrationForm
