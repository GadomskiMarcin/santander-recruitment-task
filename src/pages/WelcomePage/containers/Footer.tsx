import { FooterWrapper } from "../components/FooterWrapper.ts";
import { SantanderLogoSVG } from "@/icons";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <FooterWrapper>
      <SantanderLogoSVG />
      <p>&copy; {currentYear} Santander. All rights reserved.</p>
    </FooterWrapper>
  );
}
