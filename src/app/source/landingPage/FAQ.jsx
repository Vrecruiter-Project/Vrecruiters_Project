import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqItems = [
  {
    id: "panel1",
    question: "How can I apply for a job through V Recruiters?",
    answer: (
      <Typography
        variant="body2"
        gutterBottom
        sx={{ maxWidth: { sm: "100%", md: "70%" } }}
      >
        To apply for a job, visit our website and navigate to the 'Job Listings'
        section. Select a job that matches your skills and click on 'Apply Now'.
        Follow the instructions to submit your application.
      </Typography>
    ),
  },
  {
    id: "panel2",
    question: "What kind of jobs does V Recruiters specialize in?",
    answer: (
      <Typography
        variant="body2"
        gutterBottom
        sx={{ maxWidth: { sm: "100%", md: "70%" } }}
      >
        V Recruiters specializes in a wide range of industries including IT,
        healthcare, finance, engineering, and more. We provide opportunities for
        both entry-level and experienced professionals.
      </Typography>
    ),
  },
  {
    id: "panel3",
    question: "How can I get in touch with a recruiter?",
    answer: (
      <Typography
        variant="body2"
        gutterBottom
        sx={{ maxWidth: { sm: "100%", md: "70%" } }}
      >
        You can contact a recruiter by emailing us at{" "}
        <Link>recruiter@vrecruiters.com</Link> or by calling our office at (123)
        456-7890. Our team is ready to assist you with your job search.
      </Typography>
    ),
  },
  {
    id: "panel4",
    question: "Does V Recruiters charge any fees for job seekers?",
    answer: (
      <Typography
        variant="body2"
        gutterBottom
        sx={{ maxWidth: { sm: "100%", md: "70%" } }}
      >
        No, V Recruiters does not charge any fees to job seekers. Our services
        are free for candidates looking for job opportunities. We are
        compensated by the employers who seek to hire the best talent.
      </Typography>
    ),
  },
  {
    id: "panel5",
    question: "How can I prepare for an interview arranged by V Recruiters?",
    answer: (
      <Typography
        variant="body2"
        gutterBottom
        sx={{ maxWidth: { sm: "100%", md: "70%" } }}
      >
        We recommend researching the company and the role you are applying for.
        Practice common interview questions and ensure you have your resume and
        any other required documents ready. Our recruiters can also provide
        personalized advice to help you prepare.
      </Typography>
    ),
  },
  {
    id: "panel6",
    question: "What should I do if I don’t hear back after an interview?",
    answer: (
      <Typography
        variant="body2"
        gutterBottom
        sx={{ maxWidth: { sm: "100%", md: "70%" } }}
      >
        If you do not hear back within the specified time frame, feel free to
        follow up with your recruiter. They will provide you with updates and
        feedback regarding your application status.
      </Typography>
    ),
  },
];

export default function FAQ() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container
      id="landing-page-faq"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Typography
        component="h2"
        variant="h4"
        sx={{
          color: "text.primary",
          width: { sm: "100%", md: "60%" },
          textAlign: { sm: "left", md: "center" },
        }}
      >
        Frequently asked questions
      </Typography>
      <Box sx={{ width: "100%" }}>
        {faqItems.map((item) => (
          <Accordion
            key={item.id}
            expanded={expanded === item.id}
            onChange={handleChange(item.id)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${item.id}d-content`}
              id={`${item.id}d-header`}
            >
              <Typography component="h3" variant="subtitle2">
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>{item.answer}</AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
}
