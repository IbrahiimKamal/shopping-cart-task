import './Button.scss';

const Button = ({ title, className, handleClick, qty }) => {
  // let disabled = qty === 0 ? false : true;

  return (
    <button className={`${'btnStyle'}   ${className}`} onClick={handleClick}>
      {title}
    </button>
  );
};

export default Button;
