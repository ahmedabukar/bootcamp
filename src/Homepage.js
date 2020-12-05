import React from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect, isLoaded } from 'react-redux-firebase';


const mapStateToProps = state => {
  return { homepage: state.firebase.data.homepage };
};


const Homepage = props => {


    if (!isLoaded(props.homepage)) {
      return <div>Loading...</div>;
    }

    const decks = Object.keys(props.homepage).map(deckId => {
      return (
        <div key={deckId}>
          <Link to={`/viewer/${deckId}`}>{props.homepage[deckId].name}</Link>
        </div>
      );
    });


    return (
      <div>
        <h2>Homepage</h2>
        <Link to='/editor'> Go to Card Editor</Link>
        <br />
        <h5>Flashcards</h5>
        {decks}

      </div>
    );
}


export default compose(
  firebaseConnect(['/homepage']),
  connect(mapStateToProps),
)(Homepage);