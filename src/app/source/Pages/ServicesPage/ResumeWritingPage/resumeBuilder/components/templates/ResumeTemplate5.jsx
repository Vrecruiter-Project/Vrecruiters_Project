import React, { useRef } from 'react';
import { Container, Grid, Paper, Typography, Avatar, Box, Divider, List, ListItem, ListItemText, Button } from '@mui/material';
import { useAtom } from 'jotai';
import html2pdf from 'html2pdf.js';
import { resumedataatom } from '../../../../../../../assests/globalvars/resumebuildatom';

const ResumeTemplate5 = ({ sectionHeadings }) => {
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
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };
    html2pdf().from(element).set(opt).save();
  };

  return (
    <div
      style={{ padding: '20px', backgroundColor: '#F0F4F8' }}
    >
      <Button
        variant="contained"
        color="secondary"
        onClick={handleDownloadPDF}
        sx={{
          display: "block",
          margin: "20px auto",
          position: "sticky",
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
          maxWidth: "800px",
          backgroundColor: "#fff",
        }}
      >
        <Container maxWidth="md" ref={pdfRef} sx={{ padding: "20px" }}>
          <Paper
            elevation={3}
            sx={{
              padding: '20px',
              marginTop: '20px',
              fontFamily: "'Georgia', serif",
              color: "#333",
              backgroundColor: '#F9F5F0',
            }}
          >
            {/* Header */}
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={3}>
                <Avatar
                  alt={basicDetails.name}
                  src={basicDetails.image ? URL.createObjectURL(basicDetails.image) : ""}
                  sx={{ width: 150, height: 150, border: '3px solid #AA7B5E' }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={9}
                sx={{
                  padding: '20px',
                  textAlign: 'center',
                  borderRadius: '10px',
                }}
              >
                <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#5B4035' }}>
                  {basicDetails.name?.toUpperCase() || 'Your Name'}
                </Typography>
                <Typography variant="h6" sx={{ color: '#AA7B5E' }}>
                  {basicDetails.profession || 'Your Profession'}
                </Typography>
                <Typography variant="body1" sx={{ color: '#5B4035' }}>
                  {basicDetails.email || 'email@example.com'}
                </Typography>
                <Typography variant="body1" sx={{ color: '#5B4035' }}>
                  {basicDetails.phone || '123-456-7890'}
                </Typography>
                <Typography variant="body1" sx={{ color: '#5B4035' }}>
                  {basicDetails.address || '#4321, Dera Bassi, Zirakpur'}
                </Typography>
              </Grid>
            </Grid>

            <Divider sx={{ marginY: '20px', backgroundColor: '#D4C4B7' }} />

            {/* Objective */}
            <Box sx={{ marginBottom: '20px' }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#5B4035' }}>
                Objective
              </Typography>
              <Typography variant="body1" sx={{ color: '#5B4035' }}>
                {basicDetails.objective || 'Objective goes here.'}
              </Typography>
            </Box>

            <Divider sx={{ marginY: '20px', backgroundColor: '#D4C4B7' }} />

            {/* Education */}
            {sectionHeadings.education && (
            <Box sx={{ marginBottom: '20px' }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#5B4035' }}>
              {sectionHeadings.education}
              </Typography>
              {education.length > 0 ? (
                education.map((edu, index) => (
                  <Box key={index} mb={2}>
                    <Typography variant="h6" sx={{ color: '#5B4035' }}>
                      {edu.degree || 'Degree'}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#5B4035' }}>
                      {edu.institution || 'Institution Name'}, {edu.year || 'Year'}
                    </Typography>
                  </Box>
                ))
              ) : (
                <Typography>No education entries.</Typography>
              )}
            </Box>
          )}

            <Divider sx={{ marginY: '20px', backgroundColor: '#D4C4B7' }} />

            {/* Work Experience */}
            {sectionHeadings.workExperience && (
              <>
              <Box sx={{ marginBottom: '20px' }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#5B4035' }}>
              {sectionHeadings.workExperience}
              </Typography>
              {workExperience.length > 0 ? (
                workExperience.map((work, index) => (
                  <Box key={index} mb={2}>
                    <Typography variant="h6" sx={{ color: '#4CAF50' }}>
                      {work.position?.toUpperCase() || 'Position'}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#5B4035' }}>
                      {work.company || 'Company Name'}, {work.duration || 'Duration'}
                    </Typography>
                    <ul>
                      {work.responsibilities?.map((resp, i) => (
                        <li key={i} style={{ fontSize: '0.9rem', color: '#777' }}>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </Box>
                ))
              ) : (
                <Typography>No work experience entries.</Typography>
              )}
            </Box>
            <Divider sx={{ marginY: '20px', backgroundColor: '#D4C4B7' }} />
              </>
            )}

            {/* Projects */}
            {sectionHeadings.projects && (
              <>
            <Box sx={{ marginBottom: '20px' }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#5B4035' }}>
              {sectionHeadings.projects}
              </Typography>
              {projects.length > 0 ? (
                projects.map((project, index) => (
                  <Box key={index} mb={2}>
                    <Typography variant="h6" sx={{ color: '#FF5722' }}>
                      {project.title || 'Project Title'}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#5B4035' }}>
                      {project.description || 'Project description'}
                    </Typography>
                  </Box>
                ))
              ) : (
                <Typography>No project entries.</Typography>
              )}
            </Box>
            <Divider sx={{ marginY: '20px', backgroundColor: '#D4C4B7' }} />
              </>
            )}

            {/* Skills */}
            {sectionHeadings.skills && (
              <>
            <Box sx={{ marginBottom: '20px' }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#5B4035' }}>
              {sectionHeadings.skills}
              </Typography>
              {skills.length > 0 ? (
                <List>
                  {skills.map((skill, index) => (
                    <ListItem key={index}>
                      <ListItemText primary={skill.skill || 'Skill'} />
                    </ListItem>
                  ))}
                </List>
              ) : (
                <Typography>No skills provided.</Typography>
              )}
            </Box>
            <Divider sx={{ marginY: '20px', backgroundColor: '#D4C4B7' }} />
              </>
            )}

            {/* Custom Sections */}
            {sectionHeadings.customSections && customSections.length > 0 && (
              <Box sx={{ marginBottom: '20px' }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#5B4035' }}>
                {sectionHeadings.customSections}
                </Typography>
                {customSections.map((section, index) => (
                  <Box key={index} mb={2}>
                    <Typography variant="h6" sx={{ color: '#5B4035' }}>
                      {section.sectionName || 'Section Name'}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#5B4035' }}>
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

export default ResumeTemplate5;
