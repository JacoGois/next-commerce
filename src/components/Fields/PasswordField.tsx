"use client";

import { InputHTMLAttributes, useState } from "react";
import { Field } from "../Field";
import { Input } from "../Input";
import { Eye, EyeOff } from "lucide-react";
import styled from "styled-components";

interface PasswordFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  invalid?: boolean;
}

const IconContainer = styled.div`
  position: absolute;
  transform: translateY(-50%);
  top: 70%;
  right: 6px;

  svg {
    cursor: pointer;
  }

  svg:hover {
    opacity: 70%;
  }
`;

export const PasswordField = ({
  label,
  invalid,
  ...props
}: PasswordFieldProps) => {
  const [type, setType] = useState("password");

  return (
    <Field label={label} invalid={invalid}>
      <Input type={type} invalid={invalid} {...props} />
      <IconContainer>
        {type === "password" ? (
          <Eye onClick={() => setType("text")} />
        ) : (
          <EyeOff onClick={() => setType("password")} />
        )}
      </IconContainer>
    </Field>
  );
};
