import { useEffect, useState } from "react";
import { maskPin } from "../utils.ts";
import { ButtonsWrapper } from "../components/ButtonsWrapper.ts";
import {
  BUTTONS_VALUES, DEFAULT_LOG_IN_TEXT,
  DEFAULT_PIN,
  PIN_MAX_LENGTH,
  PIN_MIN_LENGTH,
  PIN_PAD_INFO,
} from "../consts.ts";
import { PinButton } from "../components/PinButton.ts";
import { PinDisplay } from "../components/PinDisplay.ts";
import { PinPadInfo } from "../components/PinPadInfo.ts";
import { PinPadWrapper } from "../components/PinPadWrapper.ts";
import { LoginButton } from "../components/LoginButton.ts";
import { RemoveButtonSVG } from "@/icons";

export function PinPad({ onLogIn }: { onLogIn: () => void }) {
  const [enteredPin, setEnteredPin] = useState<string>("");
  const [hasErrorOccurred, setHasErrorOccurred] = useState(false);
  const [defaultMessage, setDefaultMessage] = useState(PIN_PAD_INFO.message);

  useEffect(() => {
    if (hasErrorOccurred) {
      setDefaultMessage(PIN_PAD_INFO.error);
    } else {
      setDefaultMessage(PIN_PAD_INFO.message);
    }
  }, [hasErrorOccurred]);
  const handlePinButtonClick = (digit: string) => {
    setHasErrorOccurred(false);
    if (enteredPin.length < PIN_MAX_LENGTH) {
      setEnteredPin(enteredPin + digit);
    }
  };

  const handleDeleteButtonClick = () => {
    setHasErrorOccurred(false);
    if (enteredPin.length > 0) {
      setEnteredPin(enteredPin.slice(0, -1));
    }
  };

  const handlePinSubmit = () => {
    if (enteredPin == DEFAULT_PIN) {
      onLogIn();
    } else {
      setHasErrorOccurred(true);
    }
  };

  return (
    <PinPadWrapper>
      <PinPadInfo>{defaultMessage}</PinPadInfo>
      <PinDisplay $hasErrorOccurred={hasErrorOccurred}>
        {maskPin(enteredPin)}
      </PinDisplay>
      <ButtonsWrapper>
        {BUTTONS_VALUES.map((value, idx) => (
          <PinButton
            key={`${value}-${idx}`}
            onClick={() => handlePinButtonClick(value)}
            disabled={enteredPin.length === PIN_MAX_LENGTH}
          >
            {value}
          </PinButton>
        ))}
        <PinButton style={{ visibility: "hidden" }} />
        <PinButton
          onClick={() => handlePinButtonClick("0")}
          disabled={enteredPin.length === PIN_MAX_LENGTH}
        >
          0
        </PinButton>
        <PinButton onClick={handleDeleteButtonClick}>
          <RemoveButtonSVG />
        </PinButton>
      </ButtonsWrapper>
      <LoginButton
        disabled={enteredPin.length < PIN_MIN_LENGTH}
        onClick={handlePinSubmit}
      >
        {DEFAULT_LOG_IN_TEXT}
      </LoginButton>
    </PinPadWrapper>
  );
}
