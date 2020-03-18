import React from 'react';
import { Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Login from './auth/Login';
import AddFriend from './components/Addfriend';
import PrivateRoute from './components/PrivateRoute';
import FriendList from './components/FriendList';
import './App.css';


function App() {
  return (
    <div className='App'>
      <h1> Friends App </h1>
      <Navigation />
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/addfriend" component={AddFriend} />
      <PrivateRoute exact path="/friends" component={FriendList} />
    </div>
  );
}

export default App;
