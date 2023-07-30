import styled, { css } from "styled-components";

export const PinDisplay = styled.div<{ $hasErrorOccurred: boolean }>`
  display: inline-block;
  padding: 10px 20px;
  background-color: #f0f0f0;
  height: 60px;
  font-size: 32px;
  text-align: center;
  align-items: center;
  align-content: center;
  vertical-align: middle;
  line-height: 60px;
  user-select: none;
  letter-spacing: 12px;

  ${({ $hasErrorOccurred }) =>
    $hasErrorOccurred &&
    css`
      background-color: #ffcccc;
      color: #cc0000;
      font-weight: bold;
    `}
`;
