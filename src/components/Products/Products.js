import ProductCard from '../ProductCard/ProductCard';

import { productsData } from '../../services/dummyData';

import styles from './Products.module.scss';

const Products = () => {
  return (
    <>
      <div className={styles.cardContainer}>
        {productsData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className={styles.underLine}></div>
    </>
  );
};

export default Products;
