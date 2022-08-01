import { Link } from "@tanstack/react-location";

import styled from "styled-components";
import { darkTheme } from "styles/Theme";

import googleLogoImg from "assets/google-logo-img.png";

import Form from "components/commons/Form";
import Button from "components/commons/Button";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.h1`
  font-family: "Lobster", cursive;
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 3rem;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 1.25rem;
  color: ${darkTheme.adaptiveGrey200};
  align-self: start;
  margin-bottom: 1.25rem;
`;

const Text = styled.div`
  text-decoration: none;
  font-size: 0.75rem;
  margin-bottom: 0.25rem;
  align-self: start;
  color: ${darkTheme.adaptiveGrey200};

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const GoogleDIV = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 11rem;
  height: 2rem;
  justify-content: space-evenly;
  flex-direction: row;
  border-radius: 4px;
  padding: 0.2rem;
  background-color: ${darkTheme.white};
  margin-top: 3rem;

  &:hover {
    cursor: pointer;
  }
`;

const GoogleLogoImg = styled.img`
  width: 2rem;
  height: 2rem;
`;

const GoogleText = styled.span`
  font-size: 1rem;
  font-weight: bold;
  vertical-align: middle;
  line-height: 20px;
  padding: 0.3rem;
  color: ${darkTheme.mainColor};
`;

const Auth = () => {
  return (
    <Container>
      <FormBox>
        <Link to={"/"}>
          <Logo>hool!</Logo>
        </Link>
        <Title>로그인</Title>
        <Form text="이메일" placeholderText="Email" type="email" />
        <Form text="비밀번호" placeholderText="Password" type="password" />
        <Text>비밀번호를 잊어버리셨나요? 비밀번호 초기화</Text>
        <Button text="로그인" width={20} height={3.125} marginBottom={0.25} />
        <Text>계정이 없으신가요? 회원가입</Text>
        <GoogleDIV>
          <GoogleLogoImg src={googleLogoImg} alt="google-logo-img" />
          <GoogleText>구글 계정으로 로그인</GoogleText>
        </GoogleDIV>
      </FormBox>
    </Container>
  );
};

export default Auth;