import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as firebase from 'firebase'
import {Route,Router,browserHistory,hashHistory} from 'react-router'

import FirebaseService from "./firebaseconfig/config"
import Header from './component/header/header';
import PaperExampleSimple from './component/pager/pager'

import Home from './component/Main/home';
import About from './component/Main/about';
import Contact from './component/Main/contact';


class App extends Component {
  constructor(){
    super()
    
  }

  render() {
    return (
      <div className="App"> 
          <Router history={browserHistory}>
              <Route path="/" component={PaperExampleSimple}></Route>
               <Route path="/home" component={Home}></Route>
              <Route path="/about" component={About}></Route>
              <Route path="contact" component={Contact}></Route>
          </Router>
      </div>
    );
  }
}

export default App;

        