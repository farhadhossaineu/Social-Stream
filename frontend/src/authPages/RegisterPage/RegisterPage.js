import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import AuthBox from "../../shared/components/AuthBox";
import RegisterPageInputs from "./RegisterPageInputs";
import RegisterPageFooter from "./RegisterPageFooter";
import { validateRegisterForm } from "../../shared/utils/validators";
import { connect } from "react-redux";
import { getActions } from "../../store/actions/authActions";
import { useHistory } from "react-router-dom";
import chat from "./chat1.png";
import styled from "styled-components";

const RegWrapper = styled.div`
  /* background-color: red; */
  /* background: linear-gradient(
    135deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(253, 187, 45, 1) 100%
  ); */
  background-color: #94f1cb;

  display: flex;
`;

const LeftContent = styled.div`
  /* background-color: blue; */
  diaplay: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
`;
const StyledImage = styled.img`
  margin-top: -4rem;
  margin-left: 3rem;
  margin-right: 20px;
  width: 100%;
`;
const Title = styled.p`
  font-size: 3rem;
  margin-left: 50px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;
const RegisterPage = ({ register }) => {
  const history = useHistory();

  const [mail, setMail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isFormValid, setIsFormValid] = useState(false);

  const handleRegister = () => {
    const userDetails = {
      mail,
      password,
      username,
    };

    register(userDetails, history);
  };

  useEffect(() => {
    setIsFormValid(
      validateRegisterForm({
        mail,
        username,
        password,
      })
    );
  }, [mail, username, password, setIsFormValid]);

  return (
    <RegWrapper>
      <LeftContent>
        <Title>Social Stream</Title>
        <StyledImage src={chat} />
      </LeftContent>
      <AuthBox>
        <Typography variant="h5" sx={{ color: "black" }}>
          Create an account
        </Typography>
        <RegisterPageInputs
          mail={mail}
          setMail={setMail}
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
        />
        <RegisterPageFooter
          handleRegister={handleRegister}
          isFormValid={isFormValid}
        />
      </AuthBox>
    </RegWrapper>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(RegisterPage);
