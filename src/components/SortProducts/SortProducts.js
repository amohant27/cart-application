import React from 'react';
import {connect} from 'react-redux'


const SortProducts = (props) =>{
    let newArr = [];
    const sortProducts = (type) =>{
        if(type === 'h-l'){
            newArr =   props.products.length>0 &&  props.products.sort(function(item1, item2){
                return item2.price-item1.price
            });
            props.setSortType('HL');

        }else{
            newArr = props.products.length>0 &&  props.products.sort(function(item1, item2){
                return item1.price-item2.price
            })
            props.setSortType('LH');

        }
        props.onUpdateSortedArr(newArr);
    }
    return (
        <div className="row ">
            <div className="col-md-2">Sort</div>
            <div className="col-md-4" onClick={sortProducts.bind(this,'h-l')}>Price: High - Low</div>
            <div className="col-md-4" onClick={sortProducts.bind(this,'l-h')}>Price: Low - High</div>
            <div className="col-md-2">Discount</div>
        </div>
    )
}

const mapDispatchtoProps = dispatch =>{
    return{
        onUpdateSortedArr : (productList) =>{
            dispatch({ type :'UPDATE_PRODUCTS', payload : productList});
        },
        setSortType: (type) =>{
            dispatch({ type :'SORTED_LIST', payload : type});
        }

    }
}

export default connect(null,mapDispatchtoProps)(SortProducts);