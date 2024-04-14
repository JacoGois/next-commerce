import styled from "styled-components";

import { Prata } from "next/font/google";
import { HTMLAttributes } from "react";

const prata = Prata({
  subsets: ["latin"],
  weight: ["400"],
});

interface LogoProps extends HTMLAttributes<HTMLDivElement> {
  size?: string;
}

const LogoComponent = styled.div<LogoProps>`
  font-size: ${(props) => props.size};
  text-align: center;
`;

export const Logo = ({ size = "60px" }: LogoProps) => {
  return (
    <LogoComponent className={prata.className} size={size}>
      Budega
    </LogoComponent>
  );
};
