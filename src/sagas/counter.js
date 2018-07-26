import{takeEvery,put} from 'redux-saga/effects';
import {delay} from 'redux-saga'
import {ADD_ONE_ASYNC} from '../constant';
import {getAddOne} from '../action/counters';



function* addAsync(){
    yield delay(2000);
    yield put(getAddOne())
}
export function* mySaga(){
   yield console.log('hello saga')
   yield takeEvery(ADD_ONE_ASYNC,addAsync);
}

