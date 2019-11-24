import React from 'react';
import {
    BrowserRouter as ReactRouter,
    Route
  } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Authenticate/Login';
import SignUp from './pages/Authenticate/SignUp';
import App from '../src/App';


function Router(props) {
  return (
    <ReactRouter >
        <App>
            <Route exact path="/" component={Home}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/signup" component={SignUp}></Route>
        </App>
    </ReactRouter > 
  );
}

export default App;
