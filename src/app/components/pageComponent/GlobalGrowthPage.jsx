import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export default function GlobalGrowthPage({ item, reverse = false }) {
  return (
    <>
      {item.map((item, index) => (
        <Grid container key={index} direction={reverse ? "row-reverse" : "row"}>
          <Grid
            item
            sm={12}
            md={6}
            sx={{
              mt: { xs: 3 },
              display: "flex",
              justifyContent: reverse ? "flex-end" : "flex-start",
            }}
          >
            <img
              src={item.image}
              className="w-full h-full scale-[90%]"
              alt="Banner"
            />
          </Grid>
          <Grid
            item
            sm={12}
            md={6}
            sx={{
              mt: { xs: 0, sm: 8, lg: 12 },
              padding: "15px",
              background: "linear-gradient(0deg, rgba(44,33,21,0.9) 100%)",
              "@media (min-width: 767px) and (max-width: 899px)": {
                height: "auto",
              },
              textAlign: reverse ? "left" : "left",
            }}
            className="max-sm:text-center max-sm:mb-50"
          >
            <Stack
              spacing={2}
              sx={{
                width: "100%",
              }}
            >
              <Typography
                variant="body1"
                className="pt-3"
                sx={{
                  fontSize: { xs: 14, sm: 15, md: 15 },
                  fontFamily: '"Roboto", sans-serif',
                  color: "text.primary",
                }}
              >
                {item.description}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      ))}
    </>
  );
}
