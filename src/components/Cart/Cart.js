import React from "react";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import "./Cart.css";

const Cart = props => {
  return (
    <div className="col-md-1">
      <div className="cart-bubble">{props.cartItems}</div>
      <FontAwesomeIcon icon={faCartPlus} size='2x' onClick={props.displayCart} />
    </div>
  );
};

const mapStatetoProps = state => {
  return {
    cartItems: state.noofCartItems,
    displayShoppingList: state.displayShoppingList
    
  };
};
const mapDispatchtoProps = dispatch =>{
  return{
    displayCart : () =>{
      dispatch({ type :'DISPLAY_CART', payload: false })
    } 
  }
}
export default connect(mapStatetoProps,mapDispatchtoProps)(Cart);
