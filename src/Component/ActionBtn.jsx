
import IncandDec from "../Component/IncandDec";
import Magnetic from "../Component/Magnetic";
import PropTypes from 'prop-types';
import "../Styles/Product.scss";
import { useCart } from '../Component/CartContext';
function ActionBtn({ name, price, image }) {
  const { count, dec, inc } = IncandDec();
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ name, price, image });
  };

  return (
    <div>
      <div className="flex-btn">
        <div className="padd">
          <button className="minus" onClick={dec}>
            -
          </button>
          <p className="content">{count}</p>
          <button className="plus" onClick={inc}>
            +
          </button>
        </div>
        <div>
          <Magnetic>
            <button className="cart-btn" onClick={handleAddToCart}>
              ADD TO CART
            </button>
          </Magnetic>
        </div>
      </div>
    </div>
  );
}

ActionBtn.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.node, // Remove isRequired
};

export default ActionBtn;

