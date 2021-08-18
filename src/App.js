import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import NavbarSearch from './components/NavbarSearch/NavbarSearch';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import { HomePage } from './pages';

class App extends Component {
  state = {
    singleProduct: {
      id: '1',
      title:
        'Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      category: 'man',
      rate: 4.5,
      rateCount: 22,
      price: '9,999',
      discount: '30% off',
      sizes: ['small', 'medium', 'large', 'x large', 'xx large'],
      colors: [
        'https://i.ibb.co/NZqvXQm/color2.png',
        'https://i.ibb.co/3zj9fgs/color1.png',
      ],
      src: [
        'https://i.postimg.cc/vBrb9ZnN/image11.jpg',
        'https://i.postimg.cc/Kc5f4DdP/shirt2.png',
        'https://i.postimg.cc/TwfmXZ2Z/shirt3.png',
        'https://i.postimg.cc/YqhFkNkq/shirt4.png',
        'https://i.ibb.co/RTctPzp/shirt1.png',
      ],
    },
    qty: 0,
    cartItems: [],
    isCartVisible: false,
  };

  icreaseQty = () => {
    this.setState((prevState) => {
      return {
        qty: prevState.qty + 1,
      };
    });
  };

  decreaseQty = () => {
    this.setState((prevState) => {
      if (this.state.qty > 1) {
        return {
          qty: prevState.qty - 1,
        };
      } else {
        return;
      }
    });
  };

  toggleCart = () => {
    this.setState({
      isCartVisible: !this.state.isCartVisible,
    });
  };

  addToCart = (product) => {
    this.setState({
      cartItems: product,
      qty: this.state.qty + 1,
    });
  };

  render() {
    return (
      <Router>
        <Header />
        <NavbarSearch
          cartItems={this.state.cartItems}
          toggleCart={this.toggleCart}
          isCartVisible={this.state.isCartVisible}
          qty={this.state.qty}
        />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomePage
              singleProduct={this.state.singleProduct}
              icreaseQty={this.icreaseQty}
              decreaseQty={this.decreaseQty}
              qty={this.state.qty}
              addToCart={this.addToCart}
              cartItems={this.state.cartItems}
            />
          </Route>
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
