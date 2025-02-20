import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { Chip as MuiChip } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import image from "../../../../assests/images/aboutt.jpg";
import { styled } from "@mui/material/styles";

import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";
import EdgesensorHighRoundedIcon from "@mui/icons-material/EdgesensorHighRounded";
import ViewQuiltRoundedIcon from "@mui/icons-material/ViewQuiltRounded";

const items = [
  {
    icon: <ViewQuiltRoundedIcon />,
    title: "Our Vision",
    description:
      "To become the leading recruitment solution provider in India, with a multi industry focus and service customers at a global scale.",
    imageLight:
      'url("/static/images/templates/templates-images/dash-light.png")',
    imageDark: 'url("/static/images/templates/templates-images/dash-dark.png")',
  },
  {
    icon: <EdgesensorHighRoundedIcon />,
    title: "Our Mission",
    description:
      "We Adhere to and are committed to deliver what we promise each and every time! To work with absolute trust, transparency and ethical standards.",
    imageLight:
      'url("/static/images/templates/templates-images/mobile-light.png")',
    imageDark:
      'url("/static/images/templates/templates-images/mobile-dark.png")',
  },
  {
    icon: <DevicesRoundedIcon />,
    title: "Our Area of Expertise",
    description:
      "We have recruitment expertise in providing solutions for IT companies, non IT corporates and SMEs, start up hiring , we provide temporary staffing solutions.",
    imageLight:
      'url("/static/images/templates/templates-images/devices-light.png")',
    imageDark:
      'url("/static/images/templates/templates-images/devices-dark.png")',
  },
];

const Chip = styled(MuiChip)(({ theme }) => ({
  variants: [
    {
      props: ({ selected }) => selected,
      style: {
        background:
          "linear-gradient(to bottom right, hsl(210, 98%, 48%), hsl(210, 98%, 35%))",
        color:
          "hsl(110.13698630136986, 33.031674208144786%, 43.333333333333336%)",
        borderColor: theme.palette.primary.light,
        "& .MuiChip-label": {
          color: "hsl(0, 0%, 100%)",
        },
        ...theme.applyStyles("dark", {
          borderColor: theme.palette.primary.dark,
        }),
      },
    },
  ],
}));

export default function Features({ style }) {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <Box
      sx={(theme) => ({
        width: "100%",
        mt: { xs: 8, sm: 12 },
        background:
          "linear-gradient(0deg, rgba(240,239,243,1) 100%, rgba(252,237,226,1) 100%)",
        ...theme.applyStyles("dark", {
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% -20%, hsla(210, 100%, 16%, 0), transparent)",
        }),
        ...style,
      })}
    >
      <Container id="features" sx={{ py: { xs: 8, sm: 16 } }}>
        <Grid container spacing={6} className="max-md:px-7">
          <Grid item xs={12} md={6}>
            <div>
              <Typography
                component="h2"
                variant="h4"
                sx={{ color: "text.primary" }}
              >
                About Us
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "text.secondary", mb: { xs: 2, sm: 4 } }}
              >
                Our commitment to our customers success has given us repeat
                business time and again!
              </Typography>
            </div>
            <Grid
              container
              item
              sx={{ gap: 1, display: { xs: "auto", sm: "none" } }}
            >
              {items.map(({ title }, index) => (
                <Chip
                  key={index}
                  label={title}
                  onClick={() => handleItemClick(index)}
                  selected={selectedItemIndex === index}
                />
              ))}
            </Grid>
            <Card
              variant="outlined"
              sx={{ display: { xs: "auto", sm: "none" }, mt: 4 }}
            >
              <Box
                sx={(theme) => ({
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  minHeight: 280,
                  backgroundImage: "var(--main-bg-image)",
                  ...theme.applyStyles("dark", {
                    backgroundImage: "var(--main-bg-image)",
                  }),
                })}
                style={{
                  "--items-imageLight": items[selectedItemIndex].imageLight,
                  "--items-imageDark": items[selectedItemIndex].imageDark,
                }}
              />
              <Box sx={{ px: 2, pb: 2 }}>
                <Typography
                  gutterBottom
                  sx={{ color: "text.primary", fontWeight: "medium" }}
                >
                  {selectedFeature.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", mb: 1.5 }}
                >
                  {selectedFeature.description}
                </Typography>
                <Link
                  color="primary"
                  variant="body2"
                  sx={{
                    fontWeight: "bold",
                    display: "inline-flex",
                    alignItems: "center",
                    "& > svg": { transition: "0.2s" },
                    "&:hover > svg": { transform: "translateX(2px)" },
                  }}
                >
                  <span>Learn more</span>
                  <ChevronRightRoundedIcon
                    fontSize="small"
                    sx={{ mt: "1px", ml: "2px" }}
                  />
                </Link>
              </Box>
            </Card>
            <Stack
              direction="column"
              spacing={2}
              useFlexGap
              sx={{
                justifyContent: "center",
                alignItems: "flex-start",
                width: "100%",
                display: { xs: "none", sm: "flex" },
              }}
            >
              {items.map(({ icon, title, description }, index) => (
                <Container
                  key={index}
                  component={Button}
                  onClick={() => handleItemClick(index)}
                  sx={[
                    (theme) => ({
                      p: 3,
                      height: "fit-content",
                      width: "100%",
                      background: "none",
                    }),
                    selectedItemIndex === index &&
                      ((theme) => ({
                        backgroundColor: "action.selected",
                        borderColor: "primary.light",
                        ...theme.applyStyles("dark", {
                          borderColor: "primary.dark",
                        }),
                      })),
                  ]}
                >
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      textAlign: "left",
                      flexDirection: { xs: "column", md: "row" },
                      alignItems: { md: "center" },
                      gap: 2.5,
                    }}
                  >
                    <Box
                      sx={[
                        (theme) => ({
                          color: "grey.400",
                          ...theme.applyStyles("dark", {
                            color: "grey.600",
                          }),
                        }),
                        selectedItemIndex === index && {
                          color: "primary.main",
                        },
                      ]}
                    >
                      {icon}
                    </Box>
                    <div>
                      <Typography
                        gutterBottom
                        sx={{ color: "text.primary", fontWeight: "medium" }}
                      >
                        {title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary", mb: 1.5 }}
                      >
                        {description}
                      </Typography>
                    </div>
                  </Box>
                </Container>
              ))}
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: { xs: "none", sm: "flex" }, width: "100%" }}
          >
            <Card
              variant="outlined"
              sx={{
                height: "100%",
                width: "100%",
                display: { xs: "flex", sm: "flex" },
                pointerEvents: "none",
              }}
            >
              <img
                style={{
                  maxHeight: "100%",
                  maxWidth: "100%",
                  height: "100%",
                  width: "100%",
                }}
                src={image}
                alt=""
              />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
