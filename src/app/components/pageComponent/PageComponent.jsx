import {
  createTheme,
  CssBaseline,
  styled,
  ThemeProvider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { useAtom } from "jotai";
import Box from "@mui/material/Box";
import { themeatom } from "../../assests/globalvars/themeatom";
import NavBar from "../Navbar/NavBar.jsx";
import getLPTheme from "../theme/getLPTheme";
import Footer from "./Footer";
import HomeMatter from "../animations/matter/HomeMatter.jsx";
import Copyright from "./Copyright.jsx";

const Page = styled(Box)(({ theme }) => ({
  position: "relative",
  paddingTop: theme.spacing(3),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),

  [theme.breakpoints.up("sm")]: {
    paddingTop: theme.spacing(3),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },

  [theme.breakpoints.up("md")]: {
    paddingTop: theme.spacing(5),
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
  },

  [theme.breakpoints.up("lg")]: {
    paddingTop: theme.spacing(6),
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8),
  },
}));

function PageComponent({ children, navLinks, useMatter = false }) {
  const [mode, setMode] = useAtom(themeatom);
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const currentTheme = useTheme();
  const isMobile = useMediaQuery(currentTheme.breakpoints.down("lg")); // Determine if screen is mobile

  const defaultTheme = createTheme({
    palette: { mode },
    typography: {
      fontFamily: "Amita, sans-serif",
      h1: {
        fontFamily: "CustomFont, sans-serif",
        fontWeight: 700,
      },
      body1: {
        fontFamily: "Roboto, sans-serif",   
      },
    },
  });

  const LPtheme = createTheme(getLPTheme(mode));

  return (
    <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
      <CssBaseline />
      <Page>
        {!isMobile && useMatter && (
          <HomeMatter
            className={"absolute inset-0"}
            style={{
              zIndex: -1,
            }}
          />
        )}
        <NavBar navLinks={navLinks ? navLinks : null} />
        <Box
          sx={{
            bgcolor: "transparent",
            scrollBehavior: "smooth",
            width: "100%",
            height: "100%",
            opacity: "100%",
          }}
        >
          {children}
          <Footer
            style={{
              background: "transparent",
            }}
          />
        </Box>
      </Page>
      <Copyright />
    </ThemeProvider>
  );
}

export default PageComponent;
