import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material";
import GrowthImg from "../../../../../assests/images/DigitalMGrowth.png";
import GlobalGrowthPage from "../../../../../components/pageComponent/GlobalGrowthPage";

export default function GrowthPage() {
  const currentTheme = useTheme();

  const item = [{
    image: GrowthImg,
    description: 
    (<>
<Box>
      <Typography variant="body1" paragraph>
        Digital marketing services provide businesses of all sizes with an opportunity to market their brand 24/7 at a low cost. From startups to medium-sized enterprises to multiple-location companies, a digital marketing company helps you expand your niche market reach to offer goods and services to your target customers, irrespective of time differences or location.
      </Typography>
      <Typography variant="body1" paragraph>
        Hiring an internet marketing agency is one of the best ways to reach your prospects while maintaining a robust relationship with your existing clients. As long as your business has a strong digital presence, your customers will always find you.
      </Typography>
      <Typography variant="body1" paragraph>
        Since 2005, our digital marketing company has been partnering with{' '}
        <Box component="span" sx={{ color: 'orange', fontWeight: 'bold' }}>
          hundreds of businesses
        </Box>{' '}
        in the United States to achieve their conversion goals. Throughout the years, we’ve provided an array of custom digital marketing services to our clients and generated the following results.
      </Typography>
    </Box>
    </>)
  }]

  return (
    <Box
            id="hero"
            sx={(theme) => ({
                width: "100%",
                mt: { xs: 8, sm: 10, lg: 12 },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                background: "background.primary",
                backgroundSize: "cover",
                ...theme.applyStyles("dark", {
                    backgroundImage:
                        "radial-gradient(ellipse 80% 50% at 50% -20%, hsla(210, 100%, 16%, 0), transparent)",
                }),
            })}
        >
            <Grid
                container
                sx={{
                    width: "80%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Grid item sm={12} md={12}>
                    <Stack spacing={2}
                        sx={{
                            width: "100%",
                            textAlign: "center",
                        }}
                    >
                        <Typography
                            variant="h2"
                            sx={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "column",
                                fontWeight: "bold",
                                fontFamily: "Roboto, sans-serif",
                                color: "primary.main",
                                justifyContent: "center",
                                fontSize: { xs: "22px", sm: "30px", md: "40px" },
                                background:
                                    "linear-gradient(to right, #7A297B 0%, #602C85 30%, #4A2A95 60%, #341C98 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                textAlign: "center"
                            }}
                        >
                          How Digital Marketing Services Drive Business Growth
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "column",
                                fontWeight: "bold",
                                fontFamily: "Roboto, sans-serif",
                                color: "primary.main",
                                textAlign: "center",
                                justifyContent: "center",
                                fontSize: { xs: "14px", sm: "14px", md: "20px" },
                                background:
                                    "linear-gradient(to right, #7A297B 0%, #602C85 30%, #4A2A95 60%, #341C98 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                             Engage Your Target Customers at the Right Time on the Right Platform.
                        </Typography>
                    </Stack>
                </Grid>
                <GlobalGrowthPage item={item} />
            </Grid>
        </Box>
  );
}
