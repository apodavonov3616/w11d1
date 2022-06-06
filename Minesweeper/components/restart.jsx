import React from 'react'; 

class Restart extends React.Component {
      constructor(props) {
            super(props)
      }

      render() {
            let active = " "
            let content = " "
            let header = " "
            if (this.props.board.won() || this.props.board.lost()) {
                  active = "is-active"
                  if (this.props.board.won()) {
                        this.header = "Congratulations"
                        this.content = "You've won. You found all the bombs. Do you want to play again?"
                  } else {
                        this.header = "Whoops. Too bad"
                        this.content = "You've lost. You stumbled onto a bomb. Do you want to play again?"
                  }
            } 
 

            return (
                  <section id="modal" className="modal is-active">
                        <article className="modal-content">
                              <span className="modal-close js-hide-modal">&times;</span>
                  
                              <h1>{header}</h1>
                  
                              <p>{content}</p>
                        </article>
                        <button onClick={this.props.game.restartGame()}></button>
                        <div className="modal-screen js-hide-modal"></div>
                </section>
            )
      }
}

export default Restart;