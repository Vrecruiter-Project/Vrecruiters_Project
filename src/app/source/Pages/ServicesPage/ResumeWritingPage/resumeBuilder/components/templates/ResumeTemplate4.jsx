import React, { useRef } from 'react';
import { Box, Typography, Grid, Paper, Divider, Button, List, ListItem, ListItemText, Container } from '@mui/material';
import { useAtom } from 'jotai';
import html2pdf from 'html2pdf.js';
import { resumedataatom } from '../../../../../../../assests/globalvars/resumebuildatom';

const ResumeTemplate4 = ({ sectionHeadings }) => {
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
    sx={{ padding: '20px', backgroundColor: '#F0F4F8'}}
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
            style={{
              padding: "20px",
              fontFamily: "'Georgia', serif",
              color: "#333",
              backgroundColor: "#fafafa",
            }}
          >
          {/* Header Section */}
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Typography variant="h3" color="primary" sx={{ fontWeight: 'bold' }}>
                {basicDetails.name?.toUpperCase() || "Your Name"}
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 'medium', color: '#A020F0' }}>
                {basicDetails.profession?.toUpperCase() || "Your Profession"}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography align="right">
                {basicDetails.phone || "123-456-7890"} | {basicDetails.email || "email@example.com"}<br />
                {basicDetails.website || "www.yourwebsite.com"}
              </Typography>
            </Grid>
          </Grid>

          <Divider sx={{ my: 2 }} />

          {/* Summary Section */}
          <Box sx={{ my: 2 }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#A020F0' }}>SUMMARY</Typography>
            <Typography>{basicDetails.objective || "Objective goes here."}</Typography>
          </Box>

          <Divider sx={{ my: 2 }} />

          {/* Work Experience */}
          {sectionHeadings.workExperience && (
            <>
          <Box sx={{ my: 2 }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#A020F0' }}>{sectionHeadings.workExperience}</Typography>
            {workExperience.length > 0 ? (
              workExperience.map((work, index) => (
                <Box key={index} sx={{ my: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {work.position}
                  </Typography>
                  <Typography variant="subtitle1">{work.company} | {work.duration}</Typography>
                </Box>
              ))
            ) : (
              <Typography>No work experience entries.</Typography>
            )}
          </Box>
          <Divider sx={{ my: 2 }} />
            </>
          )}

          {/* Education Section */}
          {sectionHeadings.education && (
            <>
          <Box sx={{ my: 2 }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#A020F0' }}>{sectionHeadings.education}</Typography>
            {education.length > 0 ? (
              education.map((edu, index) => (
                <Box key={index} sx={{ my: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{edu.degree}</Typography>
                  <Typography variant="subtitle1">{edu.institution}, {edu.year}</Typography>
                </Box>
              ))
            ) : (
              <Typography>No education entries.</Typography>
            )}
          </Box>
          <Divider sx={{ my: 2 }} />
            </>
        )}

          {/* Projects Section */}
          {sectionHeadings.projects && (
            <>
          <Box sx={{ my: 2 }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#A020F0' }}>{sectionHeadings.projects}</Typography>
            {projects.length > 0 ? (
              projects.map((project, index) => (
                <Box key={index} sx={{ my: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{project.title}</Typography>
                  <Typography>{project.description}</Typography>
                </Box>
              ))
            ) : (
              <Typography>No project entries.</Typography>
            )}
          </Box>
          <Divider sx={{ my: 2 }} />
            </>
          )}


          {/* Skills Section */}
          {sectionHeadings.skills && (
            <>
          <Box sx={{ my: 2 }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#A020F0' }}>{sectionHeadings.skills}</Typography>
            {skills.length > 0 ? (
              <List>
                {skills.map((skill, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={skill.skill || "Skill"} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <Typography>No skills provided.</Typography>
            )}
          </Box>
          <Divider sx={{ my: 2 }} />
            </>
          )}


          {/* Custom Sections */}
          {sectionHeadings.customSections && customSections.length > 0 && (
            <>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#A020F0' }}>{sectionHeadings.customSections}</Typography>
              {customSections.map((section, index) => (
                <Box key={index} sx={{ my: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {section.sectionName || "Section Name"}
                  </Typography>
                  <Typography>{section.content || "Section content"}</Typography>
                </Box>
              ))}
            </>
          )}
        </Paper>
        </Container>
      </div>
    </div>
  );
};

export default ResumeTemplate4;
