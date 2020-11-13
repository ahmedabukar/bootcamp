import React from 'react';
import './CardEditor.css';

class CardEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { front: '', back: '' };
  }

  handleChange = event =>
   this.setState({ [event.target.name]: event.target.value});

  render() {
    const cards = this.props.cards.map((card, index) => {
      return (
        <tr key={index}>
          <td>{card.front}</td>
          <td>{card.back}</td>
          <td>
            <button>Delete Card</button>
          </td>
        </tr>

      );
    });

    return (
      <div>
        <h2>Card Editor</h2>
        <table>
          <thead>
            <tr>
              <th>Front</th>
              <th>Back</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{cards}</tbody>
        </table>
        <input 
          name="front"
          onChange={this.handleChange} 
          placeholder="Front of Card" 
          value={this.state.front}
        />
        <input 
          name='back'
          onChange={this.handleChange} 
          placeholder="Back of Card"
          value={this.state.back}
        />
        <button>Add card</button>

      </div>
    );
  }
} 

export default CardEditor;