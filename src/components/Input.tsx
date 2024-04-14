import { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
}

export const Input = styled.input<InputProps>`
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid
    ${(props) => (props.invalid ? "var(--negative)" : "var(--gray-300)")};
  outline: 0;
  font-size: 0.8rem;
  color: ${(props) => (props.invalid ? "var(--negative)" : "var(--white)")};
  padding: 10px 0 7px 1px;
  background: transparent;
  transition: border-color 0.2s;
  font-weight: 600;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ label {
    font-size: 1.1rem;
    cursor: text;
    top: 20px;
  }

  &:focus {
    ~ label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: var(--primary);
      font-weight: 700;
    }
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    color: var(--white);
    border-color: var(--primary);
    border-image-slice: 1;
  }

  &:required,
  &:invalid {
    box-shadow: none;
  }
`;
