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

const PostDataFormMessage =  ({
  handleNext,
  handleChange,
  handleBack,
  values: { message},
}) => {
        const classes = useStyles();
        const isValid = message.length || true
      return (
    <>
    <Grid container spacing={2} noValidate>
        <Grid className={classes.root} >
        <Typography className={classes.input} component="div" variant="h4">Message *</Typography>
          <TextField
            inputProps={{ style: { fontFamily: 'Arial', color: 'white',borderBottom:"2px solid white"}}}
            required
            fullWidth
            label="Message"
            name="message"
            value={message || ""}
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

export default PostDataFormMessage
