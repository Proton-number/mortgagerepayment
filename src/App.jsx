import React from 'react'
import './App.css'
import { Stack } from '@mui/material'
import Calculator from './Components/Calculator'
import Results from './Components/Results'


function App() {



  return (
    <>
     <Stack direction='row' sx={{alignItems:"center"}}>
      <Calculator/>
      <Results/>
     </Stack>
    </>
  )
}

export default App
