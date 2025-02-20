import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Typography, CardContent, Grid } from "@mui/material";
import resumeBuildServiceImage from "../../../../../assests/images/resumeWS.png";

export default function ResumeBuildService() {
  const theme = useTheme();
  return (
    <Grid container spacing={3} sx={{ mt: { xs: 2, sm: 6, md: 6 } }}>
      <Grid item xs={12}>
        <CardContent sx={{ p: 3 }}>
          <Grid container>
            <Grid
              item
              sm={12}
              md={5}
              sx={{
                padding: "15px",
              }}
            >
              <img
                src={resumeBuildServiceImage}
                className="w-full h-[92%] block max-md:hidden max-sm:hidden animate-ping-slow"
                alt="job Service"
              />
            </Grid>
            <Grid
              item
              sm={12}
              md={7}
              sx={{
                padding: "15px",
              }}
            >
              <Typography
                component="h2"
                variant="h5"
                sx={{
                  textAlign: { xs: "center", sm: "center", md: "left" },
                  color: theme.palette.text.primary,
                  mb: 3,
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  position: "relative",
                  "&::after": {
                    content: '""',
                    width: "80px",
                    height: "4px",
                    background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
                    position: "absolute",
                    bottom: "-10px",
                    left: { xs: "30%", sm: "45%", md: 0 },
                    borderRadius: "2px",
                  },
                }}
              >
                Resume/CV Writing and Review Services
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  mb: 3,
                  fontSize: "14px",
                  lineHeight: "1.75rem",
                  textAlign: { xs: "center", sm: "center", md: "left" },
                }}
              >
                Boost your career with our expert Resume/CV Writing and Review
                services. Our experienced writers create keyword-rich resumes
                that impress hiring managers and ATS, whether you're a seasoned
                professional, recent graduate, or changing careers.
              </Typography>
              <Typography
                component="h2"
                variant="h5"
                sx={{
                  textAlign: { xs: "center", sm: "center", md: "left" },
                  color: theme.palette.text.primary,
                  mb: 3,
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  position: "relative",
                  "&::after": {
                    content: '""',
                    width: "80px",
                    height: "4px",
                    background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
                    position: "absolute",
                    bottom: "-10px",
                    left: { xs: "30%", sm: "45%", md: 0 },
                    borderRadius: "2px",
                  },
                }}
              >
                Advantage of Our Services
              </Typography>
              <ul
                style={{
                  color: theme.palette.text.secondary,
                  mb: 3,
                  fontSize: "14px",
                  lineHeight: "1.75rem",
                  textAlign: { xs: "center", sm: "center", md: "left" },
                }}
              >
                <li>
                  <strong>Tailored Content :</strong> We customize your
                  resume/CV to highlight your unique strengths, experiences, and
                  achievements, ensuring it stands out in your industry.
                </li>
                <li>
                  <strong>ATS-Friendly Formatting :</strong>We use industry best
                  practices to format your resume/CV, ensuring it passes through
                  ATS filters and reaches human eyes.
                </li>
                <li>
                  <strong>Keyword Optimization :</strong>Our expert writers
                  integrate job-specific keywords that enhance your resume's
                  visibility in online job searches.
                </li>
                <li>
                  <strong>Comprehensive Review :</strong>Already have a
                  resume/CV? Let us review it! We provide detailed feedback on
                  structure, content, and areas for improvement to maximize your
                  chances of landing an interview.
                </li>
              </ul>
            </Grid>
          </Grid>
        </CardContent>
      </Grid>
    </Grid>
  );
}
