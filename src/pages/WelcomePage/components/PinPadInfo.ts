import styled from "styled-components";
import { defaultStyle } from "@/styles/defaultStyle.ts";

export const PinPadInfo = styled.div`
  display: inline-block;
  padding: 10px 20px;
  background-color: white;
  color: #333;
  font-size: 24px;
  font-family: Montserrat, serif;
  border-radius: ${defaultStyle.sizes.pinpad.borderRadius}
    ${defaultStyle.sizes.pinpad.borderRadius} 0 0;
`;
