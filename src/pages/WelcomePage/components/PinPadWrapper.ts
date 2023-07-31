import styled from "styled-components";
import { Column } from "@/components/column.ts";
import { defaultStyle } from "@/styles/defaultStyle.ts";

export const PinPadWrapper = styled(Column)`
  text-align: center;
  max-width: 400px;
  margin: 0 auto;
  gap: 10px;
  color: #333;
  border-radius: ${defaultStyle.sizes.pinpad.borderRadius};
  box-shadow: 0px -1px 2px 4px rgba(0, 0, 0, 0.1);
`;
