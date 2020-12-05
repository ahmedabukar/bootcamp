import React from 'react';
import './CardEditor.css';
import { Link, withRouter } from 'react-router-dom';
import { firebaseConnect, isLoaded } from 'react-redux-firebase';
import { connect } from 'react-redux'
import { compose } from 'redux';


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
    if (!isLoaded(this.props.cards)){
      return <div>Loading...</div>
    }
    
    
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
        <h2>{this.props.name}</h2>
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
        <Link to='/editor'> Go to Card Editor</Link>
      </div>
      
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  const deck = state.firebase.data.deck2;
  const name = deck && deck.name;
  const cards = deck && deck.cards;
  return {cards: cards, name: name, };
}


export default compose(
withRouter,
firebaseConnect(props => {
  console.log('props', props)
  const deckId = props.match.params.deckId;
  return [{ path: `/flashcards/${deckId}`, storeAs: 'deck2' }];
}),
connect(mapStateToProps),
)(CardViewer);