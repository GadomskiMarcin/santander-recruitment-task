import styled from "styled-components";
import { Column } from "@/components/column.ts";

export const PinPadWrapper = styled(Column)`
  text-align: center;
  max-width: 400px;
  margin: 0 auto;
  gap: 10px;
  color: #333;
  border-radius: 5px;
  box-shadow: -1px -2px 2px 4px rgba(0, 0, 0, 0.1);
`;
