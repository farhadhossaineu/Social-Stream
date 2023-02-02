import React from "react";
import { Typography } from "@mui/material";

const LoginPageHeader = () => {
  return (
    <>
      <Typography variant="h5" sx={{ color: "black" }}>
        Welcome Back!
      </Typography>
      <Typography sx={{ color: "black" }}>
        We are happy that you are with us!
      </Typography>
    </>
  );
};

export default LoginPageHeader;
