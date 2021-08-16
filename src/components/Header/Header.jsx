import { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

class Header extends Component {
  state = {
    isHeaderOpen: false,
  };

  toggleHeaderHandler = () => {
    this.setState({
      isHeaderOpen: !this.state.isHeaderOpen,
    });
  };

  render() {
    return (
      <header className={styles.siteHeader}>
        <div className="container">
          <div className={styles.headerContainer}>
            <div className={styles.logoContainer}>
              {this.state.isHeaderOpen ? (
                <img
                  src="/images/close.svg"
                  className={styles.toggleIcon}
                  alt="toggle_icon"
                  onClick={this.toggleHeaderHandler}
                />
              ) : (
                <img
                  src="/images/toggleIcon.svg"
                  className={styles.toggleIcon}
                  alt="toggle_icon"
                  onClick={this.toggleHeaderHandler}
                />
              )}

              <img
                src="/images/toggleIcon.svg"
                className={styles.toggleIconLg}
                alt="toggle_icon"
              />

              <img
                src="/images/blackLogo.svg"
                className={styles.logo}
                alt="logo"
              />
            </div>

            {/* 188.58 */}
            <ul
              className={`${
                !this.state.isHeaderOpen ? styles.list : styles.showList
              }`}
            >
              <li className={styles.headerText}>
                <span>
                  <img
                    className={styles.arrow}
                    src="/images/arrowLeft.svg"
                    alt="arrow_icon"
                  />
                </span>
                <span className={styles.text}>
                  Valentine’s Day Offers! Buy Two Get One Free{' '}
                  <Link to="/">Shop Now</Link>
                </span>
                <span>
                  <img
                    className={styles.arrow}
                    src="/images/arrowRight.svg"
                    alt="arrow_icon"
                  />
                </span>
              </li>

              <li>
                <Link to="/" className={styles.listItems}>
                  <img
                    className={styles.listIcon}
                    src="/images/phoneIcon.svg"
                    alt="phone_icon"
                  />
                  <span className={styles.listText}>contact us</span>
                </Link>
              </li>

              <li>
                <Link to="/" className={styles.listItems}>
                  <img
                    className={styles.listIcon}
                    src="/images/basketIcon.svg"
                    alt="basket_icon"
                  />
                  <span className={styles.listText}>track order</span>
                </Link>
              </li>

              <li>
                <Link to="/" className={styles.listItems}>
                  <img
                    className={styles.listIcon}
                    src="/images/locationIcon.svg"
                    alt="location_icon"
                  />
                  <span className={styles.listText}>find a store</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
