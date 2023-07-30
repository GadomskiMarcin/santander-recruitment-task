import { FooterWrapper } from "../components/FooterWrapper.ts";
import { SantanderLogoSVG } from "@/icons";

export function Footer() {
  return (
    <FooterWrapper>
      <SantanderLogoSVG />
      <p>
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </p>
    </FooterWrapper>
  );
}
