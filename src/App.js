import React from 'react';
import {BrowserRouter as Router, Route, Link, BrowserRouter} from 'react-router-dom';
import { page1, page2,page3 } from './components';



function App() {
  return (
      <Router>
          <div>
              <nav>
                  <ul>
                      <li>
                          <Link to="/">Home</Link>
                      </li>
                      <li>
                          <Link to="/page1">About</Link>
                      </li>
                      <li>
                          <Link to="/page2">User</Link>
                      </li>
                      <li>
                          <Link to="/page3">User</Link>
                      </li>
                  </ul>
              </nav>
              <Route path='/' />
              <Route path='/page1' component={page1}/>
              <Route path='/page2' component={page2}/>
              <Route path='/page3' component={page3}/>

          </div>
      </Router>

  );
}

export default App;
