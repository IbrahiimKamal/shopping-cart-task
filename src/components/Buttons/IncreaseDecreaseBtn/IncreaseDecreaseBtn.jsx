import './IncreaseDecreaseBtn.scss';

const IncreaseDecreaseBtn = ({ qty, icreaseQty, decreaseQty }) => {
  return (
    <div className="qtyBtn">
      <span onClick={decreaseQty} className="qtyIcon">
        <img src="/images/decrease.svg" alt="icon" />
      </span>
      <span className="qty">{qty}</span>
      <span onClick={icreaseQty} className="qtyIcon">
        <img src="/images/increase.svg" alt="icon" />
      </span>
    </div>
  );
};

export default IncreaseDecreaseBtn;
