import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      justifyContent:"start"
    }
  },
  input:{
    color:"white"
  }
}));

const PostDataFormName =  ({
  handleNext,
  handleChange,
  values: { firstName},
  formErrors
}) => {
        const classes = useStyles();
        const isValid = firstName.length && !formErrors.firstName
      return (
    <>
    <Grid container spacing={2} noValidate>
        <Grid className={classes.root} >
        <Typography className={classes.input} component="div" variant="h4">First Name *</Typography>
          <TextField
            inputProps={{ style: { fontFamily: 'Arial', color: 'white',borderBottom:"2px solid white"}}}
            fullWidth
            label="First Name"
            name="firstName"
            placeholder="Your first name"
            margin="normal"
            value={firstName || ""}
            onChange={handleChange}
            error={!!formErrors.firstName}
            helperText={formErrors.firstName}
            required
          />
        </Grid>
    </Grid>
    <div
    style={{ display: "flex", marginTop: 50, justifyContent: "flex-end" }}
  >
    <Button
      variant="contained"
      disabled={!isValid}
      color="primary"
      onClick={isValid ? handleNext : null}
    >
      Next
    </Button>
  </div>
    </>
  );
}

export default PostDataFormName
