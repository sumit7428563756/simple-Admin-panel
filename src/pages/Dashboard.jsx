import { Grid } from "@mui/material";

import DashboardLayout from "../components/dashboard/DashboardLayout";
import StatCard from "../components/dashboard/StatCard";

import { dashboardStats } from "../data/dashboardData";


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

        </DashboardLayout>
    );
}