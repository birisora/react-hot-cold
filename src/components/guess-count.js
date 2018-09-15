import React from 'react';
// import connect
import { connect } from 'react-redux';

import './guess-count.css';

// get rid of default
export function GuessCount(props) {
    const isPlural = props.guessCount !== 1;
    const guessNoun = isPlural ? 'guesses' : 'guess';

    return (
        <h2 id="guessCount">
            You've made <span id="count">{props.guessCount}</span> {guessNoun}!
        </h2>
    );
}

// describe how different part of the state should be inserted 
// into props of component
const mapStateToProps = state => ({
    guessCount: state.guesses.length
});

// use connect to make a new component that includes mapStateToProps
export default connect(mapStateToProps)(GuessCount);
