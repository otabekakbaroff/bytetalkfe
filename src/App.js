import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './components/login';
import SignUp from './components/register';
import PrivateRoute from './components/PrivateRoute';
import Profile from './components/profile';
import './App.css';


function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route  exact path="/" component={Login}/>
            <Route  path="/signup" component={SignUp}/>
            <PrivateRoute path="/profile" component={Profile}/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
