import React from 'react'
import {  Stack, Typography, Divider, Box} from '@mui/material'

function Results() {
  return (
   <Stack spacing={3}  sx={{justifyContent:"center", alignItems:"center", display:"flex", flexDirection:"column",backgroundColor:"pink", width:"50%", margin:"0 auto", padding:"20px", borderBottomLeftRadius:"50%", height:"100%"}}>
    
  <Box sx={{ textAlign: 'left', width: '50%' }}>
  <Typography variant='h5' >Your results</Typography>
    <Typography  >Your results are shown below based on the information you provided. To adjust the results, edit the form and click "calculate repayments" again.</Typography>
  </Box>
    
<Stack>
  <Typography> Your monthly repayments</Typography>
  <Typography variant='h2'> £1,797.74</Typography>
  <Divider/>
  <Typography>Total you'll repay over the term</Typography>
  <Typography variant='h4'>£539,322.94</Typography>
</Stack>

   </Stack>
  )
}

export default Results