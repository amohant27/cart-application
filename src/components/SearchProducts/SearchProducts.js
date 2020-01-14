import React from 'react';
import './SearchProducts.css';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchProducts = () =>{
    return (<div className="col-md-1">
        <FontAwesomeIcon icon={faSearch} size='2x' className="search-img-size"/>
    </div>)


}


export default SearchProducts;