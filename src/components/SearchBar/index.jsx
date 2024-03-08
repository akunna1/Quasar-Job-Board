// index.jsx file for Search Bar
import React from 'react';
import { ThemeProvider } from '@mui/material/styles'; // for theme management
import theme from "../../theme/theme"; // Importing custom theme object
import { Box, Button, Select, MenuItem } from '@mui/material';
import styled from '@emotion/styled'; // For creating styled components

// Creating a styled component using styled(Box) syntax, setting styles with an object
const Wrapper = styled(Box)({
    backgroundColor: "#fff",
    display: "flex",
    boxShadow: "0px 1px 5px rgba(0, 0, 0.1)",
    borderRadius: '30px',
    "& > *": {
      flex: 1,
      height: "40px",
      margin: "2px",
    },
    // Styles for the Button component
    "& button": {
      borderRadius: '35px',
      padding: "6px 20px",
    },
  });
  

function SearchBar() {
  return (
      <Wrapper p={2} mt={3} mb={3} ml={1} mr={1}>
      <Select disableUnderline variant="filled" defaultValue="Android Developer" sx={{ borderRadius: '35px', padding: "6px 20px"}}>
          <MenuItem value="Android Developer">Android Developer</MenuItem>
          <MenuItem value="Backend Developer">Backend Developer</MenuItem>
          <MenuItem value="Cloud Engineer">Cloud Engineer</MenuItem>
          <MenuItem value="Cybersecurity Analyst">Cybersecurity Analyst</MenuItem>
          <MenuItem value="Data Engineer">Data Engineer</MenuItem>
          <MenuItem value="Data Scientist">Data Scientist</MenuItem>
          <MenuItem value="DevOps Engineer">DevOps Engineer</MenuItem>
          <MenuItem value="Frontend Developer">Frontend Developer</MenuItem>
          <MenuItem value="Full Stack Developer">Full Stack Developer</MenuItem>
          <MenuItem value="iOS Developer">iOS Developer</MenuItem>
          <MenuItem value="Machine Learning Engineer">Machine Learning Engineer</MenuItem>
          <MenuItem value="Network Engineer">Network Engineer</MenuItem>
          <MenuItem value="Product Manager">Product Manager</MenuItem>
          <MenuItem value="Systems Administrator">Systems Administrator</MenuItem>
          <MenuItem value="UI/UX Designer">UI/UX Designer</MenuItem>
        </Select>
        <Select disableUnderline variant="filled" defaultValue="Full-time" sx={{ borderRadius: '35px', padding: "6px 20px"}}>
          <MenuItem value="Full-time">Full-time</MenuItem>
          <MenuItem value="Part-time">Part-time</MenuItem>
          <MenuItem value="Internship">Internship</MenuItem>
          <MenuItem value="Contract">Contract</MenuItem>
        </Select>
        <Select disableUnderline variant="filled" defaultValue="Remote" sx={{ borderRadius: '35px', padding: "6px 20px"}}>
          <MenuItem value="Remote">Remote</MenuItem>
          <MenuItem value="Hybrid">Hybrid</MenuItem>
          <MenuItem value="In-person">In-person</MenuItem>
        </Select>
        <Select disableUnderline variant="filled" defaultValue="Entry Level" sx={{ borderRadius: '35px', padding: "6px 20px"}}>
          <MenuItem value="Entry Level">Entry Level</MenuItem>
          <MenuItem value="Junior Level">Junior Level</MenuItem>
          <MenuItem value="Mid Level">Mid Level</MenuItem>
          <MenuItem value="Senior Level">Senior Level</MenuItem>
        </Select>
        <Button variant="contained" color="primary">
          Search
        </Button>
      </Wrapper>
  );
}

export default SearchBar;
