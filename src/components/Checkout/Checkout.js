import React, { useState, useEffect } from "react";
import PriceDetails from "../PriceDetails/PriceDetails";
import { connect } from "react-redux";
import { faMinusCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactImageAppear from 'react-image-appear';
import "./Checkout.css";


const Checkout = props => {
  const [cartList, setCartList] = useState([]);

  console.log('IN CART', props.productsInCart);

  useEffect(() => {
    let cartIds= [];
    let cartItems= [];
    props.productsInCart.length > 0 && props.productsInCart.forEach((product) => {
        cartIds.push(product.id);
    })

    cartIds = getUnique(cartIds)
    console.log('cartItems', cartIds);

    cartIds.forEach((id) =>{
      console.log(id);
      var count = 0 ;
      props.productsInCart.length > 0 && props.productsInCart.forEach((product) => {
         console.log(id); 
        if(id === product.id){
          count++;
        }
        product.quantity = count;
      })
    });
    console.log(props.productsInCart);

    var value = getUniqueArr(props.productsInCart);

   console.log(value);
    
  }, []);



  return (
    <div className="row">
      <div className="col-md-8  overall-display">
        {props.productsInCart.map((product, index) => {
          return (
            <div key={product.id + index} className="row cart-display-items">
              <div className="col-md-2">
                <ReactImageAppear
                  className="img-size"
                  src={product.img_url}
                  animation="zoomIn"
                  animationDuration="1s"
                />
              </div>
              <div className="col-md-2">
                <div>{product.name}</div>
                <div>{product.price}</div>
              </div>
              <div className="col-md-3">
                <div className="row">
                  <span><FontAwesomeIcon icon={faMinusCircle} size="2x" /></span>
                  <span><p className="border-p">1</p></span>
                  <span><FontAwesomeIcon icon={faPlusCircle} size="2x" /></span>


                </div>
              </div>
              <div className="col-md-2 font-remove">REMOVE</div>
            </div>
          );
        })}
        {props.productsInCart.length === 0 && (<div className="items-in-cart">No Items in your Cart</div>)

        }
      </div>
      <div className="col-md-2 overall-display-price">
        <PriceDetails />
      </div>
    </div>
  );
};

const mapStatetoProps = state => {
  return {
    productsInCart: state.productsInCart
  };
};

export default connect(mapStatetoProps)(Checkout);


function getUnique(array){
  var uniqueArray = [];
  
  for(var i=0; i < array.length; i++){
      if(uniqueArray.indexOf(array[i]) === -1) {
          uniqueArray.push(array[i]);
      }
  }
  return uniqueArray;
}
function getUniqueArr(array){
  var uniqueArray = [];
    for(var i=0; i < array.length-1; i++){
      if(array[i].id !== array[i+1].id ) {
          uniqueArray.push(array[i]);
      }
  }
  return uniqueArray;
}
