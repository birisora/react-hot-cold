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
  console.log('cheater! current answer is: ', state.correctAnswer);
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

  // makeing a guess
  if (action.type === MAKE_GUESS) {
    console.log('MAKE GUESS', action.guess);
    let feedback;
    let guess = parseInt(action.guess, 10);
    if (isNaN(guess)) {
      // can't use this.setState so
      feedback = 'Please enter a valid number';
      return Object.assign({}, state, {
        feedback,
        guesses: [...state.guesses, guess]
      });
    }

    const difference = Math.abs(guess - state.correctAnswer);

    if (difference >= 50) {
      feedback = 'You\'re Ice Cold...';
    } else if (difference >= 30) {
      feedback = 'You\'re Cold...';
    } else if (difference >= 10) {
      feedback = 'You\'re Warm.';
    } else if (difference >= 1) {
      feedback = 'You\'re Hot!';
    } else {
      feedback = 'You got it!';
    }

    // return back the state with the new feedback and guess
    return Object.assign({}, state, { feedback, guess });
  }

  // update aural status
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
