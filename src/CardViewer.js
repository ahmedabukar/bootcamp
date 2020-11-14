import React from 'react';
import './CardEditor.css';


class CardViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      side: true,
      index: 0,
    }

  }
  
  increment = () => this.setState({ index: this.state.index + 1 });
  decrement = () => this.setState({ index: this.state.index - 1 });
  switchSide = () => this.setState({ side: !this.state.side })


  render() {
    
    
    const index = this.state.index
    const cards = this.props.cards
    const length = cards.length

    if (this.state.side) {
      var cardFace = cards[index].front
    }
    else {
      var cardFace = cards[index].back
    }
    
    return(
      <div>
        <h2>Card Viewer</h2>
        <table onClick={this.switchSide}>
          <thead>
            <tr>
              <th>Card {this.state.index + 1}/{length}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{cardFace}</td>
            </tr>
          </tbody>
        </table>

        <hr/>
        <button onClick={this.decrement} disabled={this.state.index === 0}>Previous card</button>
        <button onClick={this.increment} disabled={this.state.index === length - 1}>Next Card</button>
        <hr/>
        <button onClick={this.props.switchMode}> Go to Card Editor</button>
      </div>
      
    );
  }
}

export default CardViewer;