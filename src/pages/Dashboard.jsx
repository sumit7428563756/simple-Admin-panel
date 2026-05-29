import {
    Grid,
    Card,
    CardContent,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Chip,
    Paper,
} from "@mui/material";

import DashboardLayout from "../components/dashboard/DashboardLayout";
import StatCard from "../components/dashboard/StatCard";

import { dashboardStats } from "../data/dashboardData";

import { recentUsers } from "../data/recentUser";


export default function Dashboard() {
    return (
        <DashboardLayout>

            <Grid container spacing={3}>

                {dashboardStats.map((item) => (
                    <Grid
                        size={{
                            xs: 12,
                            sm: 6,
                            md: 3
                        }}
                        key={item.title}
                    >

                        <StatCard
                            title={item.title}
                            value={item.value}
                            icon={item.icon}
                        />

                    </Grid>
                ))}

            </Grid>

            {/*** recent users table */}

        
                <Typography
                    variant="h6"
                    fontWeight="bold"
                    mb={2}
                    background="#fff"
                    color="#1e293b"
                    mt={2}
                    borderRadius={2}    
                >
                    Recent Users
                </Typography>
            

                <TableContainer component={Paper} elevation={5}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell><b>ID</b></TableCell>
                                <TableCell><b>Name</b></TableCell>
                                <TableCell><b>Email</b></TableCell>
                                <TableCell><b>Status</b></TableCell>
                                <TableCell><b>Joined Date</b></TableCell>

                            </TableRow>

                        </TableHead>

                        <TableBody>
                            {recentUsers.map((user) => (
                                <TableRow key={user.id}>
                                    <TableCell>{user.id}</TableCell>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.email}</TableCell>

                                    <TableCell>
                                        <Chip
                                            label={user.status}
                                            color={
                                                user.status === "Active"
                                                    ? "success"
                                                    : "error"
                                            }
                                            size="small"
                                        />
                                    </TableCell>

                                    <TableCell>{user.joined}</TableCell>

                                </TableRow>

                            ))}


                        </TableBody>
                    </Table>



                </TableContainer>










        </DashboardLayout>
    );
}