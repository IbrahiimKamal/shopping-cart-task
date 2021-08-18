import { LazyLoadImage } from 'react-lazy-load-image-component';

import styles from './Product.module.scss';

const ProductCard = ({ product }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImgContainer}>
        <LazyLoadImage
          effect="blur"
          className={styles.cardImg}
          src={product.image}
          alt={product.info}
        />

        {/* <img
          className={styles.cardImg}
          src={product.image}
          alt={product.info}
        /> */}
        <div className={styles.circle}>
          <img src="/images/circle.svg" alt="" />
        </div>
      </div>
      <div>
        <p className={styles.info}>{product.info}</p>
        <div className={styles.prices}>
          <div>
            <p className={styles.price}>{product.price} LE</p>
            <span className={styles.price2}>{product.price} LE </span>
            <span className={styles.discound}>{product.discound}</span>
          </div>
          <img
            className={styles.addidasLogo}
            src="/images/addidasLogo.svg"
            alt="addidas_logo"
          />
        </div>
        <div className={styles.rate}>
          <span className={styles.rating}>
            <img src="/images/yellowStar.svg" alt="" />
            <img src="/images/yellowStar.svg" alt="" />
            <img src="/images/yellowStar.svg" alt="" />
            <img src="/images/yellowStar.svg" alt="" />
            <img src="/images/star.svg" alt="" />
          </span>
          <span className={styles.rates}>{product.rate}</span>
        </div>
        <div className={styles.shipping}>
          <p>
            From: <span>{product.from}</span>
          </p>
          <p>
            To: <span>{product.to}</span>
          </p>
          <p>
            in: <span>{product.inDays} days</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
