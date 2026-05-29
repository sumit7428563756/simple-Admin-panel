import { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  ListItemIcon,
} from "@mui/material";

import { dashboardStyles } from "../../style/dashboardStyle";

import { FiLock, FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [menu, setMenu] = useState(null);
   const navigate = useNavigate();

  const open = Boolean(menu);

  const handleOpenMenu = (event) => {
    setMenu(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setMenu(null);
  };

  return (
    <Box sx={dashboardStyles.navbar}>
      <Typography variant="h6" fontWeight="bold" color="#000000">
        Dashboard
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          cursor: "pointer",
          mr : 3
        }}
        onClick={handleOpenMenu}
      >
        <Avatar
          sx={{
            bgcolor: "#2563eb",
            width: 40,
            height: 40,
          }}
        >
          S
        </Avatar>

        <Typography variant="h8" fontWeight="bold" color="#2563eb">
          Sumit Kumar
        </Typography>
      </Box>
      {/* Dropdown Card */}
      <Menu
        anchorEl={menu}
        open={open}
        onClose={handleCloseMenu}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        PaperProps={{
          sx: {
            mt: 1,
            minWidth: 220,
            borderRadius: 3,
            boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
          },
        }}
      >
        <MenuItem onClick={handleCloseMenu}>
          <ListItemIcon>
            <FiLock />
          </ListItemIcon>
          Change Password
        </MenuItem>

        <Divider />

        <MenuItem onClick={() => {
            handleCloseMenu;
            navigate("/")
        }}>
          <ListItemIcon>
            <FiLogOut />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  );
}
