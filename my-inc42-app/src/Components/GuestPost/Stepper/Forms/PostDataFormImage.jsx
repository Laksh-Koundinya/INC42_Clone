import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Typography } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import blue from "@material-ui/core/colors/blue";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
      justifyContent:"start"
    }
  },
  input:{
    color:"white"
  },
  button: {
    color: blue[900],
    margin: 10
  },
}));

const PostDataFormImage =  ({
  handleNext,
  handleUploadClick,
  handleBack,
  values: { image},
}) => {
        const classes = useStyles();
        const isValid =  image || true


      return (
    <>
    <Grid container spacing={2} noValidate>
        <Grid className={classes.root} >
        <Grid container justify="center" alignItems="center">

        <Typography className={classes.input} component="div" variant="h4">Upload an Image *</Typography>
        <input
              accept="image/*"
              className={classes.input}
              multiple
              type="file"
              name = "image"
              onChange={handleUploadClick}
            />
              </Grid>

        </Grid>
    </Grid>
    <div
    style={{ display: "flex", marginTop: 50, justifyContent: "flex-end" }}
  >
    <Button
          variant="contained"
          color="default"
          onClick={handleBack}
          style={{ marginRight: 10 }}
        >
          Back
        </Button>
        <Button
          variant="contained"
          disabled={!isValid}
          color="primary"
          onClick={handleNext}
        >
          Next
        </Button>
  </div>
    </>
  );
}

export default PostDataFormImage
