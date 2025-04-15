import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { useMediaQuery, useTheme } from "@mui/material";

export default function FrontPage({
  title,
  description,
  buttonText,
  onButtonClick,
  bannerImage,
  showBanner = true,
  bgImage,
  bgDark,
  sx = {},
}) {
  const currentTheme = useTheme();
  const isMobile = useMediaQuery(currentTheme.breakpoints.up("md"));

  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: "100%",
        mt: { xs: 5, sm: 2 },
        background: bgImage
        ? `url(${bgImage}) no-repeat center center`
        : `url(${bgDark}) no-repeat center center`,
        backgroundSize: "cover",
        ...sx,
        ...theme.applyStyles("dark", {
          background: bgDark
            ? `url(${bgDark}) no-repeat center center`
            : "radial-gradient(ellipse 80% 50% at 50% -20%, hsla(210, 100%, 16%, 0), transparent)",
        }),
      })}
    >
      <Container
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "99vh",
        }}
      >
        <Grid
          container
          sx={{
            width: "100%",
            height: "100%",
          }}
        >
          <Grid
            item
            sm={12}
            md={showBanner && isMobile ? 6 : 12}
            sx={{
              padding: "15px",
              // background: "linear-gradient(0deg, rgba(44,33,21,0.9) 100%)", //issue
              "@media (min-width: 767px) and (max-width: 899px)": {
                height: "auto", // Adjust carousel height for this range
              },
            }}
            className="max-sm:text-center max-sm:mb-50"
          >
            <Stack
              spacing={2}
              sx={{
                paddingTop: "12%",
                paddingBottom: "10%",
                height: { xs: "auto", md: "580px" }, // Adjust height based on screen size
                width: "100%",
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  fontWeight: "bold",
                  fontFamily: "Roboto, sans-serif",
                  color: "primary.main",
                  justifyContent: "left",
                  fontSize: { xs: "40px", sm: "50px", md: "60px" },
                  background:
                    "linear-gradient(to right, #7A297B 0%, #602C85 30%, #4A2A95 60%, #341C98 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {title}
              </Typography>
              <Typography
                className="pt-3"
                sx={{
                  fontSize: "18px",
                  fontFamily: '"Roboto", sans-serif',
                  fontWeight: "bold",
                  color: "text.primary",
                }}
              >
                {description}
              </Typography>
              <Box
                sx={{ width: { xs: "100%", sm: "auto" } }}
                className="mt-[20px]"
              >
                <Button
                  onClick={onButtonClick}
                  variant="contained"
                  sx={{
                    background:
                      "linear-gradient(45deg, #D4A1FF 10%, #FF9E53 90%)",
                    border: 0,
                    borderRadius: 1,
                    boxShadow: "0 3px 5px 2px rgba(63,59,56 .3)",
                    color: "white",
                    height: "60px",
                    width: { xs: "100%", sm: "auto" },
                    padding: "0 30px",
                    fontSize: "18px",
                  }}
                  className="max-sm:my-20 max-sm:text-[12px]"
                >
                  {buttonText}
                </Button>
              </Box>
            </Stack>
          </Grid>
          {showBanner && isMobile && (
            <Grid item sm={12} md={6}>
              <img
                src={bannerImage}
                className="w-full baner h-[90%] mt-[5%] block max-md:hidden max-sm:hidden animate-bounce-slow"
                alt="Banner"
              />
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
}
