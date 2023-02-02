import React from "react";
import { Container, Typography } from "@mui/material";
import { style, styled } from "@mui/system";
import pic from "./chat.png";

const Wrapper = styled("div")({
  flexGrow: 1,
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const WelcomeMessage = () => {
  return (
    <Wrapper>
      <Typography variant="h6" sx={{ color: "black", textShadow:".5px .5px" }}>
        
        <p style={{ flex: 1, flexDirection: 'col', justifyContent: 'center', alignItems: 'center' }}>To start chatting - choose conversation</p>
        <img style={{ width: 350, height: 350 ,flex: 1, flexDirection: 'col', justifyContent: 'center', alignItems: 'center' }} src={pic}/>
       
      </Typography>
    </Wrapper>
  );
};

export default WelcomeMessage;
