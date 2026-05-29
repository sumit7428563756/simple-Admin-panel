import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { FaTachometerAlt, FaUsers, FaCog } from "react-icons/fa";
import { useState } from "react";

import { AiFillProduct } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";

import { dashboardStyles } from "../../style/dashboardStyle";

export default function Sidebar() {
  const [selected, setSelected] = useState(0);

  const menuItems = [
    { text: "Dashboard", icon: <FaTachometerAlt /> },
    { text: "Users", icon: <FaUsers /> },
    { text: "Orders", icon: <FaCartShopping /> },
    { text: "Products", icon: <AiFillProduct /> },
    { text: "Settings", icon: <FaCog /> },
  ];

  return (
    <Box sx={dashboardStyles.sidebar}>
      <Typography variant="h5" fontWeight="bold" p={3}>
        Admin Panel
      </Typography>

      <List>
        {menuItems.map((item, index) => (
          <ListItemButton
            key={index}
            onClick={() => setSelected(index)}
            sx={{
              mx: 2,
              my: 0.5,
              borderRadius: 2,
              color: "#fff",

              transition: "all 0.5s ease",

              backgroundColor: selected === index ? "#2563eb" : "transparent",

              transform:
                selected === index ? "translateX(10px)" : "translateX(0)",

              "&:hover": {
                backgroundColor: "#334155",
                color: "#38bdf8",
                transform: "translateX(10px)",
              },

              "& .MuiListItemIcon-root": {
                color: selected === index ? "#fff" : "#cbd5e1",
              },

              "&:hover .MuiListItemIcon-root": {
                color: "#38bdf8",
              },
            }}
          >
            <ListItemIcon
              sx={{
                color: "#ffff",
                fontSize: 20,
              }}
            >
              {item.icon}
            </ListItemIcon>

            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}
