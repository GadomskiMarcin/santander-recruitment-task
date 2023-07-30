import styled from "styled-components";
import { defaultStyle } from "@/styles/defaultStyle.ts";

export const PinButton = styled.button`
  flex: 0 0 32%;
  height: 50px;
  width: 100%;
  padding: 15px;
  font-size: 1.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 4px;
  background-color: inherit;
  font-family: Helvetica, serif;

  &:focus {
    outline: none;
  }
  &:active {
    animation: ${defaultStyle.animations.changeColorForMoment} 1s ease;
  }
`;
