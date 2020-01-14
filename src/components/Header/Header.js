import React from 'react';
import SearchProduct from '../SearchProducts/SearchProducts';
import Cart from '../Cart/Cart';
import './Header.css';

const Header = () => {
    return (
        <div className="container-class">
            <div className="row">
                <div className="col-md-10"></div>
                    <SearchProduct />
                    <Cart />
            </div>

        </div>
    )
}
export default Header;