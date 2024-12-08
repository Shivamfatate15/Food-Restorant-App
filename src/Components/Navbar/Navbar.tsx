import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const Navbar = () => {
  return (
    <AppBar position="static" color="default" sx={{ boxShadow: "none" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo Section */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="primary" sx={{ fontWeight: "bold", ml: 1 }}>
            Swiggy
          </Typography>
        </Box>

        {/* Search Bar */}
        <Box sx={{ flex: 1, mx: 2 }}>
          <Box
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#f5f5f5",
              borderRadius: "4px",
              px: 2,
              py: 0.5,
            }}
          >
            <SearchIcon color="action" />
            <input
              type="text"
              placeholder="Search for restaurants and food"
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                marginLeft: "8px",
                fontSize: "16px",
                backgroundColor: "transparent",
              }}
            />
          </Box>
        </Box>

        {/* Action Buttons */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button color="inherit" sx={{ textTransform: "none", fontSize: "16px" }}>
            Login
          </Button>
          <Button color="inherit" sx={{ textTransform: "none", fontSize: "16px" }}>
            Sign Up
          </Button>
          <IconButton color="inherit">
            <ShoppingCartIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
