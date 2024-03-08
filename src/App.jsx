// Always import .jsx files here
// App.jsx file
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme'; // Importing custom theme from theme.jsx
import Navbar from './components/Navbar';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import JobCard from './components/JobCard';
import jobData from './dummyData';

function App() {
  return (
    <ThemeProvider theme={theme}> {/* Wrapping the entire application with ThemeProvider */}
      <div>
        <Navbar />
        <Header />
        <SearchBar />
        {jobData.map((job)=> (
          <JobCard key={job.id} {...job}/>
        ))}
      </div>
    </ThemeProvider>
  );
}

export default App;
