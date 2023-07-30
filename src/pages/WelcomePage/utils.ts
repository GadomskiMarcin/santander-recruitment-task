export const maskPin = (input: string, maskChar = "•") => {
  if (input.length === 0) {
    return "";
  }

  const lastChar = input.slice(-1);
  const maskedPart = input.slice(0, -1).replace(/./g, maskChar);

  return maskedPart + lastChar;
};
