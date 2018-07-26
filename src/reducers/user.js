
import {INITDATA,DATA_SUCCESS,DATA_FAILED} from '../constant'
const initialState = {
  isFetching:false,
  error:null,
  user:null

}

export default (state = initialState, action) => {
  console.log(action)
  switch (action.type) {

  case INITDATA:
    return { 
      isFetching:true,
      error:null,
      user:null
     }
  case DATA_SUCCESS:
     return{
      isFetching:false,
      error:null,
      user:action.user
     }
  case DATA_FAILED:
    return{
      isFetching:false,
      error:action.error,
      user:null 
    }

  default:
    return state
  }
}
