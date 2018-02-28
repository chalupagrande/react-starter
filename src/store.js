import {createStore} from 'redux'

const initialState = {
  greeting: 'HELLO'
}

function reducer(state = initialState, action){
  switch(action.type){
    case 'CHANGE_GREETING':
      return Object.assign(state, {greeting: action.greeting})
      break;
    default:
      return state;
  }
}

const store = createStore(reducer, 
  //need this for REDUX CHROME EXTENSION
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;