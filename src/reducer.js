const initialState = {
  noofCartItems: 0,
  productsInCart:[],
  displayShoppingList: true,
  productList: [],
  sortedList: false,
};

const reducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return {...state,
      noofCartItems: state.noofCartItems + 1
    };
  }
  if (action.type === "ADD_PRODUCTS") {
    state.productsInCart.push(action.payload);
    return { ...state,
      productsInCart: state.productsInCart
    };
  }
  if(action.type === "DISPLAY_CART"){
    return{ ...state,displayShoppingList:action.payload}
  }
  if(action.type === "UPDATE_PRODUCTS"){
    return { ...state,
      productList: action.payload
    };
  }
  if(action.type === "SORTED_LIST"){
    return { ...state,
      sortedList: action.payload
    };
  }
  return state;
};

export default reducer;
