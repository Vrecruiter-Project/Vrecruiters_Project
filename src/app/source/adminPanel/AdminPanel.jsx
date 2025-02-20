import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { getAuth, signOut } from "firebase/auth";
import HomeSideNav from "./SideNavComponents/sideNavComponents/HomeSideNav/HomeSideNav";
import CandidateCorner from "./SideNavComponents/sideNavComponents/HomeSideNav/components/candidateCorner/CandidateCorner";
import DatabaseSideNav from "./SideNavComponents/sideNavComponents/DatabaseSideNav/DatabaseSideNav";
import DatabaseCandidateCorner from "./SideNavComponents/sideNavComponents/DatabaseSideNav/DatabaseCandidateCorner";
import { IoHome } from "react-icons/io5";
import { ImDatabase } from "react-icons/im";
import { RiFindReplaceFill } from "react-icons/ri";
import { SiSimpleanalytics } from "react-icons/si";
import { SiVectorlogozone } from "react-icons/si";
import { RouteMaker } from "../../components/routes/routes";
import { useNavigate } from "react-router-dom";
import CompanyCorner from "./SideNavComponents/sideNavComponents/HomeSideNav/components/companyCorner/CompanyCorner";
import EmployeeCorner from "./SideNavComponents/sideNavComponents/HomeSideNav/components/employeeCorner/EmployeeCorner";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useAtom } from "jotai";
import { adminTitleAtom } from "../../assests/globalvars/themeatom";
import LeadsSideNav from "./SideNavComponents/sideNavComponents/LeadsSideNav/LeadsSideNav";
import LogoutIcon from "@mui/icons-material/Logout";
import SitemarkIcon from "../../components/pageComponent/SitemarkIcon";

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const AdminPanel = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [admintitle, setAdminTitle] = useAtom(adminTitleAtom);
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const user = auth.currentUser;

  React.useEffect(() => {
    setAdminTitle("Admin Page");
  }, []);

  const listItems =
    user.email === "kim@ck.com" || user.email === "kajal@vrecruiters.in"
      ? user.email === "kim@ck.com"
        ? [
            { text: "Home", icon: <IoHome />, path: "home" },
            { text: "Database", icon: <ImDatabase />, path: "database" },
            { text: "Leads", icon: <RiFindReplaceFill />, path: "leads" },
            {
              text: "Placement Records",
              icon: <RiFindReplaceFill />,
              path: "placementrecords",
            },
            {
              text: "Data Analysis",
              icon: <SiSimpleanalytics />,
              path: "dataanalysis",
            },
            {
              text: "V Recruiter Zone",
              icon: <SiVectorlogozone />,
              path: "vrecruiterzone",
            },
          ]
        : [{ text: "Home", icon: <IoHome />, path: "home" }]
      : [
          { text: "Database", icon: <ImDatabase />, path: "/admin/database" },
          { text: "Leads", icon: <RiFindReplaceFill />, path: "admin/leads" },
          {
            text: "Placement Records",
            icon: <RiFindReplaceFill />,
            path: "placementrecords",
          },
          {
            text: "Data Analysis",
            icon: <SiSimpleanalytics />,
            path: "dataanalysis",
          },
          {
            text: "V Recruiter Zone",
            icon: <SiVectorlogozone />,
            path: "vrecruiterzone",
          },
        ];

  React.useEffect(() => {
    setOpen(matches);
  }, [matches]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleItemClick = (path) => {
    navigate(path);
  };

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        backgroundColor: "#ffffff",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {/* <CssBaseline /> */}
      <div className="w-fit h-fit absolute inset-1">
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
        >
          <MenuIcon />
        </IconButton>
      </div>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant={matches ? "persistent" : "temporary"}
        anchor="left"
        open={open}
        onClose={handleDrawerClose}
      >
        <SitemarkIcon />
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <List>
          {listItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                sx={{ justifyContent: open ? "initial" : "center" }}
                onClick={() => handleItemClick(item.path)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    justifyContent: "center",
                    mr: open ? 3 : "auto",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItemButton
            sx={{ justifyContent: open ? "initial" : "center" }}
            onClick={() => signOut(getAuth())}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                justifyContent: "center",
                mr: open ? 3 : "auto",
              }}
            >
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary={"Log Out"} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </List>
      </Drawer>
      {user.email === "kim@ck.com" || user.email === "kajal@vrecruiters.in" ? (
        <RouteMaker
          routes={{
            home: <HomeSideNav />,
            "admin/home/candidate": <CandidateCorner />,
            "admin/home/company": <CompanyCorner />,
            "admin/home/employee": <EmployeeCorner />,
            database: <DatabaseSideNav />,
            "/admin/database/candidate": <DatabaseCandidateCorner />,
            leads: <LeadsSideNav />,
            placementrecords: <CandidateCorner />,
          }}
        />
      ) : (
        <RouteMaker
          routes={{
            database: <DatabaseSideNav />,
            "/admin/database/candidate": <DatabaseCandidateCorner />,
            leads: <CandidateCorner />,
            placementrecords: <CandidateCorner />,
          }}
        />
      )}
    </Box>
  );
};

export default AdminPanel;
