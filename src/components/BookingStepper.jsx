import React, { useState, useEffect } from "react";
import { Stepper, Step, StepLabel, Button, Box, Typography, useMediaQuery } from "@mui/material";
import PersonalInformation from "./PersonalInformation";
import SelectPlan from "./SelectPlan";

const BookingStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [userData, setUserData] = useState(null);
  const isMobile = useMediaQuery("(max-width:600px)"); // Detect small screens

  const steps = [
    "Personal Information",
    "Select & Compare Plan",
    "Document under Verification",
    "Down Payment",
    "Pick your Car",
    "Review & Confirm",
  ];

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("carBookingData"));
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
        return <PersonalInformation userData={userData} />;
      case 1:
        return <SelectPlan />;
      case 2:
        return <Typography variant="h6">Your documents are under verification.</Typography>;
      case 3:
        return <Typography variant="h6">Proceed with the down payment.</Typography>;
      case 4:
        return <Typography variant="h6">Pick your car.</Typography>;
      case 5:
        return <Typography variant="h6">Review the details and confirm your booking.</Typography>;
      default:
        return null;
    }
  };

  if (!userData) {
    return <Typography>No booking data found. Please start the booking process.</Typography>;
  }

  return (
    <Box sx={{ width: "100%", p: 1 }}>
      {/* Stepper */}
      <Stepper activeStep={activeStep} alternativeLabel={!isMobile} orientation={isMobile ? "vertical" : "horizontal"}>
        {/* Display only the active step on mobile */}
        {!isMobile ? (
          steps.map((label, index) => (
            <Step key={index}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))
        ) : (
          <Step>
            <StepLabel>{steps[activeStep]}</StepLabel>
          </Step>
        )}
      </Stepper>

      <Box sx={{ mt: 2, p: 2, textAlign: "center" }}>
        {renderStepContent(activeStep)}
      </Box>

      {/* Buttons with Responsive Styling */}

      <Box  sx={{ mt: 1, display: "flex", flexDirection: isMobile ? "row" : "row", gap: 2, alignItems: "center",justifyContent: "space-between" }}>
      <Box sx={{ mt: 2, display: "flex", flexDirection: isMobile ? "column" : "row", gap: 2, }}>
        <Button variant="contained" onClick={handleBack} disabled={activeStep === 0} sx={{ width: isMobile ? "100%" : "auto" }}
          style={{
            // background: 'linear-gradient(to right, #8E2DE2, #4A00E0)',
            color: 'white',
            padding: '2px 12px',
            borderRadius: '50px',
            fontWeight: '600',
            textTransform: 'capitalize',
            transition: 'all 0.3s ease',
            marginTop: '10px'
          }}
          onMouseOver={(e) => e.target.style.boxShadow = '0px 0px 15px rgba(0, 0, 0, 0.3)'}
          onMouseOut={(e) => e.target.style.boxShadow = 'none'}>
          Back
        </Button>
      </Box>
      <Box sx={{ mt: 2, display: "flex", flexDirection: isMobile ? "column" : "row", gap: 2 ,alignItems: "center" ,justifyContent: "center" }}>


      <Button variant="contained" onClick={handleNext} disabled={activeStep === steps.length - 1} sx={{ width: isMobile ? "100%" : "auto" }}
          style={{
            // background: 'linear-gradient(to right, #8E2DE2, #4A00E0)',
            color: 'white',
            padding: '2px 12px',
            borderRadius: '50px',
            fontWeight: '600',
            textTransform: 'capitalize',
            transition: 'all 0.3s ease',
            marginTop: '10px'
          }}
          onMouseOver={(e) => e.target.style.boxShadow = '0px 0px 15px rgba(0, 0, 0, 0.3)'}
          onMouseOut={(e) => e.target.style.boxShadow = 'none'}
        >
          Next
        </Button>
      </Box>
      </Box>
        
    </Box>
  );
};

export default BookingStepper;
