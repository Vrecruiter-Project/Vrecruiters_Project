import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  useTheme,
} from "@mui/material";
import image from "../../assests/images/aboutt.jpg";

export default function ContentCard({
  title,
  description,
  imageSrc,
  button,
  onClick,
  imagePosition = "right",
}) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        pt: { xs: 8, sm: 12 },
        backgroundColor: "transparent",
        overflow: "hidden",
      }}
    >
      <Card
        sx={{
          px: { sm: 14 },
          display: "flex",
          flexDirection: { xs: "column", md: imageSrc ? "row" : "column" },
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.15)",
          borderRadius: "20px",
          transition: "transform 0.3s, box-shadow 0.3s",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        <Grid
          container
          direction={
            imagePosition === "left" && imageSrc ? "row-reverse" : "row"
          }
          alignItems="center"
          justifyContent="center"
          sx={{ height: "100%" }}
        >
          {/* Content Section */}
          <Grid item xs={12} md={imageSrc ? 8 : 12}>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: {
                  xs: "center",
                  md: imageSrc ? "flex-start" : "center",
                },
                justifyContent: "center",
                textAlign: { xs: "center", md: imageSrc ? "left" : "center" },
                p: { xs: 3, sm: 5 },
              }}
            >
              <Typography
                component="h2"
                variant="h5"
                sx={{
                  color: theme.palette.text.primary,
                  mb: 3,
                  fontWeight: "700",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  position: "relative",
                  "&::after": {
                    content: '""',
                    width: { xs: "50px", md: imageSrc ? "50px" : "60px" },
                    height: "3px",
                    background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
                    position: "absolute",
                    bottom: "-10px",
                    left: { xs: "45%", md: imageSrc ? "0px" : "45%" },
                    borderRadius: "2px",
                  },
                }}
              >
                {title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  mb: 3,
                  fontSize: "14px",
                  lineHeight: "1.75rem",
                }}
              >
                {description}
              </Typography>
              {button && (
                <Button
                  variant="contained"
                  onClick={onClick}
                  sx={{
                    background:
                      "linear-gradient(45deg, #D4A1FF 10%, #FF9E53 90%)",
                    border: 0,
                    borderRadius: 3,
                    color: "white",
                    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
                    textTransform: "uppercase",
                    px: 4,
                    py: 1.5,
                    fontSize: "1rem",
                    "&:hover": {
                      background:
                        "linear-gradient(45deg, #FF9E53 10%, #D4A1FF 90%)",
                      boxShadow: "0 5px 10px 2px rgba(255, 105, 135, .3)",
                    },
                  }}
                >
                  {button}
                </Button>
              )}
            </CardContent>
          </Grid>

          {/* Image Section */}
          {imageSrc && (
            <Grid item xs={12} md={4} sx={{
                                height: "auto",
            }}>
              <CardMedia
                component="img"
                image={imageSrc || image}
                alt="Card Image"
                sx={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: { xs: "20px 20px 0 0", md: "0 20px 20px 0" },
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              />
            </Grid>
          )}
        </Grid>
      </Card>
    </Box>
  );
}
