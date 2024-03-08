// Job Card index.jsx file
import React from 'react';
import dayjs from 'dayjs';
import styled from '@emotion/styled';

const SkillChip = styled.p`
  margin: ${props => props.theme.spacing(0.5)};
  padding: 6px 20px;
  font-size: 14.5px;
  border-radius: 35px;
  font-weight: 600;
  background-color: ${props => props.theme.palette.secondary.main};
  color: #fff;
  text-align: center;
`;

const ApplyButton = styled.button`
  font-size: 13.5px;
  background-color: transparent;
  padding: 6px 20px;
  border-radius: 35px;
  display: inline-block;
  font-weight: 600;
  border: 2px solid ${props => props.theme.palette.primary.main};
  cursor: pointer;
`;

const JobCardContainer = styled.div`
  margin: 0 40px;
  margin-bottom: 4px;
  border: 1px solid #e8e8e8;
  border-radius: 10px;
  padding: 4px 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  transition: border-color 0.3s, transform 0.3s;

  &:hover {
    border-color: white;
    transform: translateY(-1px) scale(1.03);
  }
`;

function JobCard(props) {
  //const skills = ['JavaScript', 'React', 'Node'];
  const date1 = dayjs(Date.now());
  const diffInDays = date1.diff(props.postedOn, 'day');

  return (
    <JobCardContainer>
        <div className="flex justify-between items-center px-6 py-4">
            {/* Left section */}
            <div className="flex flex-col items-start gap-3">
            <h1 className="text-lg font-semibold">{props.title}- {props.companyName}</h1>
            <p>{props.type} &#x2022; {props.Experience} &#x2022; {props.location}</p>

            {/* Skills chips */}
            <div className="flex items-center gap-2">
                {props.skills.map((skill, index) => (
                <SkillChip key={index}>{skill}</SkillChip>
                ))}
            </div>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-4">
          <p className="text-gray-500">Posted {diffInDays} days ago</p>
          <a href={props.companyUrl} target='_blank'>
          <ApplyButton>Apply</ApplyButton>
          </a>
        </div>

      </div>
    </JobCardContainer>
  );
}

export default JobCard;
