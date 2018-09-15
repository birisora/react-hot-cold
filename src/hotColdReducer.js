// Here we should import actions
import { RESTART_GAME, MAKE_GUESS, GENERATE_AURAL_UPDATE } from './actions';

// create an initial state
/*
  this.state = {
    guesses: [],
    feedback: 'Make your guess!',
    auralStatus: '',
    correctAnswer: Math.floor(Math.random() * 100) + 1
  };
 */
const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  auralStatus: '',
  correctAnswer: Math.floor(Math.random() * 100) + 1
}

// we pass in a state and action
export default (state = initialState, action) => {
  // console.log('cheater! current answer is: ', state.correctAnswer);
  // check if action is to restart game
  if (action.type === RESTART_GAME) {
    console.log('restarting game!', action.correctAnswer);
    return Object.assign({}, state, {
      guesses: [],
      feedback: 'Make your guess!',
      auralStatus: '',
      correctAnswer: action.correctAnswer
    });
  }

  if (action.type === MAKE_GUESS) {
    console.log('MAKE GUESS');
  }

  if (action.type === GENERATE_AURAL_UPDATE) {
    console.log('GENERATE AURAL UPDATE');
    // copied from action.js
    const { guesses, feedback } = state;

    // If there's not exactly 1 guess, we want to
    // pluralize the nouns in this aural update.
    const pluralize = guesses.length !== 1;

    let  auralStatus = `Here's the status of the game right now: ${feedback} 
      You've made ${guesses.length} ${pluralize ? 'guesses' : 'guess'}.`;

    if (guesses.length > 0) {
      auralStatus += ` ${pluralize 
        ? 'In order of most- to least-recent, they are' 
        : 'It was'}: ${guesses.reverse().join(', ')}`;
    }

    // return using object.assign so that it doesn't mutate the state
    return Object.assign({}, state, { auralStatus });
  }


  // if none of the conditions matches we return just the state
  return state;
}
