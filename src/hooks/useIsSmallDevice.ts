import { useEffect, useState } from "react";

export const useIsSmallDevice = () => {
  const [isSmallDevice, setIsSmallDevice] = useState(window.innerWidth < 450);

  const updateMedia = () => {
    setIsSmallDevice(window.innerWidth < 450);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return isSmallDevice;
};
