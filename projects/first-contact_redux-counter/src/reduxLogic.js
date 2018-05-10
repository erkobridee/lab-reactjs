import { createStore } from 'redux';

const initalDefaultState = {
  count : 42
};

export const ACTIONS = {
  INCREMENT : 'COUNTER:INCREMENT',
  DECREMENT : 'COUNTER:DECREMENT'
};

function reducer(state = initalDefaultState, action){
  switch(action.type){
    case ACTIONS.INCREMENT:
      return {
        count : state.count + 1
      };
    case ACTIONS.DECREMENT:
      return {
        count : state.count - 1
      };
    default:
      return state;
  }
}

export default createStore(reducer);