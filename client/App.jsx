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
import './styles/styles.css';
import Login from './components/login.jsx';
import SignUp from './components/signup.jsx';
import BirdSearch from './components/birdSearch.jsx';
import Posts from './components/posts.jsx';


const App = () => {

  const [pageState, setPageState] = React.useState('login');

  return(
        <div>
          {pageState === 'login' && <Login setPageState={setPageState}/>}
          {pageState === 'signup' && <SignUp setPageState={setPageState}/>}
          {pageState === 'main' &&           
          <div>
          <h1>BirdWatch</h1>
          <BirdSearch/>
          <Posts />
          </div>}
        </div>
  );
}

export default App;
// render(<App />, document.querySelector('#root'));