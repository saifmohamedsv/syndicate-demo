import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LogoutIcon from "@mui/icons-material/Logout";
import ArticleIcon from "@mui/icons-material/Article";
import { OnLogout } from "../store/actions/Logout";
import { connect } from "react-redux";
const Links = [
  {
    label: "شهادات",
    id: "certificate",
    icon: <ArticleIcon />,
    supFields: [
      {
        label: "شهاده رقم نموذج اعداد ملف الترخيص",
        id: "شهاده رقم نموذج اعداد ملف الترخيص",
      },
      {
        label: "اقرار وتعهد بالاشراف الدائم علي التنفيذ لمكتب استشاري",
        id: "اقرار وتعهد بالاشراف الدائم علي التنفيذ لمكتب استشاري",
      },
      {
        label: "اقرار وتعهد بالاشراف الدائم على التنفيذ الاستشاري",
        id: "اقرار وتعهد بالاشراف الدائم على التنفيذ الاستشاري",
      },
      {
        label: "اقرار وتعهد بالاشراف الدائم على التنفيذ مهندس",
        id: "اقرار وتعهد بالاشراف الدائم على التنفيذ مهندس",
      },
      {
        label: "اقرار وتعهد بالاشراف الدائم على التنفيذ بيت الخبره",
        id: "اقرار وتعهد بالاشراف الدائم على التنفيذ بيت الخبره",
      },
      {
        label: "اقرار وتعهد بالاشراف الدائم على التنفيذ اعمال هدم",
        id: "اقرار وتعهد بالاشراف الدائم على التنفيذ اعمال هدم",
      },
    ],
  },
];

function Navbar({ OnLogout, ...props }) {
  const drawerWidth = 240;

  const { window } = props;

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const router = useNavigate();

  const drawer = (
    <div>
      <Toolbar>
        <img
          style={{ margin: "auto" }}
          src="/assets/eeakb.jpg"
          width="120"
          height="120"
          alt="Syndicate Cairo"
        />
      </Toolbar>
      <Divider />
      <List>
        {Links.map((link) => (
          <ListItem key={link.id} disablePadding>
            <Accordion
              sx={{
                flexGrow: 1,
                boxShadow: "none",
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <ListItemButton>
                  <ListItemIcon>{link.icon}</ListItemIcon>
                  <ListItemText primary={link.label} />
                </ListItemButton>
              </AccordionSummary>
              <AccordionDetails
                sx={{ display: "flex", flexDirection: "column", gap: "12px" }}
              >
                {link.supFields.map((sub) => (
                  <Button
                    variant="outlined"
                    fullWidth
                    onClick={() => {
                      router(`/certs/${sub.id}`);
                    }}
                  >
                    {sub.label}
                  </Button>
                ))}
              </AccordionDetails>
            </Accordion>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 2,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          anchor="right"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <AppBar
        position="fixed"
        dir="right"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          mr: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            نقابه المهندسين
          </Typography>
          <IconButton color="inherit" edge="end" onClick={OnLogout}>
            <LogoutIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default connect(null, { OnLogout })(Navbar);
