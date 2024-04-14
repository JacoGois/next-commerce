import styled from "styled-components";
import { Label } from "./Label";
import { HTMLAttributes, ReactNode } from "react";

const FormGroup = styled.div`
  position: relative;
  padding: 15px 0 0;
  width: 100%;
`;

interface FieldProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  label: string;
  labelClassName?: string;
  groupClassName?: string;
  invalid?: boolean;
}

export const Field = ({
  children,
  label,
  labelClassName,
  groupClassName,
  invalid,
}: FieldProps) => {
  return (
    <FormGroup className={groupClassName}>
      {children}
      <Label invalid={invalid} className={labelClassName}>
        {label}
      </Label>
    </FormGroup>
  );
};
