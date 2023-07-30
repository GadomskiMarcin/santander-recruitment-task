import styled from "styled-components";
import { defaultStyle } from "@/styles/defaultStyle.ts";

const BallContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Ball = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${defaultStyle.colors.SUCCESS_GREEN};
  border-radius: 50%;
  animation: ${defaultStyle.animations.ballRotation} 2s linear;
  animation-fill-mode: forwards;
`;
const Checkmark = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70%) rotate(-45deg);
  width: 20px;
  height: 10px;
  border: 3px solid white;
  border-top: none;
  border-right: none;
  transition: opacity 0.3s;
  user-select: none;
`;
export function RotatingBall() {
  return (
    <BallContainer>
      <Ball>
        <Checkmark />
      </Ball>
    </BallContainer>
  );
}
