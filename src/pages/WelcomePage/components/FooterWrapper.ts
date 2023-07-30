import styled from "styled-components";
import { defaultStyle } from "@/styles/defaultStyle.ts";

export const FooterWrapper = styled.footer`
  background-color: ${defaultStyle.colors.SANTANDER_RED};
  padding: 20px;
  text-align: center;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  > p {
    color: #fff;
    font-family: "SantanderMicroText-Bold", serif;
    font-size: 12px;
    line-height: 1.2;
  }
`;
