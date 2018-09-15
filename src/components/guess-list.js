import React from 'react';
// import connect
import { connect } from 'react-redux';

import './guess-list.css';

// remove default since connect is default
export function GuessList(props) {
  const guesses = props.guesses.map((guess, index) => (
    <li key={index}>
      {guess}
    </li>
  ));

  return (
    <ul id="guessList" className="guessBox clearfix">
      {guesses}
    </ul>
  );
}

// use mapStateToProps to grab states we want to use
const mapStateToProps = state => ({
  guesses: state.guesses
});

// create a factory component with additional features
export default connect(mapStateToProps)(GuessList);