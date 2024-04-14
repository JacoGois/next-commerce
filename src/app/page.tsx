"use client";

import { Button } from "@/components/Button";
import { PasswordField } from "@/components/Fields/PasswordField";
import { TextField } from "@/components/Fields/TextField";
import { Logo } from "@/components/Logo";
import Image from "next/image";
import { ReactNode } from "react";
import styled from "styled-components";

const MainImage = styled.main`
  width: 100vw;
  height: 100vh;
  position: absolute;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;

const LoginContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  width: 100vw;
  height: 100vh;
  position: relative;
  color: var(--white);

  @media (max-width: 950px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

interface LoginTextProps {
  spacing?: string;
  children: ReactNode;
}

const LoginText = styled.p<LoginTextProps>`
  letter-spacing: ${(props) => (props.spacing ? "20px" : "")};
  font-weight: ${(props) => (props.spacing ? "300" : "")};
  font-size: ${(props) => (props.spacing ? "65px" : "60px")};
`;

const LoginBoxContainer = styled.div`
  border-radius: 14px;
  border: 2px solid var(--white);
  padding: 28px;
  backdrop-filter: blur(30px);
  display: flex;
  width: 65%;
  flex-direction: column;
  gap: 24px;
`;

const LoginTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  @media (max-width: 950px) {
    display: none;
  }
`;

const ForgotPassword = styled.span`
  margin-top: 6px;
  display: block;
  text-align: end;

  span {
    cursor: pointer;
  }

  span:hover {
    opacity: 70%;
  }
`;

const RegisterLink = styled.p`
  color: var(--white);
  text-align: center;

  span {
    color: var(--primary);
    cursor: pointer;
  }

  span:hover {
    opacity: 70%;
  }
`;

export default function Home() {
  return (
    <MainImage>
      <Image
        src="/assets/loginImage.png"
        layout="fill"
        objectFit="cover"
        alt="Background Image"
      />
      <Overlay />
      <LoginContainer>
        <LoginTextContainer>
          <LoginText>Mais que venda</LoginText>
          <LoginText style={{ paddingLeft: "16px" }} spacing={"true"}>
            CONCEITO
          </LoginText>
        </LoginTextContainer>
        <ContentContainer>
          <LoginBoxContainer>
            <Logo />
            <TextField label="E-mail" />
            <div>
              <PasswordField label="Senha" />
              <ForgotPassword>
                <span>Esqueci a senha</span>
              </ForgotPassword>
            </div>
            <Button>Entrar</Button>
            <RegisterLink>
              Não tem conta? <span>Registrar</span>
            </RegisterLink>
          </LoginBoxContainer>
        </ContentContainer>
      </LoginContainer>
    </MainImage>
  );
}
