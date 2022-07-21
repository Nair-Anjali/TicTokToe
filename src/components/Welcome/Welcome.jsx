/**
* A brief about the game 
*  has a style associated with it
*  @author anjaliNair
*  @since 16 July 2022
*
*/
import React from "react";
import './welcome.css'
import Game from '../Game/Game'

function Welcome() {
  return (
    <div>
      <div className="introContent">
        <h1>Welcome to tic-tac-toe Game</h1>
        <div className="parentContainer">
          <div className="intro">
            <p>
              Tic-tac-toe, noughts and crosses, or Xs and Os is a paper-and-pencil game for two
              players who take turns marking the spaces in a three-by-three grid with X or O.
              The player who succeeds in placing three of their marks in a horizontal, vertical,
              or diagonal row is the winner
            </p>
            <h4>Players:</h4> 2
            <h4>Other names:</h4> Noughts and Crosses; Xs and Os.
            <h4>Genres:</h4> Paper-and-pencil game
            <h4>Skills required:</h4> Strategy, tactics, observation

          </div>
          <div className="gameBoad">
            <Game />
          </div>
        </div>
      </div>
    </div>)
}
export default Welcome