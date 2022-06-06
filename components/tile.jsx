import React from 'react';

class Tile extends React.Component {
      constructor(props) {
            super(props);
            this.state = {

            }
      }

      handleClick(event) {
            event.preventDefault();
            this.props.update(this.props.obj, (event.altKey ? true : false));

      }
      render() {
            let renderTile = this.props.obj;
            let text = ""
            let classText = ""

            // Sets the Inner Text
            if (renderTile.explored && renderTile.bombed) {
                  classText = "bomb"
                  text = '💣';
            } else if (renderTile.explored) {
                  classText = "explored"
                  text = renderTile.adjacentBombCount().toString();
            } else if (renderTile.flagged) {
                  classText = "flagged"
                  text = "⚑"
            } else {
                  classText = "unexplored"
                  text = ' '
            }

            return (
                  <div onClick={this.handleClick.bind(this)} className={'tile tile-' + classText + ' num-' + text}>
                        {text}
                  </div>
            )
      }
}

export default Tile;