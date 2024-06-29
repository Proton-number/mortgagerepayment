import React from "react";
import "./App.css";
import { Paper, Box } from "@mui/material";
import Calculator from "./Components/Calculator";
import Results from "./Components/Results";

function App() {
  return (
    <Box sx={{ padding: "40px", alignItems: "center" }}>
      <Paper
        elevation={8}
        sx={{
          display: "flex",
          borderRadius: "30px",
          flexDirection: { xs: "column", lg: "row" },
        }}
      >
        <Calculator />
        <Results />
      </Paper>
    </Box>
  );
}

export default App;
