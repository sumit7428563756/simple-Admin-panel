import { useState } from "react";
import {
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";

import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function PasswordField() {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <TextField
      fullWidth
      label="Password"
      type={showPassword ? "text" : "password"}
      variant="outlined"
      margin="dense"


      sx={{
        "& .MuiOutlinedInput-root": {
          height: 45,
        },

        "& .MuiInputLabel-root": {
          fontSize: 12,
        },
      }}

      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={() => setShowPassword(!showPassword)}
              edge="end"
            >
              {showPassword ? (
                <FaEyeSlash size={18} />
              ) : (
                <FaEye size={18} />
              )}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}