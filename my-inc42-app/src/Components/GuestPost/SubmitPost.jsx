import React from 'react'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width:"1000px",
    display:"block",
    background:"black",
    height:"1000px",
    backgroundImage: `url(${"https://i.pinimg.com/originals/07/4e/a1/074ea10d689f8e899dc9814495028a15.png"})`
  },
  image:{

  }
}));

function SubmitPost() {
    const classes = useStyles();
    return (
        <>
        <Container maxWidth="xl" className={classes.root}>
        
        </Container>
      </>
    )
}

export default SubmitPost
