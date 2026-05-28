import { Box, Typography } from "@mui/material";

import Navbar from "./navbar";
import Sidebar from "./sidebar";

import { dashboardStyles } from "../../style/dashboardStyle";

export default function DashboardLayout({ children }) {

    return (

        // main layout container
        <Box sx={dashboardStyles.layout}>

            <Sidebar />


            <Box sx={dashboardStyles.content}>

                <Navbar />




                <Box sx={dashboardStyles.pageContent}>

                    {children}
                </Box>

            </Box>  

        </Box>

    );
}
