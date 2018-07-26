import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import {getAddOne,getAddOneAsync} from './action/counters'
import {getList} from './action/user'


class App extends Component {
  render() {
    const {counter,handleClickAdd,handleClickAddAsync,handleGetlist,user} = this.props;
    let data;
    if(user.error){
      data=user.error;
    }else if(user.isFetching){
      data='loading...';
    }else{
      data=user.user&&user.user.data[0].name;
    }
    console.log(data)

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p>{counter}</p>
        <p><button onClick={handleClickAdd}>+</button></p>
        <p><button onClick={handleClickAddAsync}>+async</button></p>
        <p><button onClick={handleGetlist}>get user</button></p>
        <div>{data}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    counter: state.counter,
    user:state.user
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleClickAdd: () => {
      const action = getAddOne()
      dispatch(action)
    },
    handleClickAddAsync:()=>{
      const action = getAddOneAsync()
      dispatch(action)
    },
    handleGetlist:()=>{
      const action = getList();
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
