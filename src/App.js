
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter as Router,

  Route,
  Routes,
  Link,


} from "react-router-dom";


// eslint-disable-next-line
export default class extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <switch>
            <Routes>
              <Route path='/home'> <News pageSize={10} country="in" /></Route>
              <Route path='/about'> <News pageSize={10} country="in" /></Route>
              <Route path='/business'> <News pageSize={10} country="in" category="business" /></Route>
              <Route path='/entertainment'> <News pageSize={10} country="in" category="entertainment" /></Route>
              <Route path='/general'> <News pageSize={10} country="in" category="general" /></Route>
              <Route path='/health'> <News pageSize={10} country="in" category="health" /></Route>
              <Route path='/science'> <News pageSize={10} country="in" category="science" /></Route>
              <Route path='/sports'> <News pageSize={10} country="in" category="sports" /></Route>
              <Route path='/technology'> <News pageSize={10} country="in" category="technology" /></Route>
            </Routes>


          </switch>
        </div>
      </Router>
    )
  }
}


