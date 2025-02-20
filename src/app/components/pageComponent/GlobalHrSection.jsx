import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material";
import { FaCheck } from "react-icons/fa";
import GlobalGrowthPage from "./GlobalGrowthPage";

export default function GlobalHrSection({ title, description, content, image, reverse }) {
  const currentTheme = useTheme();

  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: "100%",
        mt: { xs: 8, sm: 10, lg: 2 },
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
        <GlobalGrowthPage
          item={[
            {
              image: image,
              description: (
                <>
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography
                        variant="h1"
                        sx={{
                          color: "text.primary",
                          mb: 2,
                          textAlign: "left",
                          fontSize: "35px",
                        }}
                      >
                        {title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "text.primary",
                          mb: 6,
                          textAlign: "left",
                        }}
                      >
                        {description}
                      </Typography>
                    </Grid>
                  </Grid>

                  {content.map((text, index) => (
                    <Grid container key={index} sx={{ mb: 4 }}>
                      <Grid item xs={1}>
                        <FaCheck style={{ color: "#FFA500", fontSize: "25px" }} />
                      </Grid>
                      <Grid item xs={11}>
                        <Typography
                          variant="body1"
                          sx={{
                            color: "text.primary",
                          }}
                        >
                          {text}
                        </Typography>
                      </Grid>
                    </Grid>
                  ))}
                </>
              ),
            },
          ]}
          reverse={reverse}
        />
      </Grid>
    </Box>
  );
}
