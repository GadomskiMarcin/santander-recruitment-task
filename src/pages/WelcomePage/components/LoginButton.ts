import styled from "styled-components";
import { defaultStyle } from "@/styles/defaultStyle.ts";

export const LoginButton = styled.button`
  background-color: ${defaultStyle.colors.SANTANDER_RED};
  color: white;
  font-size: 16px;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 16px;
  transition: background-color 0.2s;
  width: 200px;
  height: 32px;
  margin: 12px auto;
  font-weight: bold;
  font-family: "Helvetica", serif;

  &:hover {
    background-color: ${defaultStyle.colors.SUCCESS_GREEN};
  }
  #buttonText {
    position: absolute;
    top: -9px;
    left: 9px;
  }
`;
