import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button, Grid, Typography } from "@material-ui/core";

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
  }
}));

const PostDataFormTitle =  ({
  handleNext,
  handleChange,
  handleBack,
  values: { title},
}) => {
        const classes = useStyles();
        const isValid = title.length || true
      return (
    <>
    <Grid container spacing={2} noValidate>
        <Grid className={classes.root} >
        <Typography className={classes.input} component="div" variant="h4">Title Of The Article *</Typography>
          <TextField
            inputProps={{ style: { fontFamily: 'Arial', color: 'white',borderBottom:"2px solid white"}}}
            required
            fullWidth
            label="Title of the Article"
            name="title"
            value={title || ""}
            onChange={handleChange}
            margin="normal"
          />
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

export default PostDataFormTitle
