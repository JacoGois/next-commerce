import { InputHTMLAttributes } from "react";
import { Field } from "../Field";
import { Input } from "../Input";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  invalid?: boolean;
}

export const TextField = ({ label, invalid, ...props }: TextFieldProps) => {
  return (
    <Field label={label} invalid={invalid}>
      <Input invalid={invalid} {...props} />
    </Field>
  );
};
