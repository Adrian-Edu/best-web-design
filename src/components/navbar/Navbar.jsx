import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import LogoBWD from "../../assets/LogoBWD.png";
import "./Navbar.css";
import Switch from "../switch/Switch";
import { Link } from "react-router-dom";
import whitebackground from "../../assets/whitebackground.png";
import darkbackground from "../../assets/darkbackground.png";

function ResponsiveAppBar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [isActive, setIsActive] = useState(false);
  const backgroundImage = {
    white: whitebackground,
    dark: darkbackground,
  };
  const textColor = { white: "#FFFFFF", dark: "#0e1111" };

  const click = () => {
    if (isActive === false) {
      props.sendImage(backgroundImage.white);
      props.sendTextColor(textColor.dark);
      setIsActive(true);
    } else {
      props.sendImage(backgroundImage.dark);
      props.sendTextColor(textColor.white);
      setIsActive(false);
    }
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xxl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              marginRight: "70px",
            }}
          >
            <img src={LogoBWD} alt="" />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              className="menubutton"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                }}
                onClick={handleCloseNavMenu}
              >
                <Typography sx={{ my: 1 }} textAlign="center">
                  <Link to="/" className="isDisabled">
                    Home
                  </Link>
                </Typography>
                <Typography sx={{ my: 1 }} textAlign="center">
                  <Link to="webdesign" className="isDisabled">
                    Web Design
                  </Link>
                </Typography>
                <Typography sx={{ my: 1 }} textAlign="center">
                  <Link to="skills" className="isDisabled">
                    Skills
                  </Link>
                </Typography>
                <Typography sx={{ my: 1 }} textAlign="center">
                  <Link to="services" className="isDisabled">
                    Services
                  </Link>
                </Typography>
                <Typography sx={{ my: 1 }} textAlign="center">
                  <Link to="steps" className="isDisabled">
                    Building Steps
                  </Link>
                </Typography>
                <Typography sx={{ my: 1 }} textAlign="center">
                  <Link to="portofolio" className="isDisabled">
                    Portofolio
                  </Link>
                </Typography>
                <Typography sx={{ my: 1 }} textAlign="center">
                  <Link to="contact" className="isDisabled">
                    Contact
                  </Link>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 0,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img className="logo-small-view" src={LogoBWD} alt="logo" />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              <Link className="isDisabled" to="/">
                Home
              </Link>
            </Button>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              <Link className="isDisabled" to="webdesign">
                Web Design
              </Link>
            </Button>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              <Link className="isDisabled" to="skills">
                Skills
              </Link>
            </Button>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              <Link className="isDisabled" to="services">
                Services
              </Link>
            </Button>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              <Link className="isDisabled" to="steps">
                Building Steps
              </Link>
            </Button>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              <Link className="isDisabled" to="portofolio">
                Portofolio
              </Link>
            </Button>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              <Link className="isDisabled" to="contact">
                Contact
              </Link>
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "flex" } }}>
            <IconButton onClick={click}>
              <Switch />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
