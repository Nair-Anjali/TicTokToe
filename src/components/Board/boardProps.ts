import { BoardState } from "../State/State";

export type BoardProps = {
  board: BoardState;
  onClick: (square: number) => void;
};