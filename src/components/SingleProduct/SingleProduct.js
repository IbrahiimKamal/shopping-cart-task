import { LazyLoadImage } from 'react-lazy-load-image-component';

import Button from '../Buttons/Button/Button';
import IncreaseDecreaseBtn from '../Buttons/IncreaseDecreaseBtn/IncreaseDecreaseBtn';

import './SingleProduct.scss';

const SingleProduct = ({
  singleProduct,
  icreaseQty,
  decreaseQty,
  qty,
  addToCart,
}) => {
  console.log(singleProduct);

  return (
    <div>
      {/* images */}

      <div className="product">
        {/* images */}
        <div className="productInfo">
          <div className="productImgContainer">
            {/* <img className="bigImage" src={singleProduct.src[0]} alt="" /> */}
            <LazyLoadImage
              effect="blur"
              className="bigImage"
              src={singleProduct.src[0]}
            />
            <img
              className="imageStyle"
              src="/images/circleWhite.svg"
              alt="icon"
            />
          </div>
          <div className="imagesContainer">
            <img src="/images/arrowLeft.svg" alt="icon" />
            <div className="imageContainer">
              <img className="images" src={singleProduct.src[1]} alt="" />
              <img className="images" src={singleProduct.src[2]} alt="" />
              <img className="images" src={singleProduct.src[3]} alt="" />
              <img className="images" src={singleProduct.src[4]} alt="" />
            </div>
            <img src="/images/arrowRight.svg" alt="icon" />
          </div>
        </div>
        {/* info */}
        <div>
          <img
            className="addidasLogo"
            src="/images/addidasLogo.svg"
            alt="addidas_logo"
          />
          <p className="title">{singleProduct.title}</p>
          <p className="category">{singleProduct.category}</p>
          <div>
            <div className="rate">
              <img src="/images/yellowStar.svg" alt="icon" />
              <img src="/images/yellowStar.svg" alt="icon" />
              <img src="/images/yellowStar.svg" alt="icon" />
              <img src="/images/yellowStar.svg" alt="icon" />
              <img src="/images/star.svg" alt="icon" />
              <span className="rateNumber">{singleProduct.rate} of 5</span>
              <span className="rates">{singleProduct.rateCount} Rates</span>
            </div>
            <div className="prices">
              <span className="price">{singleProduct.price} LE</span>
              <span>
                <span className="price2">{singleProduct.price} LE</span>
                <span className="descound">{singleProduct.discount}</span>
              </span>
            </div>
            <div className="sizeContainer">
              <h4>Size</h4>
              <div className="sizes">
                {singleProduct.sizes.map((size, index) => (
                  <span className="size" key={index}>
                    {size}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4>Color</h4>
              <div className="colors">
                {singleProduct.colors.map((color, index) => (
                  <div className="color" key={index}>
                    <img src={color} alt="" />
                  </div>
                ))}
              </div>
            </div>
            <h4 style={{ marginTop: '1rem' }}>Quantity</h4>
            <IncreaseDecreaseBtn
              qty={qty}
              icreaseQty={icreaseQty}
              decreaseQty={decreaseQty}
            />
            <div style={{ marginTop: '1rem' }}>
              <Button
                title="add to cart"
                handleClick={() => addToCart(singleProduct)}
                qty={qty}
              />
              <Button title="pick up from store" className="pickBtn" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
