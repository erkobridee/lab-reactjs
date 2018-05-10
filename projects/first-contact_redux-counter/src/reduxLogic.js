import { createStore } from 'redux';

const initalDefaultState = {
  count : 42
};

export const ACTIONS_TYPES = {
  INCREMENT : 'COUNTER:INCREMENT',
  DECREMENT : 'COUNTER:DECREMENT'
};

export const toDispatch = {
  increment : () => ({ type : ACTIONS_TYPES.INCREMENT }),
  decrement : () => ({ type : ACTIONS_TYPES.DECREMENT })
};

function reducer(state = initalDefaultState, action){
  switch(action.type){
    case ACTIONS_TYPES.INCREMENT:
      return {
        count : state.count + 1
      };
    case ACTIONS_TYPES.DECREMENT:
      return {
        count : state.count - 1
      };
    default:
      return state;
  }
}

export default createStore(reducer);