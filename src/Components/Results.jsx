import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import AppStore from "../Store/appStore";
import Svg from "./Svg";

function Results() {
  const { calculate, monthlyPayment, totalRepayment } = AppStore();

  return (
    <>
      {calculate ? (
        <>
          <Stack
            spacing={3}
            sx={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              backgroundColor: "hsl(194, 100%, 13%)",
              width: { lg: "50%" },
              margin: "0 auto",
              borderBottomLeftRadius: { lg: "20%" },
              boxSizing: "border-box",
              minHeight: "100%",
              borderBottomRightRadius: { lg: "25px" },
              borderTopRightRadius: { lg: "25px" },
              padding: { xs: "30px", lg: 0 },
            }}
          >
            <Svg />
            <Stack
              spacing={1}
              sx={{ alignItems: "center", textalign: "center", color: "white" }}
            >
              <Typography variant="h5">Results shown here</Typography>
              <Typography
                sx={{
                  opacity: "50%",
                  textAlign: "center",
                  width: { sm: "70%" },
                }}
              >
                Complete the form and click "calculate repayments" to see what
                your monthly repayments would be.
              </Typography>
            </Stack>
          </Stack>
        </>
      ) : (
        <>
          <Stack
            spacing={3}
            sx={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              backgroundColor: "hsl(194, 100%, 13%)",
              width: { lg: "50%" },
              margin: "0 auto",
              borderBottomLeftRadius: { lg: "20%" },
              boxSizing: "border-box",
              minHeight: "100%",
              borderBottomRightRadius: { lg: "25px" },
              borderTopRightRadius: { lg: "25px" },
              padding: { xs: "30px", lg: 0 },
            }}
          >
            <Stack
              spacing={2}
              sx={{ textAlign: "left", width: { sm: "70%" }, color: "white" }}
            >
              <Typography variant="h5">Your results</Typography>
              <Typography>
                Your results are shown below based on the information you
                provided. To adjust the results, edit the form and click
                "calculate repayments" again.
              </Typography>
            </Stack>

            <Stack
              spacing={2}
              sx={{
                backgroundColor: "hsl(193, 92%, 10%)",
                padding: { xs: "30px", sm: "50px" },
              }}
            >
              <Typography
                variant="body2"
                sx={{ color: "white", opacity: "50%" }}
              >
                {" "}
                Your monthly repayments
              </Typography>
              <Typography variant="h2" sx={{ color: "hsl(61, 71%, 60%)" }}>
                £{monthlyPayment}
              </Typography>
              <Box sx={{ height: "1px", backgroundColor: "white" }} />
              <Stack sx={{ color: "white" }}>
                <Typography variant="body2" sx={{ opacity: "50%" }}>
                  Total you'll repay over the term
                </Typography>
                <Typography variant="h6">£{totalRepayment}</Typography>
              </Stack>
            </Stack>
          </Stack>
        </>
      )}
    </>
  );
}

export default Results;
