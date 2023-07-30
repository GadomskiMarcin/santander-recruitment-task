import { HeaderWrapper } from "../components/HeaderWrapper.ts";
import { SantanderLogoHorizontalSVG, SantanderLogoVerticalSVG } from "@/icons";
import { useIsSmallDevice } from "@/hooks/useIsSmallDevice.ts";
export function Header() {
  const isSmallDevice = useIsSmallDevice();
  return (
    <HeaderWrapper>
      {isSmallDevice ? (
        <SantanderLogoVerticalSVG />
      ) : (
        <SantanderLogoHorizontalSVG />
      )}
    </HeaderWrapper>
  );
}
