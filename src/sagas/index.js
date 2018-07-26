import{all,fork} from 'redux-saga/effects';
import * as mySaga from './counter';
import * as getListSage from './user';



export function* RootSaga(){
    yield all([
        ...Object.values(mySaga),
        ...Object.values(getListSage)
    ].map(fork))
}
