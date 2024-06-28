import { TextField, Stack, Typography, Button, InputAdornment, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, ThemeProvider , createTheme } from '@mui/material'
import React, {useState} from 'react'


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
  console.log(theme);
  return (
   <Stack direction="column" sx={{justifyContent:"center", padding:"20px", backgroundColor:"yellow",}} spacing={4}>
    <Stack direction="row"  sx={{  alignItems:"center", justifyContent:"space-between"}}>
      <Typography>Mortgage Calculator </Typography>
      <Typography sx={{textDecoration:"underline"}}>Clear All</Typography>
    </Stack>

    
    <Stack spacing={2}>
     <Stack >
     <label>Mortgage Amount</label>
      <TextField        
          InputProps={{
            startAdornment: <InputAdornment position="start" sx={{backgroundColor:"hsl(196, 81%, 94%)", padding:"15px", 
            marginLeft: "-13px",height:"100%"}}>£</InputAdornment>,
          }}
      />
     </Stack>

     <Stack spacing={3} direction="row"  sx={{  alignItems:"center"}}>
      <Stack>
      <label>Mortgage Term</label>
      <TextField        
          InputProps={{
            endAdornment: <InputAdornment position="end" sx={{backgroundColor:"hsl(196, 81%, 94%)", padding:"15px", 
             marginRight: "-13px",height:"100%"}}>years</InputAdornment>,
          }}
     />
      </Stack>
      <Stack>
      <label>Interest Rate</label>
      <TextField        
          InputProps={{
        endAdornment: <InputAdornment position="start" sx={{backgroundColor:"hsl(196, 81%, 94%)", padding:"15px", 
        marginRight: "-13px",height:"100%"}}>
          <b>%</b>
        </InputAdornment>,
          }}
       />
      </Stack>
     </Stack>
    </Stack>

    <FormControl>
      <FormLabel>Mortgage Type</FormLabel>
      <RadioGroup>
     <ThemeProvider theme={theme}>
       <Stack spacing={2}>
       <FormControlLabel 
        value="mortgage" 
        control={<Radio checked={selectedValue === 'mortgage'} onChange={handleRadioChange}  />} 
        label={<>
       <b> Repayment</b>
        </>}
        sx={{
          border: selectedValue !== 'mortgage' ? "1px solid lightgray" : "1px solid hsl(59, 71%, 55%)", 
          padding: "10px", 
          width: "100%"
        }}
      />
      <FormControlLabel 
        value="interestOnly" 
        control={<Radio checked={selectedValue === 'interestOnly'} onChange={handleRadioChange} />} 
        label={<>
          <b>Interest Only</b>
           </>}
        sx={{
          border: selectedValue !== 'interestOnly' ? "1px solid lightgray" : "1px solid hsl(59, 71%, 55%)", 
          padding: "10px", 
          width: "100%"
        }}
      />
       </Stack>
     </ThemeProvider>
      </RadioGroup>
    </FormControl>

    <Button variant='contained' sx={{textTransform:'none', backgroundColor:"hsl(59, 71%, 55%)", color:"hsl(141, 25%, 16%)", padding:"15px", borderRadius:"25px", width:"50%"}}>
      <Stack spacing={3} direction="row"  sx={{  alignItems:"center"}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#133041" d="M18.75 2.25H5.25a1.5 1.5 0 0 0-1.5 1.5v16.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V3.75a1.5 1.5 0 0 0-1.5-1.5Zm-10.5 16.5a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 18.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 15a1.125 1.125 0 1 1 0-2.25A1.125 1.125 0 0 1 12 15Zm3.75 3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm1.5-5.25a.75.75 0 0 1-.75.75h-9a.75.75 0 0 1-.75-.75V6a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 .75.75v3.75Z"/></svg> 
    <b>Calculate Repayments</b> 
      </Stack>
   </Button>

   </Stack>
  )
}

export default Calculator