import {
  TextField,
  Stack,
  Typography,
  Button,
  InputAdornment,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import React, { useState } from "react";
import AppStore from "../Store/appStore";

function Calculator() {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleRadioChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const theme = createTheme({
    typography: {
      fontFamily: "Signika, sans-serif",
    },
    palette: {
      primary: {
        main: "hsl(59, 71%, 55%)",
      },
    },
  });

  const {
    mortgageAmount,
    setMortgageAmount,
    mortgageTerm,
    setMortgageTerm,
    interestRate,
    setInterestRate,
    setCalculate,
    calculate,
    mortgageType,
    setMortgageType,
    setMonthlyPayment,
    setTotalRepayment,
  } = AppStore();

  const clearAllHandler = () => {
    setMortgageAmount("");
    setMortgageTerm("");
    setInterestRate("");
    setSelectedValue(null);
  };

  function calculateMonthlyPayment(
    principal,
    annualInterestRate,
    loanTermYears
  ) {
    const monthlyInterestRate = annualInterestRate / 100 / 12;
    const numberOfPayments = loanTermYears * 12;

    const numerator =
      monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments);
    const denominator = Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1;

    const monthlyPayment = principal * (numerator / denominator);
    return monthlyPayment.toFixed(2);
  }

  const calculateHandler = () => {
    const principal = parseFloat(mortgageAmount);
    const annualInterestRate = parseFloat(interestRate);
    const loanTermYears = parseFloat(mortgageTerm);
    if (
      !isNaN(principal) &&
      !isNaN(annualInterestRate) &&
      !isNaN(loanTermYears)
    ) {
      let monthlyPayment, totalRepayment;
      if (mortgageType === "mortgage") {
        // Repayment Mortgage
        monthlyPayment = calculateMonthlyPayment(
          principal,
          annualInterestRate,
          loanTermYears
        );
        totalRepayment = (monthlyPayment * loanTermYears * 12).toFixed(2);
      } else {
        // Interest Only Mortgage
        const monthlyInterestRate = annualInterestRate / 100 / 12;
        monthlyPayment = (principal * monthlyInterestRate).toFixed(2);
        const totalInterest = (
          ((principal * annualInterestRate) / 100) *
          loanTermYears
        ).toFixed(2);
        totalRepayment = (
          parseFloat(principal) + parseFloat(totalInterest)
        ).toFixed(2);
      }
      setMonthlyPayment(monthlyPayment);
      setTotalRepayment(totalRepayment);
    }
    setCalculate(false);
  };

  return (
    <Stack
      direction="column"
      sx={{ justifyContent: "center", padding: "20px", width: { lg: "50%" } }}
      spacing={4}
    >
      <Stack
        direction="row"
        sx={{ alignItems: "center", justifyContent: "space-between" }}
      >
        <Typography>Mortgage Calculator </Typography>
        <Typography
          sx={{ textDecoration: "underline", cursor: "pointer" }}
          onClick={clearAllHandler}
        >
          Clear All
        </Typography>
      </Stack>

      <Stack spacing={2}>
        <Stack>
          <label style={{ fontWeight: 600, opacity: "60%" }}>
            Mortgage Amount
          </label>
          <TextField
            type="number"
            className="no-spinner"
            value={mortgageAmount}
            onChange={(e) => setMortgageAmount(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment
                  position="start"
                  sx={{
                    backgroundColor: "hsl(196, 81%, 94%)",
                    padding: "15px",
                    marginLeft: "-13px",
                    height: "42%",
                  }}
                >
                  £
                </InputAdornment>
              ),
            }}
          />
        </Stack>

        <Stack spacing={3} direction="row" sx={{ alignItems: "center" }}>
          <Stack>
            <label>Mortgage Term</label>
            <TextField
              type="number"
              className="no-spinner"
              value={mortgageTerm}
              onChange={(e) => setMortgageTerm(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment
                    position="end"
                    sx={{
                      backgroundColor: "hsl(196, 81%, 94%)",
                      padding: "15px",
                      marginRight: "-13px",
                      height: "100%",
                    }}
                  >
                    years
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
          <Stack>
            <label>Interest Rate</label>
            <TextField
              type="number"
              className="no-spinner"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment
                    position="start"
                    sx={{
                      backgroundColor: "hsl(196, 81%, 94%)",
                      padding: "15px",
                      marginRight: "-13px",
                      height: "100%",
                    }}
                  >
                    <b>%</b>
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
        </Stack>
      </Stack>

      <FormControl>
        <FormLabel>Mortgage Type</FormLabel>
        <RadioGroup
          value={mortgageType}
          onChange={(e) => setMortgageType(e.target.value)}
        >
          <ThemeProvider theme={theme}>
            <Stack spacing={2}>
              <FormControlLabel
                value="mortgage"
                control={
                  <Radio
                    checked={selectedValue === "mortgage"}
                    onChange={handleRadioChange}
                  />
                }
                label="Repayment"
                sx={{
                  border:
                    selectedValue !== "mortgage"
                      ? "1px solid lightgray"
                      : "1px solid hsl(59, 71%, 55%)",
                  padding: "10px",
                  width: "96%",
                }}
              />
              <FormControlLabel
                value="interestOnly"
                control={
                  <Radio
                    checked={selectedValue === "interestOnly"}
                    onChange={handleRadioChange}
                  />
                }
                label="Interest Only"
                sx={{
                  border:
                    selectedValue !== "interestOnly"
                      ? "1px solid lightgray"
                      : "1px solid hsl(59, 71%, 55%)",
                  padding: "10px",
                  width: "96%",
                }}
              />
            </Stack>
          </ThemeProvider>
        </RadioGroup>
      </FormControl>

      <Button
        onClick={calculateHandler}
        variant="contained"
        sx={{
          textTransform: "none",
          backgroundColor: "hsl(59, 71%, 55%)",
          color: "hsl(141, 25%, 16%)",
          padding: "15px",
          borderRadius: "25px",
          width: { lg: "50%" },
          "&:hover": {
            backgroundColor: "hsl(59, 71%, 55%)",
            color: "hsl(141, 25%, 16%)",
          },
        }}
      >
        <Stack spacing={3} direction="row" sx={{ alignItems: "center" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              fill="#133041"
              d="M18.75 2.25H5.25a1.5 1.5 0 0 0-1.5 1.5v16.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V3.75a1.5 1.5 0 0 0-1.5-1.5Zm-10.5 16.5a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 18.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 15a1.125 1.125 0 1 1 0-2.25A1.125 1.125 0 0 1 12 15Zm3.75 3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm1.5-5.25a.75.75 0 0 1-.75.75h-9a.75.75 0 0 1-.75-.75V6a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 .75.75v3.75Z"
            />
          </svg>
          <b>Calculate Repayments</b>
        </Stack>
      </Button>
    </Stack>
  );
}

export default Calculator;
