/**
 * ************************************
 *
 * @module  App.jsx
 * @author
 * @date
 * @description
 *
 * ************************************
 */

import React from 'react';
import { render } from 'react-dom';
import './styles/styles.css';
import Login from './components/login.jsx';
import SignUp from './components/signup.jsx';
import BirdSearch from './components/birdSearch.jsx';
import Posts from './components/posts.jsx';
import ResultsDashboard from './components/resultsDashboard';

const App = () => {
  return(
        <div>
          <h1 id='header'>BirdWatch</h1>
          <BirdSearch/>
          <ResultsDashboard/>
          <Posts />
        </div>
  );
}

export default App;
// render(<App />, document.querySelector('#root'));