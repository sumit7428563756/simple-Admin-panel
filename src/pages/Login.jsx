import { Box } from "@mui/material";

import LoginCard from "../components/auth/LoginCard";

import { loginPageStyles } from "../style/authStyle";

export default function Login() {
  return (
    <Box sx={loginPageStyles.container}>
      <LoginCard />
    </Box>
  );
}

