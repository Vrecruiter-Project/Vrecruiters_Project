import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useNavigate } from "react-router-dom";
import SitemarkIcon from "../../components/pageComponent/SitemarkIcon";
import ToggleColorMode from "../../components/theme/ToggleColorMode";

function LandingPageAppBar({ mode, toggleColorMode }) {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: "smooth" });
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
      setOpen(false);
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: 0,
        bgcolor: "transparent",
        backgroundImage: "none",
        mt: 2,
        mx: 0,
      }}
    >
      <Container style={{ maxWidth: "90%" }}>
        <Toolbar
          variant="regular"
          sx={(theme) => ({
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: 0,
            borderRadius: "999px",
            backdropFilter: "blur(24px)",
            maxHeight: 40,
            border: "1px solid",
            borderColor: "divider",
            bgcolor: "hsla(220, 60%, 99%, 0.6)",
            boxShadow:
              "0 1px 2px hsla(210, 0%, 0%, 0.05), 0 2px 12px hsla(210, 100%, 80%, 0.5)",
            ...theme.applyStyles("dark", {
              bgcolor: "hsla(220, 0%, 0%, 0.7)",
              boxShadow:
                "0 1px 2px hsla(210, 0%, 0%, 0.5), 0 2px 12px hsla(210, 100%, 25%, 0.3)",
            }),
          })}
        >
          <Box
            sx={{ flexGrow: 1, display: "flex", alignItems: "center", px: 0 }}
          >
            <SitemarkIcon />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Button
                variant="text"
                color="info"
                size="large"
                onClick={() => {
                  navigate("/");
                  scrollToSection("hero");
                }}
                sx={{ fontWeight: "300" }}
              >
                Home
              </Button>
              <Button
                variant="text"
                color="info"
                size="large"
                onClick={() => scrollToSection("landing-page-form")}
                sx={{ fontWeight: "300" }}
              >
                Form
              </Button>
              <Button
                variant="text"
                color="info"
                size="large"
                onClick={() => scrollToSection("landing-page-blogs")}
                sx={{ fontWeight: "300" }}
              >
                Blogs
              </Button>
              <Button
                variant="text"
                color="info"
                size="large"
                onClick={() => scrollToSection("landing-page-faq")}
                sx={{ fontWeight: "300" }}
              >
                FAQ
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 0.5,
              alignItems: "center",
            }}
          >
            <ToggleColorMode
              data-screenshot="toggle-mode"
              mode={mode}
              toggleColorMode={toggleColorMode}
              size="large"
            />
          </Box>
          <Box sx={{ display: { sm: "flex", md: "none" } }}>
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
              <Box sx={{ p: 2, backgroundColor: "background.default" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <ToggleColorMode
                    mode={mode}
                    toggleColorMode={toggleColorMode}
                  />
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                <Divider sx={{ my: 3 }} />
                <MenuItem
                  onClick={() => {
                    navigate("/");
                    scrollToSection("hero");
                  }}
                  sx={{ fontWeight: "300" }}
                >
                  Home
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection("landing-page-form")}
                  sx={{ fontWeight: "300" }}
                >
                  Form
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection("landing-page-blogs")}
                  sx={{ fontWeight: "300" }}
                >
                  Blogs
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection("landing-page-faq")}
                  sx={{ fontWeight: "300" }}
                >
                  FAQ
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

LandingPageAppBar.propTypes = {
  mode: PropTypes.oneOf(["dark", "light"]).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default LandingPageAppBar;
