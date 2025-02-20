import React, { useRef } from 'react';
import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
  Container,
  Paper,
} from '@mui/material';
import { useAtom } from 'jotai';
import html2pdf from 'html2pdf.js';
import { resumedataatom } from '../../../../../../../assests/globalvars/resumebuildatom';

const ResumeTemplate2 = ({ sectionHeadings }) => {
  const [resumeFormData] = useAtom(resumedataatom);
  const {
    basicDetails = {},
    education = [],
    workExperience = [],
    projects = [],
    skills = [],
    customSections = [],
  } = resumeFormData;

  const pdfRef = useRef();

  const handleDownloadPDF = () => {
    const element = pdfRef.current;
    const opt = {
      margin: 0,
      filename: `resume.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };
    html2pdf().from(element).set(opt).save();
  };

  return (
    <div
      style={{
        padding: '20px',
        color: '#FFFFFF',
      }}
    >
      {/* Download Button */}
      <Button
        variant="contained"
        color="secondary"
        onClick={handleDownloadPDF}
        sx={{
          display: 'block',
          margin: '20px auto',
          position: 'sticky',
          top: 10,
          zIndex: 1000,
        }}
      >
        Download PDF
      </Button>

      <div
        style={{
          maxHeight: "90vh",
          overflowY: "auto",
          padding: "20px",
          boxSizing: "border-box",
          border: "1px solid #ddd",
          borderRadius: "10px",
          boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
          margin: "0 auto",
          width: "100%",
          maxWidth: "1000px",
          backgroundColor: "#fff",
        }}
      >
        <Container maxWidth="md" ref={pdfRef} sx={{ padding: '20px' }}>
          <Paper
            elevation={3}
            style={{
              padding: '20px',      
              fontFamily: "'Helvetica Neue', Arial, sans-serif",
              color: '#333',
              backgroundColor: '#FAFAFA',
            }}
          >
            {/* Header Section */}
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sx={{ backgroundColor: 'rgb(201, 171, 178)',}}>
                <Typography variant="h3" fontWeight="bold" color="#800020" gutterBottom>
                  {basicDetails.name || 'Your Name'}
                </Typography>
                <Typography variant="h5" color="#555">
                  {basicDetails.profession || 'Your Profession'}
                </Typography>
                <Typography variant="body1" color="#777">
                  {basicDetails.objective || 'Objective goes here.'}
                </Typography>
              </Grid>
            </Grid>

            <Divider sx={{ marginY: 2, backgroundColor: '#800020' }} />

            {/* Contact Info */}
            <Grid container spacing={2} sx={{ marginTop: 2 }}>
              <Grid item xs={12} sm={4}>
                <Typography variant="body1">
                  <strong>Phone:</strong> {basicDetails.phone || '123-456-7890'}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="body1">
                  <strong>Email:</strong> {basicDetails.email || 'email@example.com'}
                </Typography>
              </Grid>
              {basicDetails.website && (
                <Grid item xs={12} sm={4}>
                  <Typography variant="body1">
                    <strong>Website:</strong> {basicDetails.website}
                  </Typography>
                </Grid>
              )}
            </Grid>

            {/* Work Experience Section */}
          {sectionHeadings.workExperience && (
            <Box mt={4}>
              <Typography variant="h5" fontWeight="bold" color="#800020">
              {sectionHeadings.workExperience}
              </Typography>
              {workExperience.length > 0 ? (
                workExperience.map((work, index) => (
                  <Box key={index} mt={2}>
                    <Typography variant="subtitle1" fontWeight="bold" color="#800020">
                      {work.company || 'Company Name'}
                    </Typography>
                    <Typography variant="body2" color="#777">
                      {work.position || 'Position'} | {work.duration || 'Duration'}
                    </Typography>
                    <List>
                      {work.responsibilities?.map((resp, i) => (
                        <ListItem key={i} disablePadding>
                          <ListItemText primary={resp} />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                ))
              ) : (
                <Typography>No work experience entries.</Typography>
              )}
            </Box>
          )}

            {/* Education Section */}
            {sectionHeadings.education && (
            <Box mt={4}>
              <Typography variant="h5" fontWeight="bold" color="#800020">
              {sectionHeadings.education}
              </Typography>
              {education.length > 0 ? (
                education.map((edu, index) => (
                  <Box key={index} mt={2}>
                    <Typography variant="subtitle1" fontWeight="bold" color="#800020">
                      {edu.degree || 'Degree'}
                    </Typography>
                    <Typography variant="body2" color="#777">
                      {edu.institution || 'Institution Name'} - {edu.year || 'Year'}
                    </Typography>
                  </Box>
                ))
              ) : (
                <Typography>No education entries.</Typography>
              )}
            </Box>
            )}

            {/* Projects Section */}
            {sectionHeadings.projects && (
            <Box mt={4}>
              <Typography variant="h5" fontWeight="bold" color="#800020">
              {sectionHeadings.projects}
              </Typography>
              {projects.length > 0 ? (
                projects.map((project, index) => (
                  <Box key={index} mt={2}>
                    <Typography variant="subtitle1" fontWeight="bold" color="#800020">
                      {project.title || 'Project Title'}
                    </Typography>
                    <Typography variant="body2" color="#777">
                      {project.description || 'Project description'}
                    </Typography>
                  </Box>
                ))
              ) : (
                <Typography>No project entries.</Typography>
              )}
            </Box>
            )}

            {/* Skills Section */}
            {sectionHeadings.skills && (
            <Box mt={4}>
              <Typography variant="h5" fontWeight="bold" color="#800020">
              {sectionHeadings.skills}
              </Typography>
              {skills.length > 0 ? (
                <List>
                  {skills.map((skill, index) => (
                    <ListItem key={index} disablePadding>
                      <ListItemText primary={skill.skill || 'Skill'} />
                    </ListItem>
                  ))}
                </List>
              ) : (
                <Typography>No skills provided.</Typography>
              )}
            </Box>
            )}

            {/* Custom Sections */}
            {sectionHeadings.customSections && customSections.length > 0 && (
              <Box mt={4}>
                <Typography variant="h5" fontWeight="bold" color="#800020">
                {sectionHeadings.customSections}
                </Typography>
                {customSections.map((section, index) => (
                  <Box key={index} mt={2}>
                    <Typography variant="subtitle1" fontWeight="bold" color="#800020">
                      {section.sectionName || 'Section Name'}
                    </Typography>
                    <Typography variant="body2" color="#777">
                      {section.content || 'Section content'}
                    </Typography>
                  </Box>
                ))}
              </Box>
            )}
          </Paper>
        </Container>
      </div>
    </div>
  );
};

export default ResumeTemplate2;
