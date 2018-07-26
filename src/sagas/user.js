import{takeEvery,call,put} from 'redux-saga/effects';
import {INITDATA,DATA_SUCCESS,DATA_FAILED} from '../constant';
// import {getList} from '../action/user'
import axios from 'axios';



function* fetchUser(){
    try {
        const user = yield call(axios.get,"http://jsonplaceholdwer.typicode.com/users")
        console.log(user);
        yield put({type:DATA_SUCCESS,user:user})
    } catch (error) {
      console.log(error);
      yield put({type:DATA_FAILED,error:error.message})
    }
    
}
export function* getListSage(){
    yield takeEvery(INITDATA,fetchUser);  
}

// function* fetchTodo(){
//     const todos = yield call(axios.get,"http://jsonplaceholder.typicode.com/todos")
//     // yield put(getList())
//     console.log(todos);
// }

// export function* getTodoSage(){
//     yield takeEvery(INITDATA,fetchTodo);  
// }

