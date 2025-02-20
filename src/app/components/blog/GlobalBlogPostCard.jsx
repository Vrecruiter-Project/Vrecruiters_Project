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
import PropTypes from "prop-types";
function GlobalBlogPostCard({ blogPosts }) {
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
}

GlobalBlogPostCard.propTypes = {
  blogPosts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      author: PropTypes.string,
      date: PropTypes.string,
      content: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string),
      image: PropTypes.string,
    })
  ),
};

export default GlobalBlogPostCard;
