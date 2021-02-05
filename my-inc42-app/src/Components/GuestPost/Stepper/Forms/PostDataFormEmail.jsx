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

const PostDataFormName2 =  ({
  handleNext,
  handleChange,
  handleBack,
  values: { email},
  formErrors
}) => {
        const classes = useStyles();
        const isValid = email.length && !formErrors.email
      return (
    <>
    <Grid container spacing={2} noValidate>
        <Grid className={classes.root} >
        <Typography className={classes.input} component="div" variant="h4">Email *</Typography>
          <TextField
            inputProps={{ style: { fontFamily: 'Arial', color: 'white',borderBottom:"2px solid white"}}}
            fullWidth
            label="Email"
            name="email"
            placeholder="Your email address"
            type="email"
            value={email || ""}
            onChange={handleChange}
            margin="normal"
            error={!!formErrors.email}
            helperText={formErrors.email}
            required
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

export default PostDataFormName2
