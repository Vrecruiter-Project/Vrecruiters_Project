import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";

const items = [
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: "Strong Database",
    description:
      "Automated and online processes and an integrated database of one million plus candidates and highly evolved search techniques to meet your requirements.",
  },
  {
    icon: <ConstructionRoundedIcon />,
    title: "Commitment",
    description:
      "Our team is committed to find the right candidates for your organization. We don’t stop till we find the right match to help you achieve your business goals effectively.",
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: "Flexibility",
    description:
      "We understand that no two businesses are the same, which is why our team works closely with our clients to tailor our recruitment solutions to their needs and culture.",
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: "Experience and Expertise",
    description:
      "Our team has years of experience and is composed of skilled recruiters who use the latest technologies and strategies in to provide you with top-notch solutions.",
  },
];

export default function Highlights({ style }) {
  return (
    <Box
      id="highlights"
      sx={(theme) => ({
        pt: { xs: 4, sm: 12 },

        pb: { xs: 8, sm: 16 },
        color: "white",
        bgcolor: "hsl(220, 30%, 2%,.6)",
        background:
          "linear-gradient(0deg, rgba(226,225,233,1) 100%, rgba(252,237,226,1) 100%)",
        ...theme.applyStyles("dark", {
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% -20%, hsla(210, 100%, 16%, 0), rgba(201,130,58,0.7) 10%, rgba(0,0,0,0.4))",
        }),
        ...style,
      })}
      className="max-md:px-7"
    >
      <Container
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: "100%", md: "60%" },
            textAlign: { xm: "center", sm: "center", md: "center" },
          }}
        >
          <Typography
            component="h2"
            variant="h4"
            className="text-center"
            sx={{ color: "text.primary" }}
          >
            Why choose our services?
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "grey.400" }}
            className="text-center"
          >
            We transform your needs into reality.
          </Typography>
        </Box>
        <Grid container spacing={4.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <Stack
                direction="column"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  color: "inherit",
                  p: 3,
                  height: "100%",
                  border: "1px solid",
                  borderColor: "hsla(220, 25%, 25%, .3)",
                  background: "transparent",
                  backgroundColor: "grey.900",
                  boxShadow: "none",
                }}
              >
                <Box sx={{ opacity: "50%" }}>{item.icon}</Box>
                <div>
                  <Typography gutterBottom sx={{ fontWeight: "medium" }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "grey.400" }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
