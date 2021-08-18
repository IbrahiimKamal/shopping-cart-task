import Products from '../../components/Products/Products';
import SingleProduct from '../../components/SingleProduct/SingleProduct';

import styles from './HomePage.module.scss';

const HomePage = ({
  singleProduct,
  icreaseQty,
  decreaseQty,
  qty,
  addToCart,
  cartItems,
}) => {
  return (
    <>
      <section className={styles.product}>
        <div className="container">
          <SingleProduct
            singleProduct={singleProduct}
            icreaseQty={icreaseQty}
            decreaseQty={decreaseQty}
            qty={qty}
            addToCart={addToCart}
            cartItems={cartItems}
          />
        </div>
      </section>

      <section className={styles.product}>
        <div className="container">
          <Products />
        </div>
      </section>
    </>
  );
};

export default HomePage;
