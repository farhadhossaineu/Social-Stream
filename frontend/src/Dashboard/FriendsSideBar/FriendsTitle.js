import React from "react";
import { Typography } from "@mui/material";

const FriendsTitle = ({ title }) => {
  return (
    <Typography
      sx={{
        textTransform: "uppercase",
        color: "black",
        textShadow:".5px .4px",
        fontSize: "14px",
        marginTop: "10px",
      }}
    >
      {title}
    </Typography>
  );
};

export default FriendsTitle;
