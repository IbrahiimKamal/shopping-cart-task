import InputSearch from '../InputSearch/InputSearch';

import styles from './NavbarSearch.module.scss';

const NavbarSearch = ({ cartItems, toggleCart, isCartVisible, qty }) => {
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
              onClick={toggleCart}
              className={styles.iconStyle}
              src="/images/cartIcon.svg"
              alt="cart_icon"
            />
            <span onClick={toggleCart} className={styles.textStyle}>
              Cart <span className={styles.counterStyle}>{qty}</span>
            </span>
            {isCartVisible && (
              <div className={styles.cartStyle}>
                {cartItems.length === 0 ? (
                  <img
                    className={styles.emptyCart}
                    src="/images/emptyCart.jpg"
                    alt="empty cart"
                  />
                ) : (
                  <div className={styles.cartProduct}>
                    <img src={cartItems.src[0]} alt="shirt" />
                    <div>
                      <p className={styles.productTitle}>{cartItems.title}</p>
                      <p className={styles.productQty}>Qyantitiy: {qty}</p>
                      <p>{cartItems.price} LE</p>
                    </div>
                  </div>
                )}
              </div>
            )}
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
