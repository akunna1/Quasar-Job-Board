//Nav Bar .jsx file
import React from 'react'
import logo from '../../assets/logo1.png'; // Importing  logo image
import { Box } from '@mui/material';

function Navbar() { //Function component
  return (
    <Box bgcolor="secondary.main">
        <div className='h-20 flex items-center w-full text-white'>
            <img src={logo} alt="Quasar logo" className="h-10 w-10 ml-5" />
            <div className='text-4xl pl-2 font-bold'>Quasar.</div>
        </div>
    </Box>
  );
}

export default Navbar; //End of function component
