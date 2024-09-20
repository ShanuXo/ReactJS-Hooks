import React from 'react'
import FunctionContextComponent from './FunctionContextCoponent';
import { ThemeProvider } from './ThemeContext';


const useContext = () => {
  return (
    <ThemeProvider>
      <FunctionContextComponent />
    </ThemeProvider>
  )
}

export default useContext
