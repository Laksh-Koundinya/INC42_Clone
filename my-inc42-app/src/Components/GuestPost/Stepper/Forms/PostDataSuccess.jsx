import { Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import {useDispatch} from "react-redux"
import { postData } from '../../../../Redux/PostData/actionCreator';

const useStyles = makeStyles((theme) => ({
  
  input:{
    color:"white",
    textAlign:"center",
    marginLeft:theme.spacing(15)
  }
}));
const Success = ({values}) => {

  const classes = useStyles();
  console.log(values)
  const dispatch = useDispatch()

  dispatch(postData(values))

    return (
        <div>
          <Typography variant="h2" align="center" className={classes.input} >
        Thank you!
       </Typography>
       <Typography component="p" align="center" className={classes.input}>
         You will get an email with further instructions
       </Typography>
        </div>
    )
}

export default Success
