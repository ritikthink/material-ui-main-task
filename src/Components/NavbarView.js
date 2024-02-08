import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const navItems = [
  {
    name: "Accordion",
    link: ""
  }, 
  {
    name: "Date Picker",
    link: "datepicker"
  },
  {
    name: "Time Picker",
    link: "timepicker"
  }
];

const NavbarView = () => {
  return (
    <Box sx={{ flexGrow: 1 }} mb={5}>
      <AppBar position="static">
        <Container>
          <Toolbar disableGutters>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              MUI + React
            </Typography>
            <List  sx={{ gap: 2 }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={{ color: "#fff" }}
                  component={Link}
                  to={`/${item.link}`}
                >
                  {item.name}
                </Button>
              ))}
            </List>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default NavbarView;
