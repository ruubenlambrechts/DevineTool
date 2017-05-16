import React from 'react';

import {PropTypes as MPropTypes, observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import {Route, BrowserRouter as Router} from 'react-router-dom';

import Home from './Home';

const App = ({store}) => {

  const {name} = store

  return (
    <section>

      {process.env.NODE_ENV !== `production` ? <DevTools/> : null}

      <header>
        <h1>Hello, {name}</h1>
      </header>

      <Router>
        <section>
          <Route
            exact path='/'
            component={Home}
          />
        </section>
      </Router>

    </section>
  );

};

App.propTypes = {
  store: MPropTypes.observableObject.isRequired
};

export default observer(App);
