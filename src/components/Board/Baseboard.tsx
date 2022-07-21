/**
 * table structure has been designed
 *  creating and associating each cell 
 *  it takes in two props of clickhandler and the state associated with it
 *  with a value and binding a click handler for the same
 *  @author anjaliNair
 *  @since 16 July 2022
 *
 */
import * as React from 'react';
import { Cell } from '../Cell/Cell';
import { Column, Row } from "../Layout/Layout";
import { CellProps } from '../Cell/CellProps';
import { BoardProps } from './boardProps';

export function Baseboard({ board, onClick }: BoardProps) {
  const createProps = (square: number): CellProps => {
    return {
      value: board[square],
      onClick: () => onClick(square),
    };
  };
  return (
    <Column space={0}>
      <Row space={0}>
        <Cell {...createProps(0)} />
        <Cell {...createProps(1)} />
        <Cell {...createProps(2)} />
      </Row>
      <Row space={0}>
        <Cell {...createProps(3)} />
        <Cell {...createProps(4)} />
        <Cell {...createProps(5)} />
      </Row>
      <Row space={0}>
        <Cell {...createProps(6)} />
        <Cell {...createProps(7)} />
        <Cell {...createProps(8)} />
      </Row>
    </Column>
  );
}
