import React from "react";
import Button from "@mui/material/Button";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { useHistory } from "react-router-dom";

const HomeButton = () => {
  const homeButtonClick = () => {
    window.location.reload();
  };
  return (
    <Button
      onClick={homeButtonClick}
      style={{
        width: "48px",
        height: "48px",
        borderRadius: "16px",
        margin: 0,
        padding: 0,
        minWidth: 0,
        marginTop: "10px",
        color: "white",
        backgroundColor: "darkcyan",
      }}
    >
      <HomeOutlinedIcon />
    </Button>
  );
};

export default HomeButton;
