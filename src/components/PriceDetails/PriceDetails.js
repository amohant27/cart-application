import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './PriceDetails.css'

const PriceDetails = (props) =>{

    const [totalCost,setTotalCost] = useState('');
    const [totalDiscount,setTotalDiscount] = useState('');
    const [totalAfterDiscount,setTotalAfterDiscount] = useState('');

    useEffect(()=>{
        let total = 0 ;
        let totalDiscountInCart = 0 ;
        let totalAftrDiscountPrice = 0 ;
        props.productsInCart.length >0 && props.productsInCart.map((product) =>{
            total += product.price;


            const totalAfterDiscount =  product.price - ((product.price * product.discount) / 100);
            const discountVal = (product.price * product.discount) / 100;

            totalAftrDiscountPrice += totalAfterDiscount ;
            totalDiscountInCart += discountVal;


        })
        setTotalCost(totalCost);
        setTotalDiscount(totalDiscountInCart);
        setTotalAfterDiscount(totalAftrDiscountPrice);
    },[]);

    return(
        <div className="price-details-class">
            <div className="ind-elem">Price Details : {totalCost}</div>
            <div className="ind-elem-discount">Discount:{totalDiscount}</div>
            <hr/>
            <div className="ind-elem-total">Total:{totalAfterDiscount}</div>
            
            
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        productsInCart : state.productsInCart
    }

}

export default connect(mapStateToProps)(PriceDetails);