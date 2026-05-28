import {Box, Typography, Avatar } from "@mui/material";

import { dashboardStyles } from "../../style/dashboardStyle";

export default function Navbar(){

    return(
        <Box sx={dashboardStyles.navbar}>

            <Typography variant="h6" fontWeight="bold">
               Dashboard
            </Typography>
            <Avatar />

        </Box>
    );
}