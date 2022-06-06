import React from 'react';
import * as Minesweeper from './minesweeper';
import Board from './board';

class Game extends React.Component {
      constructor(props) {
            super(props)
            this.state = {
                  board: new Minesweeper.Board(16, 40),
            }
            this.updateGame = this.updateGame.bind(this);
      }

      updateGame(tile, isFlagging) {
            if (isFlagging) {
                  tile.toggleFlag();

                  this.setState({
                        board: this.state.board
                  });
            } else {
                  tile.explore();
                  if (this.state.board.lost()){
                        this.state.board.revealAll();
                  };
                  this.setState({
                        board: this.state.board
                  })
            }
            
      }

      restartGame() {
            this.setState({
                  board: new Minesweeper.Board(16, 40)
            })
      }
      render() {
            let status = ""
            if (this.state.board.lost()) {
                  status = "You Lost!"
            }
            else if (this.state.board.won()) {
                  status = "You Won!"
            } else {
                  status = " "
            }
            
            return (
                  <div>
                        <h1 className="title">Minesweeper</h1>
                        <div className="minesweeper">
                              <Board update={this.updateGame} board={this.state.board} />
                        </div>
                        <h2 className="status">{status}</h2>
                        <div className="restart">
                              <button onClick={this.restartGame.bind(this)}>Restart</button>
                        </div>
                  </div>
            )
      }
}

export default Game;