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

const PostDataFormName2 =  ({
  handleNext,
  handleChange,
  handleBack,
  values: { lastName},
  formErrors
}) => {
        const classes = useStyles();
        const isValid = lastName.length && !formErrors.lastName
      return (
    <>
    <Grid container spacing={2} noValidate>
        <Grid className={classes.root} >
        <Typography className={classes.input} component="div" variant="h4">Last Name *</Typography>
          <TextField
            inputProps={{ style: { fontFamily: 'Arial', color: 'white',borderBottom:"2px solid white"}}}
            fullWidth
            label="Last Name"
            name="lastName"
            placeholder="Your last name"
            margin="normal"
            value={lastName || ""}
            onChange={handleChange}
            error={!!formErrors.lastName}
            helperText={formErrors.lastName}
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
          // disabled={!isValid}
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
