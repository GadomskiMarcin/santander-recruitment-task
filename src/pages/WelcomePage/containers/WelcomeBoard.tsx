import { WelcomeText } from "../components/WelcomeText.ts";
import { RotatingBall } from "../components/WelcomeBall.tsx";

function WelcomeBoard() {
  return (
    <>
      <WelcomeText>Welcome</WelcomeText>
      <RotatingBall />
    </>
  );
}

export default WelcomeBoard;
