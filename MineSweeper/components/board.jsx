import React from 'react';
import Tile from './tile';

class Board extends React.Component {
      constructor(props) {
            super(props);
            this.state = {

            }
      }

      render() {
            return (
                  <div className="board">
                        {this.props.board.grid.map((ele, idx) => {
                              return (
                                    <div className="board-row" key={idx.toString()}>
                                          {this.props.board.grid[idx].map((innerEle, innerIdx) => {
                                                return <Tile key={idx.toString() + innerIdx.toString()} update={this.props.update} obj={innerEle}/>
                                          })}
                                    </div>
                              )
                        })}
                  </div>
            )
      }
}

export default Board;