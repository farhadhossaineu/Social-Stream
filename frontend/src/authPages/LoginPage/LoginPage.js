import React, { useState, useEffect } from "react";
import AuthBox from "../../shared/components/AuthBox";
import LoginPageFooter from "./LoginPageFooter";
import LoginPageHeader from "./LoginPageHeader";
import LoginPageInputs from "./LoginPageInputs";
import { validateLoginForm } from "../../shared/utils/validators";
import { connect } from "react-redux";
import { getActions } from "../../store/actions/authActions";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import chat from "./chat.gif";
// import chat1 from "./chat1.png";

const LogWrapper = styled.div`
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
  margin-top: 0;
  margin-left: 100px;
  width: 80%;
`;
const Title = styled.p`
  font-size: 3rem;
  margin-left: 50px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const LoginPage = ({ login }) => {
  const history = useHistory();

  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(validateLoginForm({ mail, password }));
  }, [mail, password, setIsFormValid]);

  const handleLogin = () => {
    const userDetails = {
      mail,
      password,
    };

    login(userDetails, history);
  };

  return (
    <LogWrapper>
      <LeftContent>
        <Title>Social Stream</Title>
        <StyledImage src={chat} />
        {/* <StyledImage src={chat1} /> */}
      </LeftContent>
      <AuthBox>
        <LoginPageHeader />
        <LoginPageInputs
          mail={mail}
          setMail={setMail}
          password={password}
          setPassword={setPassword}
        />
        <LoginPageFooter isFormValid={isFormValid} handleLogin={handleLogin} />
      </AuthBox>
    </LogWrapper>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(LoginPage);
