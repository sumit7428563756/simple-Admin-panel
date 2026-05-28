import { Box, Button, Card, Typography, TextField, CardContent } from "@mui/material";

import { loginPageStyles } from "../../style/authStyle";


import AuthHeaders from "./AuthHeaders";

import { FaUserShield } from "react-icons/fa";

import PasswordField from "../../components/auth/PasswordField";

import { useNavigate } from "react-router-dom";



export default function LoginCard() {
    
    const navigate = useNavigate();
    return (
        //use card from authStyle
        <Card sx={loginPageStyles.card}>
            {/**** take full of card inside with padding 4 */}
            <CardContent sx={{
                p: 4,
                display: "flex",
                flexDirection: "column"
            }}>
                {/**** use AuthHeader from components auth */}
                <AuthHeaders
                    title="Admin Panel"
                    subtitle="Login to access your dashboard"
                    icon={< FaUserShield />}
                    iconSize={30}
                    iconColor="#ffff" />

                {/**** textfield for first textField */}

                <TextField
                    fullWidth
                    variant="outlined"
                    label="UserName"
                    margin="dense"

                    sx={{


                        "& .MuiOutlinedInput-root": {
                            height: 45,
                        },

                        // label style
                        "& .MuiInputLabel-root": {
                            fontSize: 12,
                        },
                    }}
                >
                </TextField>

                {/**** use PasswordField from components auth */}
                <PasswordField />

                {/**** button for continue */}

                <Button
                    onClick={() => navigate("/dashboard")}
                    fullWidth
                    variant="contained"
                    size="large"
                    sx={{
                        ...loginPageStyles.loginButton,
                        mt: 2
                     } }
                >
                    Login
                </Button>


            </CardContent>
        </Card>



    );

}