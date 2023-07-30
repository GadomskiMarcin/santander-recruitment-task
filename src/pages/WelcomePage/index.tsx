import { lazy, Suspense, useState } from "react";
import { Column } from "@/components/column.ts";
import { PinPad } from "./containers/PinPad.tsx";
import { Header } from "./containers/Header.tsx";
import { Footer } from "./containers/Footer.tsx";
const WelcomeBoard = lazy(() => import("./containers/WelcomeBoard"));
export function WelcomePage() {
  const [hasLoggedIn, setHasLoggedIn] = useState(false);
  return (
    <Column>
      <Header />
      {!hasLoggedIn && <PinPad onLogIn={() => setHasLoggedIn(true)} />}
      <Suspense fallback={<></>}>{hasLoggedIn && <WelcomeBoard />}</Suspense>
      <Footer />
    </Column>
  );
}
