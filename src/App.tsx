import React from 'react';
import logo from './logo.svg';
import './App.css';
import MessageWindowContainer from './components/message-window-components/message-window-container';
import Login from './components/login-component/login-form';
import {Provider} from "react-redux";
import store from "./redux/store-config";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LoginForm from './components/login-component/login-form';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Router>
          <Switch>
            <Route path="/login">
              <LoginForm></LoginForm>
            </Route>
            <Route path="/messages">
              <MessageWindowContainer/>
            </Route>
          </Switch>
        </Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </div>
    </Provider>
    
  );
}

export default App;
