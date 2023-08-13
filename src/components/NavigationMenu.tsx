import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "@mui/material";
// import { Link, useLocation } from 'react-router-dom';

// const location = useLocation();

// Define your navigation items
const navItems = [
  { path: "/", text: "Home" },
  { path: "/portfolio", text: "Portfolio" },
  { path: "/contact", text: "Contact" },
];

function NavigationMenu() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Container maxWidth="xl" sx={{ backgroundColor: "transparent" }}>
      <Toolbar disableGutters>
        <Box sx={{ flexGrow: 1, display: { xs: "flex", sm: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
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
              display: { xs: "block", sm: "none" },
            }}
          >
            {navItems.map((item) => (
              <MenuItem key={item.text} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{item.text}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}>
          {navItems.map((item) => (
            <Link
              key={item.text}
              href={item.path}
              onClick={handleCloseNavMenu}
              sx={{
                m: 2,
                color: "white",
                display: "block",
                fontFamily: "Dosis",
              }}
              className={
                window.location.pathname == item.path
                  ? "active nav-item"
                  : "nav-item"
              }
            >
              {item.text}
            </Link>
          ))}
        </Box>
      </Toolbar>
    </Container>
  );
}

export default NavigationMenu;
