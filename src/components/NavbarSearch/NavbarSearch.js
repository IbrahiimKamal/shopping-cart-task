import InputSearch from '../InputSearch/InputSearch';

import styles from './NavbarSearch.module.scss';

const NavbarSearch = () => {
  return (
    <div className="container">
      <nav className={styles.navStyle}>
        <InputSearch />
        <img
          className={styles.addidasLogo}
          src="/images/addidasLogo.svg"
          alt="addidas_logo"
        />
        <div className={styles.iconsContainer}>
          <span className={styles.iconContainer}>
            <img
              className={styles.iconStyle}
              src="/images/cartIcon.svg"
              alt="cart_icon"
            />
            <span className={styles.textStyle}>
              Cart <span className={styles.counterStyle}>0</span>
            </span>
          </span>
          <span className={styles.iconContainer}>
            <img
              className={styles.iconStyle}
              src="/images/favoriteIcon.svg"
              alt="favorite_icon"
            />
            <span className={styles.textStyle}>Wishlist</span>
          </span>
          <span className={styles.iconContainer}>
            <img
              className={styles.iconStyle}
              src="/images/loginIcon.svg"
              alt="login_icon"
            />
            <span className={styles.textStyle}>Login</span>
          </span>
        </div>
      </nav>
    </div>
  );
};

export default NavbarSearch;
