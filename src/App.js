import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import NavbarSearch from './components/NavbarSearch/NavbarSearch';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import { HomePage } from './pages';

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <NavbarSearch />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
