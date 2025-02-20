import React, { useRef } from 'react';
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Button,
  Divider,
  Container,
  Avatar,
  Grid
} from '@mui/material';
import { useAtom } from 'jotai';
import html2pdf from 'html2pdf.js';
import { resumedataatom } from '../../../../../../../assests/globalvars/resumebuildatom';

const ResumeTemplate3 = ({ sectionHeadings }) => {
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
    <div style={{ padding: '20px', backgroundColor: '#F0F4F8' }}>
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
          maxWidth: "1000px",
          backgroundColor: "#fff",
        }}
      >
        <Container maxWidth="md" ref={pdfRef} sx={{ padding: "20px" }}>
          <Paper
            elevation={3}
            style={{
              padding: "20px",
              fontFamily: "'Georgia', serif",
              color: "#333",
              backgroundColor: "#fafafa",
            }}
          >
            {/* Basic Details */}
            <Grid container display="flex" flexWrap="wrap" justifyContent="space-between" mb={2}>
              <Grid
                item
                xs={12}
                sm={4}
                style={{ textAlign: 'center', marginBottom: '20px', }}
              >
                <Avatar
                  alt={basicDetails.name}
                  src={basicDetails.image ? URL.createObjectURL(basicDetails.image) : ""}
                  sx={{ width: 120, height: 120 }}
                />
              </Grid>

              <Grid
                item
                xs={12}
                sm={8}
                sx={{
                  backgroundColor: "#2196F3",
                  color: '#fff',
                  padding: '15px',
                  textAlign: 'center',
                  borderRadius: '10px',
                }}
              >
                <Typography variant="h4" fontWeight="bold">
                  {basicDetails.name?.toUpperCase() || 'Your Name'}
                </Typography>
                <Typography variant="h6" color="textSecondary">
                  {basicDetails.profession || 'Your Profession'}
                </Typography>
                <Typography>{basicDetails.email || 'email@example.com'}</Typography>
                <Typography>{basicDetails.phone || '123-456-7890'}</Typography>
                {basicDetails.address && <Typography>{basicDetails.address}</Typography> || '#4321, Dera Bassi, Zirakpur'}
              </Grid>
            </Grid>

            {/* Objective */}
            <Box mb={2}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Objective
              </Typography>
              <Typography>{basicDetails.objective || 'Objective goes here.'}</Typography>
            </Box>

            {/* Divider */}
            <Divider sx={{ my: 2, borderColor: '#2196F3', borderBottomWidth: 3 }} />

            {/* Education */}
            {sectionHeadings.education && (
              <>
                <Box mb={2}>
                  <Typography variant="h5" fontWeight="bold" gutterBottom>
                    {sectionHeadings.education}
                  </Typography>
                  {education.length > 0 ? (
                    education.map((edu, index) => (
                      <Box key={index} mb={2}>
                        <Typography variant="h6">{edu.degree || 'Degree'}</Typography>
                        <Typography variant="subtitle1">
                          {edu.institution || 'Institution Name'}, {edu.year || 'Year'}
                        </Typography>
                      </Box>
                    ))
                  ) : (
                    <Typography>No education entries.</Typography>
                  )}
                </Box>
                <Divider sx={{ my: 2, borderColor: '#2196F3', borderBottomWidth: 3 }} />
              </>
            )}

            {/* Work Experience */}
            {sectionHeadings.workExperience && (
              <>
                <Box mb={2}>
                  <Typography variant="h5" fontWeight="bold" gutterBottom>
                    {sectionHeadings.workExperience}
                  </Typography>
                  {workExperience.length > 0 ? (
                    workExperience.map((work, index) => (
                      <Box key={index} mb={2}>
                        <Typography variant="h6" sx={{ color: '#4CAF50' }}>
                          {work.position?.toUpperCase() || 'Position'}
                        </Typography>
                        <Typography variant="subtitle1">
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
                <Divider sx={{ my: 2, borderColor: '#2196F3', borderBottomWidth: 3 }} />
              </>
            )}

            {/* Projects */}
            {sectionHeadings.projects && (
              <>
                <Box mb={2}>
                  <Typography variant="h5" fontWeight="bold" gutterBottom>
                    {sectionHeadings.projects}
                  </Typography>
                  {projects.length > 0 ? (
                    projects.map((project, index) => (
                      <Box key={index} mb={2}>
                        <Typography variant="h6" sx={{ color: '#FF5722' }}>
                          {project.title || 'Project Title'}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                          {project.description || 'Project description'}
                        </Typography>
                      </Box>
                    ))
                  ) : (
                    <Typography>No project entries.</Typography>
                  )}
                </Box>
                <Divider sx={{ my: 2, borderColor: '#2196F3', borderBottomWidth: 3 }} />
              </>
            )}

            {/* Skills */}
            {sectionHeadings.skills && (
              <>
                <Box mb={2}>
                  <Typography variant="h5" fontWeight="bold" gutterBottom>
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
                <Divider sx={{ my: 2, borderColor: '#2196F3', borderBottomWidth: 3 }} />
              </>
            )}

            {/* Custom Sections */}
            {sectionHeadings.customSections && customSections.length > 0 && (
              <Box mb={2}>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  {sectionHeadings.customSections}
                </Typography>
                {customSections.map((section, index) => (
                  <Box key={index} mb={2}>
                    <Typography variant="h6">{section.sectionName || 'Section Name'}</Typography>
                    <Typography variant="subtitle1">
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

export default ResumeTemplate3;
