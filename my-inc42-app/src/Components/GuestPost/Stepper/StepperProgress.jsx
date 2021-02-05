import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    // maxWidth: 400,
    height:"100px",
    width:"400px",
    backgroundColor:"black",
    color:"white"
  },
  btn:{
      color:"white"
  }
});

export default function ProgressMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <MobileStepper
      variant="progress"
      steps={7}
      position="static"
      activeStep={activeStep}
      className={classes.root}
      nextButton={
        <Button className={classes.btn} size="small" onClick={handleNext} disabled={activeStep === 6}>
          Next
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </Button>
      }
      backButton={
        <Button className={classes.btn} size="small" onClick={handleBack} disabled={activeStep === 0} >
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          Back
        </Button>
      }
    />
  );
}
