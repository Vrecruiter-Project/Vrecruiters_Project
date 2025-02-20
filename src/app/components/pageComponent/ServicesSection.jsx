import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { AppBar, Tabs, Tab, Typography, Box, } from '@mui/material';
import JobPlacementServices from '../../source/Pages/ServicesPage/recruitment/Components/JobPlacementServices';
import ResumeBuildService from '../../source/Pages/ServicesPage/ResumeWritingPage/Components/ResumeBuildService';
import InterviewPreparationService from '../../source/Pages/ServicesPage/InteriewPreparationPage/Components/InterviewPreparationService';

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function ServicesSection() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{my: { xs: 8, sm: 16 }, bgcolor: 'transparent', boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", width: '100%' }}>
      <AppBar position="static">
        <Tabs
          sx={{
            background:
              "linear-gradient(45deg, #D4A1FF 10%, #FF9E53 90%)",
              px: {sm:5},
              borderRadius: "5px"
          }}
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="job placement services tabs"
        >
          <Tab label="Job Placement Services" {...a11yProps(0)} />
          <Tab label="Resume/CV Writing and Review" {...a11yProps(1)} />
          <Tab label="Interview Preparation" {...a11yProps(2)} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        <JobPlacementServices />
      </TabPanel>

      <TabPanel value={value} index={1}>
        <ResumeBuildService />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <InterviewPreparationService />
      </TabPanel>
    </Box>
  );
}
