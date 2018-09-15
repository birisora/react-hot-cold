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
  // check if action is to restart game
  if (action.type === RESTART_GAME) {
    return Object.assign({}, state, {
      guesses: [],
      feedback: 'Make your guess!',
      auralStatus: '',
      correctAnswer: action.correctAnswer
    });
  }


  // if none of the conditions matches we return just the state
  return state;
}
