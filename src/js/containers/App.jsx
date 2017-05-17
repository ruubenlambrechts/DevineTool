import React from 'react';

import DevTools from 'mobx-react-devtools';
import {Route, BrowserRouter as Router} from 'react-router-dom';

import Home from './Home';
import Add from './Add';

const App = () => {

  return (
    <section>

      {process.env.NODE_ENV !== `production` ? <DevTools /> : null}

      <header>
        <h1>Devine Uitstap Feedbackssysteem</h1>
      </header>

      <Router>
        <section>
          <Route
            exact path='/home'
            component={Home}
          />
          <Route
            exact path='/add'
            component={Add}
          />
        </section>
      </Router>

    </section>
  );

};

export default App;
