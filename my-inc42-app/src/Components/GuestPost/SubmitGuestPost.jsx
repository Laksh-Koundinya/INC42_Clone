import React,{useState} from 'react'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Typography } from '@material-ui/core';
import PostPageStart from './Stepper/PostPageStart';
import StepForm from './Stepper/StepperForm';
import StaticLeftBoxData from './StaticLeftBoxData';

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
    height:"auto",
    width:"100%",
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
    maxWidth:"60%",
    flexBasis:"60%",
    textAlign:'start',
    color:"white",
    padding:"4%"
  },
  right:{
    display:"flex",
    flexBasis:"30%",
    // background:"white",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    padding:"8%"
  },
  buttonBox:{
    backgroundColor:'#212121',
    width:"100%",
    padding:"5% 10% 5% 10%"
  },
  start:{
    marginLeft:"35%"
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
          <Box className={classes.left}>
            <StaticLeftBoxData />
          </Box>
          <Box className={classes.right}>
            {flag ? <>
              <PostPageStart />
            <Box component="div" className={classes.buttonBox}>
            <Button variant="contained" color="secondary" onClick={handleFlag} className={classes.start}>
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
