import { LabelHTMLAttributes } from "react";
import styled from "styled-components";

interface LabelProps extends LabelHTMLAttributes<LabelProps> {
  invalid?: boolean;
}

export const Label = styled.label<LabelProps>`
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: ${(props) => (props.invalid ? "var(--negative)" : "var(--gray-300)")};
`;
