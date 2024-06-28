import React from 'react'
import './App.css'
import { Paper } from '@mui/material'
import Calculator from './Components/Calculator'
import Results from './Components/Results'


function App() {



  return (
    <>
     <Paper elevation={8} sx={{ display:"flex", alignItems:"center"}}>
      <Calculator/>
      <Results/>
     </Paper>
    </>
  )
}

export default App
