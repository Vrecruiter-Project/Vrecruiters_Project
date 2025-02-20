import React, { useRef } from 'react';
import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Divider,
  Button,
  Container,
  Paper,
} from '@mui/material';
import { useAtom } from 'jotai';
import html2pdf from 'html2pdf.js';
import { resumedataatom } from '../../../../../../../assests/globalvars/resumebuildatom';

const ResumeTemplate = ({ sectionHeadings }) => {
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
    <div sx={{ padding: '20px', backgroundColor: '#F0F4F8'}}>
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

      {/* Header Section */}
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={4}>
          <Avatar
            alt={basicDetails.name}
            src={basicDetails.image ? URL.createObjectURL(basicDetails.image) : ""}
            sx={{ width: 120, height: 120 }}
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography variant="h4" fontWeight="bold">
            {basicDetails.name || 'Your Name'}
          </Typography>
          <Typography variant="subtitle1">{basicDetails.profession || 'Your Profession'}</Typography>
          <Typography variant="body1">{basicDetails.objective || 'Objective goes here.'}</Typography>
        </Grid>
      </Grid>

      <Divider sx={{ marginY: 2 }} />

      {/* Contact Info */}
      <Grid container spacing={2}>
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
        <Box mt={3}>
          <Typography variant="h5" fontWeight="bold">{sectionHeadings.workExperience}</Typography>
          {workExperience.length > 0 ? (
            workExperience.map((work, index) => (
              <Box key={index} mt={2}>
                <Typography variant="subtitle1"><strong>{work.company || 'Company Name'}</strong></Typography>
                <Typography variant="body2">{work.position || 'Position'} | {work.duration || 'Duration'}</Typography>
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
        <Box mt={3}>
          <Typography variant="h5" fontWeight="bold">{sectionHeadings.education}</Typography>
          {education.length > 0 ? (
            education.map((edu, index) => (
              <Box key={index} mt={2}>
                <Typography variant="subtitle1"><strong>{edu.degree || 'Degree'}</strong></Typography>
                <Typography variant="body2">{edu.institution || 'Institution Name'} - {edu.year || 'Year'}</Typography>
              </Box>
            ))
          ) : (
            <Typography>No education entries.</Typography>
          )}
        </Box>
      )}

      {/* Projects Section */}
      {sectionHeadings.projects && (
        <Box mt={3}>
          <Typography variant="h5" fontWeight="bold">{sectionHeadings.projects}</Typography>
          {projects.length > 0 ? (
            projects.map((project, index) => (
              <Box key={index} mt={2}>
                <Typography variant="subtitle1"><strong>{project.title || 'Project Title'}</strong></Typography>
                <Typography variant="body2">{project.description || 'Project description'}</Typography>
              </Box>
            ))
          ) : (
            <Typography>No project entries.</Typography>
          )}
        </Box>
      )}

      {/* Skills Section */}
      {sectionHeadings.skills && (
        <Box mt={3}>
          <Typography variant="h5" fontWeight="bold">{sectionHeadings.skills}</Typography>
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
        <Box mt={3}>
          <Typography variant="h5" fontWeight="bold">{sectionHeadings.customSections}</Typography>
          {customSections.map((section, index) => (
            <Box key={index} mt={2}>
              <Typography variant="subtitle1"><strong>{section.sectionName || 'Section Name'}</strong></Typography>
              <Typography variant="body2">{section.content || 'Section content'}</Typography>
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

export default ResumeTemplate;
