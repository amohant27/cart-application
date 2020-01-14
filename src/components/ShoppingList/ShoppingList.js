import React,{ useEffect, useState } from "react";
import "./ShoppingList.css";
import { connect } from "react-redux";
import addToKartImg from "../common/images/add-to-cart.png";
import SortProducts from "../SortProducts/SortProducts";
import ReactImageAppear from 'react-image-appear';

const ShoppingList = props => {
  const [item,itemsList] = useState('');
  useEffect(()=>{
    if(props.sorted === 'HL' || props.sorted === 'LH'){
      itemsList(props.itemsList);
    }
  },[props.itemsList]);


  const addItemstoCart = item => {
     props.onIncrementProduct();
     props.addProducts(item);
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-2">
          <div className="filter-div-class">
            <label className="label-class">Filters</label>
          </div>
        </div>
        <div className="col-md-9">
          <div className="row sort-product-class sort-class">
            <SortProducts  products={props.itemsList} />
          </div>
          <div className="row product-list-class">
            {props.itemsList &&
              props.itemsList.map(item => {
                return (
                  <div
                    key={item.id}
                    className="product-div col-md-4 item-class"
                  >
                    <div>
                      <ReactImageAppear 
                          className="product-img-size"
                          src={item.img_url}
                          animation="zoomIn"
                          animationDuration="1s"
                      />  
                    </div>
                    <div className="row">
                      <div className="col-md-4">{item.name}</div>
                    </div>
                    <div className="row">
                      <div className="col-md-4">Rs {item.price}</div>
                      <div className="col-md-1 item-strike-off">
                        {item.price + (item.price * item.discount) / 100}
                      </div>
                      <div className="col-md-1"></div>
                      <div className="col-md-4 item-discount">
                        {item.discount}% off
                      </div>
                    </div>
                    <div className="row"></div>
                    <div className="row">
                      <img
                        className="addto-img-size"
                        src={addToKartImg}
                        onClick={addItemstoCart.bind(this, item)}
                        alt=""
                      />

                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStatetoProps = state => {
  return {
    itemsIncart: state.noofCartItems,
    itemsList: state.productList,
    sorted: state.sortedList
  };
};

const mapDispatchtoProps = dispatch => {
  return {
    onIncrementProduct: () => {
      dispatch({ type: "INCREMENT" });
    },
    addProducts: (item) => {
      dispatch({ type: "ADD_PRODUCTS" ,payload : item});
    }
  };
};

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(ShoppingList);
