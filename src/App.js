import React, { Component } from 'react';

import {BrowserRouter} from 'react-router-dom'
import UserCourses from './containers/UserCourses/UserCourses' 

class App extends Component {
  render () {
    return (
      <div className="App">
        <BrowserRouter>
          <UserCourses />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
