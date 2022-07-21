import * as React from 'react';
import { useGameState } from '../State/State';
import { Log } from '../Log/Log';
import { Baseboard } from '../Board/Baseboard';
import { Row, Column } from '../Layout/Layout';

function Game() {
  const {
    gameState,
    current,
    xIsNext,
    jumpTo,
    winner,
    handleClick,
  } = useGameState();

  return (
    <div className='gameStyler'>
      <Row space={20}>
        <Column space={20}>
          <div>{
            winner
              ? `Winner ${winner}`
              : `Next Player ${xIsNext ? 'X' : 'O'}`
          }</div>
          <Baseboard board={current} onClick={handleClick} />
        </Column>

        <Log history={gameState.history} jumpTo={jumpTo} />
      </Row>
    </div>
  );
}
export default Game;