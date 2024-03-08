//Header .jsx file
import React from 'react'
import { Box } from '@mui/material';

function Header() {
    return (
        <Box bgcolor="secondary.main" p={2}>
            <div className='mt-1 flex flex-col gap-5 items-center justify-center text-white'>
                <h1 className='text-3xl font-bold'>Join the Tech Revolution, Begin the Search</h1>
                <p className='text-xl'>Discover Job Openings Tailored to You!</p>
            </div>
        </Box>
    );
}

export default Header;