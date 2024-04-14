import styled from "styled-components";

export const Button = styled.button`
  background-color: var(--primary);
  color: var(--white);
  border-radius: 4px;
  padding: 16px;
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: var(--primary-hover);
  }
`;
