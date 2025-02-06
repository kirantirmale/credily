import { useEffect, useState } from "react";
import {
  Box,
  Button,
  TextField,
  RadioGroup,
  FormControl,
  FormControlLabel,
  Radio,
  Typography,
  Slider,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  Modal
} from "@mui/material";
import BookingStepper from "./BookingStepper";

function BookCar() {
  const [modal, setModal] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otp, setOtp] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [mobile, setMobile] = useState("");
  const [financingType, setFinancingType] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [bank, setBank] = useState("");
  const [incomeSource, setIncomeSource] = useState("");
  const [income, setIncome] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [estimatedAmount, setEstimatedAmount] = useState([0, 100000]);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const savedMobileNumber = localStorage.getItem("carBookingData");

    if (savedMobileNumber) {
      setMobile(savedMobileNumber); 
      setIsAuthenticated(true); 
    }
  }, []);


  const handleHereWeGo = (e) => {
    e.preventDefault();
    if (!agreeTerms) return;
    setShowOtpModal(true); 
  };

  const handleOtpSubmit = () => {
    if (otp === "1234") {
      const formData = {
        nationalId,
        month,
        year,
        mobile,
        financingType,
        make,
        model,
        bank,
        incomeSource,
        income,
        companyName,
        estimatedAmount,
      };
  
      // Store data in localStorage
      localStorage.setItem("carBookingData", JSON.stringify(formData));
  
      
      
      setNationalId("");
      setMonth("");
      setYear("");
      setMobile("");
      setFinancingType("");
      setMake("");
      setModel("");
      setBank("");
      setIncomeSource("");
      setIncome("");
      setCompanyName("");
      setEstimatedAmount([0, 100000]);
      setAgreeTerms(false);
      setOtp("");
      
      setShowOtpModal(false); 
      setIsAuthenticated(true);  
      window.location.reload();  
    } else {
      alert("Incorrect OTP. Please try again.");
    }
  };
  
  const openModal = (e) => {
    e.preventDefault();

    setModal(!modal);
    const errorMsg = document.querySelector(".error-message");
    if (
      nationalId === "" ||
      mobile === "" ||
      financingType === "" ||
      make === "" ||
      model === "" ||
      bank === "" ||
      incomeSource === "" ||
      income === "" ||
      companyName === "" ||
      estimatedAmount === ""
    ) {
      errorMsg.style.display = "flex";
    } else {
      setModal(!modal);
      const modalDiv = document.querySelector(".booking-modal");
      modalDiv.scroll(0, 0);
      errorMsg.style.display = "none";
    }
  };

  useEffect(() => {
    if (modal === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modal]);

  const getYearAndMonthOptions = () => {
    const yearOptions = [];
    const monthOptions = [];
    const idStartYear = parseInt(nationalId.substring(0, 2));

    const englishMonths = [
      "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ];

    const hijriMonths = [
      "Muharram", "Safar", "Rabi' al-Awwal", "Rabi' al-Thani", "Jumada al-Awwal", "Jumada al-Thani",
      "Rajab", "Sha'ban", "Ramadan", "Shawwal", "Dhul-Qi'dah", "Dhul-Hijjah"
    ];

    if (idStartYear >= 20) {
      englishMonths.forEach((month) => monthOptions.push(month));
      for (let i = 2022; i <= 2050; i++) {
        yearOptions.push(i);
      }
    } else if (idStartYear >= 10) {
      hijriMonths.forEach((month) => monthOptions.push(month));
      for (let i = 1442; i <= 1500; i++) {
        yearOptions.push(i);
      }
    } else {
      englishMonths.forEach((month) => monthOptions.push(month));
      for (let i = 2022; i <= 2050; i++) {
        yearOptions.push(i);
      }
    }

    return { yearOptions, monthOptions };
  };

  const { yearOptions, monthOptions } = getYearAndMonthOptions();
  
  return (
    <>
      <section id="booking-section" className="book-section">
        <div onClick={openModal} className={`modal-overlay ${modal ? "active-modal" : ""}`} />
        <Box className="container">
          <Box className="book-content">
            <Box className="book-content__box">
              {isAuthenticated ? (
                <BookingStepper />
              ) : (
                <>
                  <h2>Easiest Financing. Let’s apply!</h2>
                  <p className="error-message">
                    All fields required! <i className="fa-solid fa-xmark"></i>
                  </p>
                  <p className="booking-done">
                    Check your email to confirm an order. {" "}
                    <i onClick={() => document.querySelector(".booking-done").style.display = "none"} className="fa-solid fa-xmark"></i>
                  </p>

                  <form className="box-form">
                    <TextField
                      label="National ID"
                      value={nationalId}
                      onChange={(e) => setNationalId(e.target.value)}
                      fullWidth
                      required
                      margin="normal"
                      sx={{
                        fontSize: '1.2rem'
                      }}
                    />

                    <FormControl fullWidth required margin="normal">
                      <InputLabel sx={{ fontSize: '1.2rem' }}>Month</InputLabel>
                      <Select
                        value={month}
                        onChange={(e) => setMonth(e.target.value)}
                        label="Month"
                        sx={{
                          fontSize: '1.2rem',
                          height: '40px'
                        }}
                        MenuProps={{
                          PaperProps: {
                            sx: {
                              maxHeight: 200,
                              overflow: 'auto'
                            }
                          }
                        }}
                      >
                        {monthOptions.map((month, index) => (
                          <MenuItem key={index} value={month}>{month}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>

                    <FormControl fullWidth required margin="normal">
                      <InputLabel sx={{ fontSize: '1.2rem' }}>Year</InputLabel>
                      <Select
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        label="Year"
                        sx={{
                          fontSize: '1.2rem',
                          height: '40px'
                        }}
                        MenuProps={{
                          PaperProps: {
                            sx: {
                              maxHeight: 200,
                              overflow: 'auto'
                            }
                          }
                        }}
                      >
                        {yearOptions.map((year, index) => (
                          <MenuItem key={index} value={year} sx={{ fontSize: '1.2rem' }}>
                            {year}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>

                    <TextField
                      label="Mobile"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      fullWidth
                      required
                      margin="normal"
                      sx={{
                        fontSize: '1.2rem'
                      }}
                    />
                    <TextField
                      label="Make"
                      value={make}
                      onChange={(e) => setMake(e.target.value)}
                      fullWidth
                      required
                      margin="normal"
                      sx={{
                        fontSize: '1.2rem'
                      }}
                    />
                    <FormControl fullWidth required margin="normal">
                      <InputLabel sx={{ fontSize: '1.2rem' }}>Model</InputLabel>
                      <Select
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                        label="Model"
                        sx={{
                          fontSize: '1.2rem',
                        }}
                      >
                        <MenuItem value="Model 1">3 Series</MenuItem>
                        <MenuItem value="Model 2">718 Boxter T</MenuItem>
                        <MenuItem value="Model 3">718 Cayman</MenuItem>
                      </Select>
                    </FormControl>

                    <FormControl component="fieldset" fullWidth required margin="normal">
                      <Typography variant="h6" sx={{ fontSize: '1.2rem' }}>Financing Type</Typography>
                      <RadioGroup
                        value={financingType}
                        onChange={(e) => setFinancingType(e.target.value)}
                        row
                      >
                        <FormControlLabel
                          value="New"
                          control={<Radio />}
                          label="New"
                        />
                        <FormControlLabel
                          value="50 / 50"
                          control={<Radio />}
                          label="50 / 50"
                        />
                        <FormControlLabel
                          value="Certified Pre-Owned"
                          control={<Radio />}
                          label="Certified Pre-Owned"
                        />
                      </RadioGroup>
                    </FormControl>

                    <FormControl component="fieldset" fullWidth required margin="normal">
                      <Typography variant="h6" sx={{ fontSize: '1.2rem' }}>Income Source</Typography>
                      <RadioGroup
                        value={incomeSource}
                        onChange={(e) => setIncomeSource(e.target.value)}
                        row
                      >
                        <FormControlLabel
                          value="Salaried"
                          control={<Radio />}
                          label="Salaried"
                        />
                        <FormControlLabel
                          value="Self-Employed"
                          control={<Radio />}
                          label="Self-Employed"
                        />
                        <FormControlLabel
                          value="Business"
                          control={<Radio />}
                          label="Business"
                        />
                        <FormControlLabel
                          value="Retired"
                          control={<Radio />}
                          label="Retired"
                        />
                      </RadioGroup>
                    </FormControl>

                    {incomeSource === "Salaried" && (
                      <>
                        <TextField
                          label="Income / Salary"
                          type="number"
                          value={income}
                          onChange={(e) => setIncome(e.target.value)}
                          fullWidth
                          required
                          margin="normal"
                          sx={{
                            fontSize: '1.2rem',
                          }}
                        />
                        <TextField
                          label="Company / Business Name"
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          fullWidth
                          required
                          margin="normal"
                          sx={{
                            fontSize: '1.2rem',
                          }}
                        />
                        <FormControl fullWidth required margin="normal">
                          <InputLabel sx={{ fontSize: '1.2rem' }}>Select Your Bank</InputLabel>
                          <Select
                            value={bank}
                            onChange={(e) => setBank(e.target.value)}
                            label="Bank"
                            sx={{
                              fontSize: '1.2rem',
                            }}
                          >
                            <MenuItem value="bank-1">Standard Bank</MenuItem>
                            <MenuItem value="bank-2">Standard Chartered</MenuItem>
                            <MenuItem value="bank-3">Barclays</MenuItem>
                          </Select>
                        </FormControl>
                      </>
                    )}

                    <Box>
                      <Typography variant="h6" sx={{ fontSize: '1.2rem' }}>Estimated Amount</Typography>
                      <Slider
                        value={estimatedAmount}
                        onChange={(e, newValue) => setEstimatedAmount(newValue)}
                        valueLabelDisplay="auto"
                        min={0}
                        max={100000}
                        color="warning"
                        step={1000}
                        sx={{
                          width: "100%",
                        }}
                      />
                    </Box>

                    <div className="wego">
                      <div className="wego-container">
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={agreeTerms}
                              onChange={(e) => setAgreeTerms(e.target.checked)}
                            />
                          }
                          label="I agree to terms and conditions"
                          className="checkbox-label"
                        />
                      </div>
                      <div className="wediv">
                        <Button
                          className="wego-button"
                          onClick={handleHereWeGo}
                          variant="contained"
                          disabled={!agreeTerms}
                        >
                          Here We Go!
                        </Button>
                      </div>
                    </div>
                  </form>
                </>
              )}
            </Box>
          </Box>
        </Box>
      </section>

      <Modal open={showOtpModal} onClose={() => setShowOtpModal(false)}>
        <Box className="otp-modal" sx={{ padding: 4, background: "white", width: 300, margin: "auto", marginTop: "20vh", textAlign: "center", borderRadius: "8px" }}>
          <Typography variant="h6">Enter OTP</Typography>
          <TextField value={otp} onChange={(e) => setOtp(e.target.value)} fullWidth required margin="normal" />
          <Button variant="contained" color="primary" onClick={handleOtpSubmit}>Submit</Button>
        </Box>
      </Modal>
    </>
  );
}

export default BookCar;
