import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  Paper,
  MenuItem,
  Container,
  Drawer,
  IconButton,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { themeatom } from "../../assests/globalvars/themeatom";
import SitemarkIcon from "../pageComponent/SitemarkIcon";
import ToggleColorMode from "../theme/ToggleColorMode";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import scrollToSection from "../scrollFunctions/ScrollToSection";
import { DefaultNavLinks } from "./DefaultNavLinks";

function NavBar({ navLinks }) {
  const [open, setOpen] = useState(false);
  const [hoveredMenuIndex, setHoveredMenuIndex] = useState(null);
  const [hoveredSubmenuIndex, setHoveredSubmenuIndex] = useState(null);
  const [activeLink, setActiveLink] = useState(null);
  const [mode, setMode] = useAtom(themeatom);
  const navigate = useNavigate();
  const navBarData = navLinks ? navLinks : DefaultNavLinks;

  const toggleColorMode = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  const handleLinkClick = (link) => {
    setActiveLink(link.label);
    if (link.scrollTarget) {
      scrollToSection(link.scrollTarget);
    } else if (link.route) {
      navigate(link.route);
    }
  };

  const handleMenuMouseEnter = (index) => {
    setHoveredMenuIndex(index);
  };

  const handleMenuMouseLeave = () => {
    setHoveredMenuIndex(null);
    setHoveredSubmenuIndex(null);
  };

  const handleSubmenuMouseEnter = (subIndex) => {
    setHoveredSubmenuIndex(subIndex);
  };

  const handleSubmenuMouseLeave = () => {
    setHoveredSubmenuIndex(null);
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
          sx={(theme) => ({
            display: "flex",
            justifyContent: "space-between",
            flexShrink: 0,
            alignItems: "center",
            borderRadius: "999px",
            maxHeight: 40,
            border: "1px solid divider",
            backdropFilter: "blur(24px)",
            bgcolor: "hsla(220, 60%, 99%, 0.6)",
            boxShadow:
              "0 1px 2px hsla(210, 0%, 0%, 0.05), 0 2px 12px hsla(210, 100%, 80%, 0.5)",
            ...theme.applyStyles("dark", {
              bgcolor: "hsla(220, 0%, 0%, 0.7)",
              boxShadow:
                "0 1px 2px hsla(210, 0%, 0%, 0.5), 0 2px 12px hsla(210, 100%, 25%, 0.3)",
            }),
            padding: { xs: "8px", sm: "16px" },
          })}
        >
          <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
            <SitemarkIcon />
            <Box sx={{ display: { xs: "none", md: "flex" }, ml: 2 }}>
              {navBarData.map((link, index) => (
                <Box
                  key={index}
                  onMouseEnter={() => handleMenuMouseEnter(index)}
                  onMouseLeave={handleMenuMouseLeave}
                  sx={{ position: "relative" }}
                >
                  {link.submenu ? (
                    <Box sx={{ position: "relative" }}>
                      <Button
                        onClick={() => handleLinkClick(link)}
                        sx={{
                          fontWeight: "bold",
                          color:
                            activeLink === link.label
                              ? "primary.main"
                              : "text.secondary",
                          transition: "color 0.3s",
                          "&:hover": {
                            color: "primary.main",
                          },
                        }}
                      >
                        {link.label}
                        <ExpandMoreIcon />
                      </Button>
                      {hoveredMenuIndex === index && (
                        <Paper
                          elevation={3}
                          sx={{
                            position: "absolute",
                            left: 0,
                            top: "100%",
                            minWidth: "200px",
                            bgcolor: "background.paper",
                            borderRadius: "12px",
                            boxShadow:
                              "0 4px 8px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1)",
                            zIndex: 999,
                          }}
                        >
                          {link.submenu.map((submenuItem, subIndex) => (
                            <Box
                              key={subIndex}
                              onMouseEnter={() =>
                                handleSubmenuMouseEnter(subIndex)
                              }
                              onMouseLeave={handleSubmenuMouseLeave}
                              sx={{ position: "relative" }}
                            >
                              <MenuItem
                                onClick={() =>
                                  submenuItem.menulist
                                    ? null
                                    : handleLinkClick(submenuItem)
                                }
                                sx={{
                                  fontWeight: "bold",
                                  color: "text.secondary",
                                  "&:hover": {
                                    bgcolor: "primary.light",
                                    color: "primary.main",
                                  },
                                }}
                              >
                                {submenuItem.label}
                                {submenuItem.menulist && (
                                  <KeyboardArrowRightIcon
                                    sx={{ ml: { xs: 9, sm: 9 } }}
                                  />
                                )}
                              </MenuItem>
                              {submenuItem.menulist &&
                                hoveredSubmenuIndex === subIndex && (
                                  <Paper
                                    elevation={2}
                                    sx={{
                                      position: "absolute",
                                      top: 0,
                                      left: "100%",
                                      minWidth: "200px",
                                      bgcolor: "background.paper",
                                      borderRadius: "12px",
                                      boxShadow:
                                        "0 4px 8px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1)",
                                      zIndex: 999,
                                    }}
                                  >
                                    {submenuItem.menulist.map(
                                      (menuitem, menuitemIndex) => (
                                        <MenuItem
                                          key={menuitemIndex}
                                          onClick={() =>
                                            handleLinkClick(menuitem)
                                          }
                                          sx={{
                                            fontWeight: "bold",
                                            color: "text.secondary",
                                            "&:hover": {
                                              bgcolor: "primary.light",
                                              color: "primary.main",
                                            },
                                          }}
                                        >
                                          {menuitem.label}
                                        </MenuItem>
                                      )
                                    )}
                                  </Paper>
                                )}
                            </Box>
                          ))}
                        </Paper>
                      )}
                    </Box>
                  ) : (
                    <Button
                      variant="text"
                      color="inherit"
                      onClick={() => handleLinkClick(link)}
                      sx={{
                        fontWeight: "bold",
                        color:
                          activeLink === link.label
                            ? "primary.main"
                            : "text.secondary",
                        transition: "color 0.3s",
                        "&:hover": {
                          color: "primary.main",
                        },
                      }}
                    >
                      {link.label}
                    </Button>
                  )}
                </Box>
              ))}
            </Box>
          </Box>
          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
            <Button
              onClick={() => navigate("/admin")}
              color="primary"
              variant="text"
              sx={{ fontWeight: "bold", color: "text.secondary" }}
            >
              Admin
            </Button>
          </Box>
          <Box sx={{ display: { sm: "flex", md: "none" } }}>
            <IconButton aria-label="menu" onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
          </Box>
          <Drawer
            anchor="right"
            open={open}
            onClose={() => setOpen(false)}
            PaperProps={{
              sx: { width: "80%", bgcolor: "background.paper" },
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between", p: 2 }}>
            <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
              <IconButton onClick={() => setOpen(false)}>
                <CloseRoundedIcon />
              </IconButton>
            </Box>
            <Divider />
            <Box sx={{ mt: 2 }}>
              {navBarData.map((link, index) => (
                <React.Fragment key={index}>
                  {link.submenu ? (
                    <>
                      <MenuItem
                        onClick={() =>
                          setHoveredMenuIndex(
                            hoveredMenuIndex === index ? null : index
                          )
                        }
                        sx={{
                          fontWeight: "bold",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        {link.label}
                        {hoveredMenuIndex === index ? (
                          <ExpandLessIcon />
                        ) : (
                          <ExpandMoreIcon />
                        )}
                      </MenuItem>

                      {hoveredMenuIndex === index && (
                        <Box sx={{ ml: 2 }}>
                          {link.submenu.map((submenuItem, subIndex) => (
                            <React.Fragment key={subIndex}>
                              {submenuItem.menulist ? (
                                <>
                                  <MenuItem
                                    onClick={() =>
                                      setHoveredSubmenuIndex(
                                        hoveredSubmenuIndex === subIndex
                                          ? null
                                          : subIndex
                                      )
                                    }
                                    sx={{
                                      fontWeight: "bold",
                                      display: "flex",
                                      justifyContent: "space-between",
                                    }}
                                  >
                                    {submenuItem.label}
                                    {hoveredSubmenuIndex === subIndex ? (
                                      <ExpandLessIcon />
                                    ) : (
                                      <ExpandMoreIcon />
                                    )}
                                  </MenuItem>

                                  {hoveredSubmenuIndex === subIndex && (
                                    <Box sx={{ ml: 3 }}>
                                      {submenuItem.menulist.map(
                                        (menuItem, menuItemIndex) => (
                                          <MenuItem
                                            key={menuItemIndex}
                                            onClick={() => {
                                              handleLinkClick(menuItem);
                                              setOpen(false);
                                            }}
                                            sx={{ fontWeight: "bold", pl: 4 }}
                                          >
                                            {menuItem.label}
                                          </MenuItem>
                                        )
                                      )}
                                    </Box>
                                  )}
                                </>
                              ) : (
                                <MenuItem
                                  onClick={() => {
                                    handleLinkClick(submenuItem);
                                    setOpen(false);
                                  }}
                                  sx={{ fontWeight: "bold" }}
                                >
                                  {submenuItem.label}
                                </MenuItem>
                              )}
                            </React.Fragment>
                          ))}
                        </Box>
                      )}
                    </>
                  ) : (
                    <MenuItem
                      onClick={() => {
                        handleLinkClick(link);
                        setOpen(false);
                      }}
                      sx={{ fontWeight: "bold" }}
                    >
                      {link.label}
                    </MenuItem>
                  )}
                </React.Fragment>
              ))}
            </Box>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

NavBar.propTypes = {
  navLinks: PropTypes.array,
};

export default NavBar;
