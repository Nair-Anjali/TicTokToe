import { BoardState } from '../State/State';
export type LogProps = {
  history: BoardState[];
  jumpTo: (step: number) => void;
};