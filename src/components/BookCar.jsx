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
  MenuItem
} from "@mui/material";

function BookCar() {
  const [modal, setModal] = useState(false);
  const [carType, setCarType] = useState("");
  const [carImg, setCarImg] = useState("");

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

  const handleNationalId = (e) => setNationalId(e.target.value);
  const handleMobile = (e) => setMobile(e.target.value);
  const handleFinancingType = (e) => setFinancingType(e.target.value);
  const handleMake = (e) => setMake(e.target.value);
  const handleModel = (e) => setModel(e.target.value);
  const handleBank = (e) => setBank(e.target.value);
  const handleIncomeSource = (e) => setIncomeSource(e.target.value);
  const handleIncome = (e) => setIncome(e.target.value);
  const handleCompanyName = (e) => setCompanyName(e.target.value);
  const handleEstimatedAmount = (event, newValue) => {
    setEstimatedAmount(newValue);
  };

  const openModal = (e) => {
    e.preventDefault();
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

  const confirmBooking = (e) => {
    e.preventDefault();
    setModal(!modal);
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "flex";
  };

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
                  onChange={handleNationalId}
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
                  onChange={handleMobile}
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
                  onChange={handleMake}
                  fullWidth
                  required
                  margin="normal"
                  sx={{
                    fontSize: '1.2rem'
                  }}
                />
                <FormControl fullWidth required margin="normal">
                  <InputLabel sx={{ fontSize: '1.2rem' }}>Models</InputLabel>
                  <Select
                    value={model}
                    onChange={handleModel}
                    label="Model"
                    sx={{
                      fontSize: '1.2rem', // Increased font size
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
                    onChange={handleFinancingType}
                    row
                  >
                    <FormControlLabel
                      value="New "
                      control={<Radio />}
                      label="New "
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

                {/* Income Source with conditional fields */}
                <FormControl component="fieldset" fullWidth required margin="normal">
                  <Typography variant="h6" sx={{ fontSize: '1.2rem' }}>Income Source</Typography>
                  <RadioGroup
                    value={incomeSource}
                    onChange={handleIncomeSource}
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

                {/* Conditionally Render Fields for Salaried Income Source */}
                {incomeSource === "Salaried" && (
                  <>
                    <TextField
                      label="Income / Salary"
                      type="number"
                      value={income}
                      onChange={handleIncome}
                      fullWidth
                      required
                      margin="normal"
                      sx={{
                        fontSize: '1.2rem', // Increased font size
                      }}
                    />
                    <TextField
                      label="Company / Business Name"
                      value={companyName}
                      onChange={handleCompanyName}
                      fullWidth
                      required
                      margin="normal"
                      sx={{
                        fontSize: '1.2rem', // Increased font size
                      }}
                    />
                    <FormControl fullWidth required margin="normal">
                      <InputLabel sx={{ fontSize: '1.2rem' }}>Select Your Bank</InputLabel>
                      <Select
                        value={bank}
                        onChange={handleBank}
                        label="Bank"
                        sx={{
                          fontSize: '1.2rem', // Increased font size
                        }}
                      >
                        <MenuItem value="bank-1">Standard Bank</MenuItem>
                        <MenuItem value="bank-2">Standard Chartered</MenuItem>
                        <MenuItem value="bank-3">Barclays</MenuItem>
                      </Select>
                    </FormControl>
                  </>
                )}
                {/* Slider for Estimated Amount */}
                <Box>
                  <Typography variant="h6" sx={{ fontSize: '1.2rem' }}>Estimated Amount</Typography>
                  <Slider
                    value={estimatedAmount}
                    onChange={handleEstimatedAmount}
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

                <button onClick={openModal} >Book Now</button>
              </form>
            </Box>
          </Box>
        </Box>
      </section>
    </>
  );
}

export default BookCar;
