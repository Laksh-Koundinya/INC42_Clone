import React,{useState} from 'react'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Typography } from '@material-ui/core';
import PostPageStart from './Stepper/PostPageStart';
import StepForm from './Stepper/StepperForm';

const useStyles = makeStyles((theme) => ({
  root: {
    width:"100%",
    background:"black",
    height:"600px",
    display:"block",
    display: 'flex',
    background: `url(${"https://pages.inc42.com/wp-content/uploads/2017/07/19989700_1396377023771461_3197395898214814491_n.jpg"}) fixed no-repeat`,
    backgroundSize:"100%",
    color:"white",
    opacity:"0.85",
  },
  bottom :{
    backgroundColor:"black",
    height:"600px",
    width:"120%",
    background:"black",
    display:"block",
    display:"flex",
  },
  textBox:{
    display:"flex",
     justifyContent:"center",
     margin:"20% 0% 20% 0%",
    flexDirection:"column",
    textAlign:"center",
    position:"relative"
  },
  main:{
    background:"black"
  },
  left:{
    minWidth:"50%",
    flexBasis:"50%",
    background:"green"
  },
  right:{
    display:"flex",
    // background:"white",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    // marginLeft:"2%",
    marginRight:"2%",
    flexWrap:"wrap"
  },
  buttonBox:{
    backgroundColor:'#212121',
    width:"140%",
    padding:"5%",
    marginTop:"5%"
  }
}));



function SubmitPost() {
    const classes = useStyles();
    const [flag,setFlag] = useState(true)
    const handleFlag = () => {
      setFlag(false)
    }
    return (
      <div className={classes.main}>
        <div className={classes.root}>
        <Container maxWidth="xl" >
        <Box  className={classes.textBox}>
            <Typography component="div" variant="h2">Submit Your Guest Post</Typography>
            <Typography component="div" variant="h5">Get a chance to be featured on Inc42</Typography>
          </Box>
        </Container>
        </div>
        <Container className={classes.bottom}>
          <Box className={classes.left}></Box>
          <Box className={classes.right}>
            {flag ? <>
              <PostPageStart />
            <Box component="div" className={classes.buttonBox}>
            <Button variant="contained" color="secondary" onClick={handleFlag}>
              Start
            </Button>
            </Box>
            </>:<>
            <StepForm />
            </>}
          </Box>
        </Container>
        </div>
    )
}

export default SubmitPost
