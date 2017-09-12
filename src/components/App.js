import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { AppHome } from './AppHome';
import { AppPage } from './AppPage';

import { NavBar } from './NavBar';
import { Footer } from './Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />

          <Route exact path="/" component={AppHome} />
          <Route path="/subitem1" render={() => <AppPage name="subitem 1 from item 1" />} />
          <Route path="/subitem2" render={() => <AppPage name="subitem 2 from item 1" />} />
          <Route path="/subitem3" render={() => <AppPage name="subitem 3 from item 1" />} />
          <Route path="/item2" render={() => <AppPage name="item 2" />} />
          <Route path="/item3" render={() => <AppPage name="item 3" />} />
          <Route path="/item4" render={() => <AppPage name="item 4" />} />

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
