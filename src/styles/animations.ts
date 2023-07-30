import { keyframes } from "styled-components";
import { colors } from "@/styles/colors.ts";

export const animations = {
  changeColorForMoment: keyframes`
          0% { background-color: initial; }
          50% { background-color: ${colors.DEFAULT_GREY}; }
          100% { background-color: initial; }`,
  ballRotation: keyframes`
  0% {
    opacity: 0;
    transform: translateY(50px) rotate(90deg);
  }
  100% {
    opacity: 1;
    transform: translateY(0) rotate();
  }`,
};
