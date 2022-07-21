import * as React from 'react';
import styled from 'styled-components';
import { CellProps } from './CellProps';

const StyledSquare = styled.button`
  width: 74px;
  height: 74px;
  background: #B0E0E6;
  border: 1px solid #5F9EA0;
  padding: 0;
  font-size: 24px;
  font-weight: bold;
`;
export function Cell(props: CellProps) {
  return (
    <StyledSquare onClick={props.onClick}>
      {props.value}
    </StyledSquare>
  );
}
