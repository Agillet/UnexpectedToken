import React from 'react'
import { Route, Switch } from 'react-router';
import Contact from './views/Contact';
import Home from './views/Home';
import About from './views/About';

function Router() {
  return (
    <div className="App">

      <Route
        render={({ location }) => {
          return (
            <Switch location={location}>
              <Route exact path="/" component={Home} />
              <Route exact path="/about-me" component={About} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
          );
        }}
      />
    </div>
  )
}

export default Router
