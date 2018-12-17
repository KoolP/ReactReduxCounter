import { INCREMENT, DECREMENT, RESET, UNDO, REDO } from '../actionTypes'

const initalState = {
  history: [0],
  currentState: 0
}

export default function counterReducer (state = initalState, action) {
  // unwrap the state object
  const { history, currentState } = state
  // store current count in a separate varieble
  const count = history[currentState]

  //handel all counter-related actions:
  // ES6 spread operator adds old array elements with ...
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        history: [ ...history, count +1 ],
        currentState: history.length
      }
    case DECREMENT:
      return {
        ...state,
        history: [ ...history, count - 1 ],
        currentState: history.length
      }
    case RESET:
      return {
        ...state,
        history: [ ...history, 0 ],
        currentState: history.length
      }

    case UNDO:
      return {
        ...state,
        currentState: currentState <= 0
        ? currentState
        : currentState - 1
      }

    case REDO:
      return {
        ...state,
        currentState: currentState >= history.length - 1
        ? currentState
        : currentState + 1
      }

    default:
      return state
    }
}
