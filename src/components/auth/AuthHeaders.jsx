import { Box, Typography } from "@mui/material";
import { loginPageStyles } from "../../style/authStyle";

export default function AuthHeaders({
    title,
    subtitle,
    icon,
    iconSize,
    iconColor
}) {

    return (

        //FULL OUTER BOX 
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            mb: 3
        }} >

            {/* LOGOBOX FROM LOGINPAGESTYLES OBJECT */}
            <Box sx={loginPageStyles.logoBox}>
                {/* ICON BOX  */}
                <Box sx={{
                    width: 50,
                    height: 50,
                    fontSize: iconSize,
                    color: iconColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 1,
                    mt: 1,
                }}>
                    {icon}
                </Box>
            </Box>

            {/* first text   */}
            <Typography
                variant="h5"
                color="#1976d2"
                fontWeight="bold"
                textAlign="center"
                gutterBottom
            >
                {title}
            </Typography>


            {/* second subtext   */}
            <Typography
                variant="body2"
                color="#727272"
                textAlign="center"
                mb={1}
            >
                {subtitle}
            </Typography>



        </Box>







    );


}