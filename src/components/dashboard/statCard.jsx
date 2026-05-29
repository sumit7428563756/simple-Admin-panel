import { Card, CardContent, Typography, Box } from "@mui/material";

import { dashboardStyles } from "../../style/dashboardStyle";

export default function StatCard({
    title,
    value,
    icon
}) {
    return (
        <Card sx={dashboardStyles.Card}>
            <CardContent>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }}
                >
                    <Box>
                        <Typography sx={dashboardStyles.statTitle}>
                            {title}
                        </Typography>

                        <Typography sx={dashboardStyles.statValue}>
                            {value}
                        </Typography>
                    </Box>

                    <Box>
                        {icon}
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
}