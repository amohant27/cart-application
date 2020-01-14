import React,{ useState,useEffect } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ShoppingList from './components/ShoppingList/ShoppingList';
import Checkout from './components/Checkout/Checkout';
import { getItems } from '../src/service/axios';
import { connect }  from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const App = (props) =>{
  const [items, setItems] = useState('');
    useEffect(() => {
        (async () => {
            const res = await getItems();
            setItems(res.data);
            props.onUpdateProductList(res.data);
        })();
    }, []);

  return (
    <div className="App">
      <Header/>
      {props.displayShoppingList && <ShoppingList />}
      {!props.displayShoppingList && <Checkout />}
      {/* <Footer /> */}
    </div>
  );
}


const mapStatetoProps = (state) =>{
  return {
    displayShoppingList : state.displayShoppingList
  }
}

const mapDispatchtoProps = dispatch =>{
  return{
      onUpdateProductList : (items) =>{
        dispatch({ type :'UPDATE_PRODUCTS', payload : items})
      }
  }
}


export default connect(mapStatetoProps,mapDispatchtoProps)(App);
