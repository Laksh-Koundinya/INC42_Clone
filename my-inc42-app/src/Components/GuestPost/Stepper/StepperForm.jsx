import React, { useState } from "react";
import Stepper from '@material-ui/core/Stepper';
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import formValidation from "./FormValidation/FormValidation"
import PostDataFormName from './Forms/PostDataFormName';
import PostDataFormName2 from './Forms/PostDataFormName2';
import PostDataFormEmail from './Forms/PostDataFormEmail';
import PostDataFormPhone from './Forms/PostDataFormPhone';
import PostDataFormTitle from './Forms/PostDataFormTitle';
import PostDataFormMessage from './Forms/PostDataFormMessage';
import PostDataFormImage from './Forms/PostDataFormImage';
import Success from "./Forms/PostDataSuccess";

const labels = ["First Step", "Second Step", "third","fourth","fifth","sixth","Final"];

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  title: "",
  message: "",
  phone: "",
  image:[]
};

const fieldsValidation = {
  firstName: {
    error: "",
    validate: "text",
    minLength: 2,
    maxLength: 20
  },
  lastName: {
    error: "",
    validate: "text",
    minLength: 2,
    maxLength: 20
  },
  email: {
    error: "",
    validate: "email"
  },
  title: {
    error: "",
    validate: "text",
    minLength: 3,
    maxLength: 50
  },
  phone: {
    error: "",
    validate: "phone",
    maxLength: 15
  },
  message: {
    error: "",
    validate: "text",
    minLength: 15,
    maxLength: 200
  },
  image:{}
};

const StepForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  // Proceed to next step
  const handleNext = () => setActiveStep((prev) => prev + 1);
  // Go back to prev step
  const handleBack = () => setActiveStep((prev) => prev - 1);

  const handleUploadClick = event => {
    var url = URL.createObjectURL(event.target.files[0])
    console.log(url); // Would see a path?
    formValues.image.push(url)

  };
  // Handle form change
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Set values
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    // set errors
    const error = formValidation(name, value, fieldsValidation) || "";

    setFormErrors({
      [name]: error
    });
  };

  const handleSteps = (step) => {
    switch (step) {
      case 0:
        return (
          <PostDataFormName
            handleNext={handleNext}
            handleChange={handleChange}
            values={formValues}
            formErrors={formErrors}
          />
        );
      case 1:
        return (
          <PostDataFormName2
            handleNext={handleNext}
            handleBack={handleBack}
            handleChange={handleChange}
            values={formValues}
            formErrors={formErrors}
          />
        );
        case 2:
            return (
              <PostDataFormEmail
                handleNext={handleNext}
                handleBack={handleBack}
                handleChange={handleChange}
                values={formValues}
                formErrors={formErrors}
              />
            );
        case 3:
        return (
          <PostDataFormPhone
            handleNext={handleNext}
            handleBack={handleBack}
            handleChange={handleChange}
            values={formValues}
            formErrors={formErrors}
          />
        );
        case 4:
        return (
          <PostDataFormTitle
            handleNext={handleNext}
            handleBack={handleBack}
            handleChange={handleChange}
            values={formValues}
          />
        );
        case 5:
        return (
          <PostDataFormMessage
            handleNext={handleNext}
            handleBack={handleBack}
            handleChange={handleChange}
            values={formValues}
          />
        );
      
        case 6:
        return (
          <PostDataFormImage
            handleNext={handleNext}
            handleBack={handleBack}
            handleUploadClick={handleUploadClick}
            values={formValues}
          />
        );
      default:
        break;
    }
  };

  return (
    <>
      {activeStep === labels.length ? (
        // Last Component
        <Success values = {formValues}/>
      ) : (
        <>
          
          <Stepper
            activeStep={activeStep}
            style={{ margin: "30px 0 15px" }}
            alternativeLabel
          >
            {labels.map((label) => (
              <Step key={label}>
                <StepLabel></StepLabel>
              </Step>
            ))}
          </Stepper>
          {handleSteps(activeStep)}
        </>
      )}
    </>
  );
};

export default StepForm;