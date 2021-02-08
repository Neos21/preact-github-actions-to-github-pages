import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Profile from '../routes/profile';

import baseroute from '../baseroute';

export default class App extends Component {
  /**
   * Gets fired when the route changes.
   * 
   * @param {Object} event "change" event from [preact-router](http://git.io/preact-router)
   */
  handleRoute = (event) => {
    this.currentUrl = event.url;
  }
  
  render() {
    return (
      <div id="app">
        <Header />
        <Router onChange={this.handleRoute}>
          <Home path={`${baseroute}/`} />
          <Profile path={`${baseroute}/profile/`} user="me" />
          <Profile path={`${baseroute}/profile/:user`} />
        </Router>
      </div>
    );
  }
}
