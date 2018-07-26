import {ADD_ONE} from '../constant'
const initialState = 1

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ONE:
    return state+1;
  default:
    return state
  }
}
