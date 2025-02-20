import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
} from "@mui/material";
import Container from "@mui/material/Container";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

const blogPosts = [
  {
    id: 1,
    title: "Understanding React Hooks",
    author: "Jane Doe",
    date: "2024-07-01",
    content:
      "React Hooks are functions that let you use state and other React features without writing a class...",
    tags: ["React", "JavaScript", "Web Development"],
    image:
      "https://imgs.search.brave.com/gbTRQ098m_9rkpVa49_MdGWhq8sB_CXRD-9I-RG9pDU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9kaWdpdGFsLXRy/YW5zZm9ybWF0aW9u/LWNvbmNlcHR1YWwt/Z2VuZXJhdGlvbi10/ZWNobm9sb2d5LWVy/YV8xMDk2NDMtMTMx/LmpwZz9zaXplPTYy/NiZleHQ9anBn",
  },
  {
    id: 2,
    title: "A Guide to Modern CSS Techniques",
    author: "John Smith",
    date: "2024-07-05",
    content:
      "CSS has evolved significantly over the years. In this post, we explore modern CSS techniques such as Flexbox, Grid, and CSS Variables...",
    tags: ["CSS", "Web Design", "Front-end"],
    image:
      "https://imgs.search.brave.com/cs3fb3lSbOfKGDohoWFA9UITBMMyiJOH6HNyBAX81a8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9h/aS1udWNsZWFyLWVu/ZXJneS1mdXR1cmUt/aW5ub3ZhdGlvbi1k/aXNydXB0aXZlLXRl/Y2hub2xvZ3lfNTM4/NzYtMTI5Nzg0Lmpw/Zz9zaXplPTYyNiZl/eHQ9anBn",
  },
];

const BlogPostCards = () => {
  return (
    <>
      <Container id="landing-page-blogs" maxWidth="lg">
        <Typography variant="h4" align="center" style={{ marginTop: "50px" }}>
          Posts
        </Typography>
        <Grid container spacing={5} style={{ marginTop: "2px" }}>
          {blogPosts.map((result, index) => (
            <Grid item xs={12} md={6} ms={4} key={index}>
              <Card sx={{ maxWidth: "full" }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={result.image}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {result.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {result.content}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default BlogPostCards;
