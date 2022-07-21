/**
 * the history of each button click is recorded and displayed
 * takes in props of history and the jump to destination
 *  @author anjaliNair
 *  @since 16 July 2022
 *
 */

import * as React from 'react';
import styled from 'styled-components';
import { LogProps } from './LogProps';
import { BoardState } from '../State/State';
export function Log(props: LogProps) {
  const Button = styled.button`
  color: #000000;
  font-size: 1em;
  margin: 0.4em;
  padding: 1em;
  border: 2px solid #191970;
  background: #87CEEB;
  border-radius: 6px;
`;
  const [hasBeenReset, setHasbeenRest] = React.useState(false)
  const stepMovement = (index: number) => {
    props.jumpTo(index)
    if (index === 0) {
      setHasbeenRest(true)
    }
  }
  return (
    <>
      <ol>
        {!hasBeenReset ? props.history.map((_, index) => {
          return (
            <li key={index}>
              <Button onClick={() => stepMovement(index)}>
                {index === 0 ? 'Reset' : `Go to  move #${index}`}
              </Button>
            </li>
          );

        }) : <Button onClick={() => stepMovement(0)}>
          Reset
        </Button>}


      </ol>
    </>
  );
}
