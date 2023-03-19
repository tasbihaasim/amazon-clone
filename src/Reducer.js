

export const initialState = {
    basket: [],
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "ADD_TO_BASKET":
        return {
          ...state,
          basket: [...state.basket, action.item],
        };
      case "REMOVE_ITEM":
        
          const index = state.basket.findIndex(
            (basketitem) => basketitem.id === action.id
          );
          let newbasket = [...state.basket];
          if (index >=0 ) {
            newbasket.splice(index, 1);
          }
          else{
            console.warn('item does not exist in the basket');
          }
          return {
            ...state, 
            basket: newbasket
          }

          
       
      default:
        return state;
    }
  };

export default reducer