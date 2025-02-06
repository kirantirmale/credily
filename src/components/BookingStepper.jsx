import React, { useState, useEffect } from 'react';
import { Stepper, Step, StepLabel, Button, Box, Typography, TextField, Grid } from '@mui/material';
import PersonalInformation from './PersonalInformation';
import SelectPlan from './SelectPlan';

const BookingStepper = () => {
  // State for active step
  const [activeStep, setActiveStep] = useState(0);
  const [userData, setUserData] = useState(null);

  // Steps for the stepper
  const steps = [
    "Personal Information",
    "Select & Compare Plan",
    "Document under Verification",
    "Down Payment",
    "Pick your Car",
    "Review & Confirm"
  ];

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('carBookingData'));
    if (data) {
        setUserData(data);
    }
}, []);

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };


  const renderStepContent = (step) => {
    if (!userData) return <Typography>Loading...</Typography>;

    switch (step) {
      case 0:
        return (
          <>
          <PersonalInformation userData={userData} />
          
          </>
        );
      case 1:
        return (
         <>
         <SelectPlan/>
         </>
        );
      case 2:
        return (
          <div>

          </div>
        );
      case 3:
        return (
          <div>

          </div>
        );
      case 4:
        return (
          <div>

          </div>
        );
      case 5:
        return (
          <div>
            <Typography variant="h6">Review the details and confirm your booking.</Typography>
          </div>
        );
      default:
        return null;
    }
  };

  if (!userData) {
    return <Typography>No booking data found. Please start the booking process.</Typography>;
  }

  return (
    <div>
      <Stepper activeStep={activeStep} alternativeLabel >
        {steps.map((label, index) => (
          <Step key={index}  >
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box sx={{ mt: 2 }}>
        {renderStepContent(activeStep)}
      </Box>

      <Box sx={{ mt: 2 }}>
        <Button
          variant="contained"
          //   color="secondary"
          onClick={handleBack}
          disabled={activeStep === 0}

        >
          Back
        </Button>
        <Button
          variant="contained"
          //   color="primary"
          onClick={handleNext}
          disabled={activeStep === steps.length - 1}
          sx={{ ml: 2 }}
        >
          Next
        </Button>
      </Box>
    </div>
  );
};

export default BookingStepper;
